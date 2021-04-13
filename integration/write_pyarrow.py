import pyarrow as pa
import pyarrow.parquet
import os
import shutil

PYARROW_PATH = "fixtures/pyarrow3"

def case_basic_nullable(size = 1):
    int64 = [0, 1, None, 3, None, 5, 6, 7, None, 9]
    float64 = [0.0, 1.0, None, 3.0, None, 5.0, 6.0, 7.0, None, 9.0]
    string = ["Hello", None, "aa", "", None, "abc", None, None, "def", "aaa"]
    boolean = [True, None, False, False, None, True, None, None, True, True]

    fields = [
        pa.field('int64', pa.int64()),
        pa.field('float64', pa.float64()),
        pa.field('string', pa.utf8()),
        pa.field('bool', pa.bool_()),
        pa.field('date', pa.timestamp('ms')),
        pa.field('uint32', pa.uint32()),
    ]
    schema = pa.schema(fields)

    return {
        "int64": int64 * size,
        "float64": float64 * size,
        "string": string * size,
        "bool": boolean * size,
        "date": int64 * size,
        "uint32": int64 * size,
    }, schema, f"basic_nullable_{size*10}.parquet"


def case_basic_required(size = 1):
    int64 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    float64 = [0.0, 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0]
    string = ["Hello", "bbb", "aa", "", "bbb", "abc", "bbb", "bbb", "def", "aaa"]
    boolean = [True, True, False, False, False, True, True, True, True, True]

    fields = [
        pa.field('int64', pa.int64(), nullable=False),
        pa.field('float64', pa.float64(), nullable=False),
        pa.field('string', pa.utf8(), nullable=False),
        pa.field('bool', pa.bool_(), nullable=False),
        pa.field('date', pa.timestamp('ms'), nullable=False),
        pa.field('uint32', pa.uint32(), nullable=False),
    ]
    schema = pa.schema(fields)

    return {
        "int64": int64 * size,
        "float64": float64 * size,
        "string": string * size,
        "bool": boolean * size,
        "date": int64 * size,
        "uint32": int64 * size,
    }, schema, f"basic_required_{size*10}.parquet"


def case_nested(size):
    items = [[0, 1], None, [2, None, 3], [4, 5, 6], [], [7, 8, 9], None, [10]]
    fields = [
        pa.field('list_int64', pa.list_(pa.int64())),
    ]
    schema = pa.schema(fields)
    return {
        "list_int64": items * size,
    }, schema, f"nested_nullable_{size*10}.parquet"


def write_pyarrow(case, size = 1, page_version = 1):
    data, schema, path = case(size)

    base_path = f"{PYARROW_PATH}/v{page_version}"

    t = pa.table(data, schema=schema)
    os.makedirs(base_path, exist_ok=True)
    pa.parquet.write_table(t, f"{base_path}/{path}", data_page_version=f"{page_version}.0")


write_pyarrow(case_basic_nullable, 1, 1)  # V1
write_pyarrow(case_basic_nullable, 1, 2)  # V2

write_pyarrow(case_basic_required, 1, 1)  # V1
write_pyarrow(case_basic_required, 1, 2)  # V2

# for read benchmarks
for i in [10, 100, 1000, 10000]:
    write_pyarrow(case_basic_nullable, i, 1)  # V1

write_pyarrow(case_nested, 1, 1)