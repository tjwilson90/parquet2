(function() {var implementors = {};
implementors["parquet2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":false,"types":["parquet2::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":false,"types":["parquet2::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/std/io/error/struct.Error.html\" title=\"struct std::io::error::Error\">Error</a>&gt; for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":false,"types":["parquet2::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/alloc/collections/struct.TryReserveError.html\" title=\"struct alloc::collections::TryReserveError\">TryReserveError</a>&gt; for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":false,"types":["parquet2::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/core/num/error/struct.TryFromIntError.html\" title=\"struct core::num::error::TryFromIntError\">TryFromIntError</a>&gt; for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":false,"types":["parquet2::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.63.0/core/array/struct.TryFromSliceError.html\" title=\"struct core::array::TryFromSliceError\">TryFromSliceError</a>&gt; for <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>","synthetic":false,"types":["parquet2::error::Error"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/enum.Repetition.html\" title=\"enum parquet2::schema::Repetition\">Repetition</a>&gt; for FieldRepetitionType","synthetic":false,"types":["parquet_format_safe::parquet_format::FieldRepetitionType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/compression/enum.Compression.html\" title=\"enum parquet2::compression::Compression\">Compression</a>&gt; for CompressionCodec","synthetic":false,"types":["parquet_format_safe::parquet_format::CompressionCodec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/compression/enum.CompressionOptions.html\" title=\"enum parquet2::compression::CompressionOptions\">CompressionOptions</a>&gt; for <a class=\"enum\" href=\"parquet2/compression/enum.Compression.html\" title=\"enum parquet2::compression::Compression\">Compression</a>","synthetic":false,"types":["parquet2::parquet_bridge::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/compression/enum.CompressionOptions.html\" title=\"enum parquet2::compression::CompressionOptions\">CompressionOptions</a>&gt; for CompressionCodec","synthetic":false,"types":["parquet_format_safe::parquet_format::CompressionCodec"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"parquet2/compression/struct.BrotliLevel.html\" title=\"struct parquet2::compression::BrotliLevel\">BrotliLevel</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/flate2/0.2/flate2/struct.Compression.html\" title=\"struct flate2::Compression\">Compression</a>","synthetic":false,"types":["flate2::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"parquet2/compression/struct.GzipLevel.html\" title=\"struct parquet2::compression::GzipLevel\">GzipLevel</a>&gt; for <a class=\"struct\" href=\"https://docs.rs/flate2/0.2/flate2/struct.Compression.html\" title=\"struct flate2::Compression\">Compression</a>","synthetic":false,"types":["flate2::Compression"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/page/enum.PageType.html\" title=\"enum parquet2::page::PageType\">PageType</a>&gt; for ParquetPageType","synthetic":false,"types":["parquet_format_safe::parquet_format::PageType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/encoding/enum.Encoding.html\" title=\"enum parquet2::encoding::Encoding\">Encoding</a>&gt; for ParquetEncoding","synthetic":false,"types":["parquet_format_safe::parquet_format::Encoding"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/indexes/enum.BoundaryOrder.html\" title=\"enum parquet2::indexes::BoundaryOrder\">BoundaryOrder</a>&gt; for ParquetBoundaryOrder","synthetic":false,"types":["parquet_format_safe::parquet_format::BoundaryOrder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;TimeUnit&gt; for <a class=\"enum\" href=\"parquet2/schema/types/enum.TimeUnit.html\" title=\"enum parquet2::schema::types::TimeUnit\">TimeUnit</a>","synthetic":false,"types":["parquet2::parquet_bridge::TimeUnit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.TimeUnit.html\" title=\"enum parquet2::schema::types::TimeUnit\">TimeUnit</a>&gt; for ParquetTimeUnit","synthetic":false,"types":["parquet_format_safe::parquet_format::TimeUnit"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.GroupLogicalType.html\" title=\"enum parquet2::schema::types::GroupLogicalType\">GroupLogicalType</a>&gt; for ParquetLogicalType","synthetic":false,"types":["parquet_format_safe::parquet_format::LogicalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.bool.html\">bool</a>)&gt; for <a class=\"enum\" href=\"parquet2/schema/types/enum.IntegerType.html\" title=\"enum parquet2::schema::types::IntegerType\">IntegerType</a>","synthetic":false,"types":["parquet2::parquet_bridge::IntegerType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.IntegerType.html\" title=\"enum parquet2::schema::types::IntegerType\">IntegerType</a>&gt; for (<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.usize.html\">usize</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.bool.html\">bool</a>)","synthetic":false,"types":[]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.PrimitiveLogicalType.html\" title=\"enum parquet2::schema::types::PrimitiveLogicalType\">PrimitiveLogicalType</a>&gt; for ParquetLogicalType","synthetic":false,"types":["parquet_format_safe::parquet_format::LogicalType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;<a class=\"struct\" href=\"parquet2/metadata/struct.ColumnChunkMetaData.html\" title=\"struct parquet2::metadata::ColumnChunkMetaData\">ColumnChunkMetaData</a>&gt; for <a class=\"struct\" href=\"parquet2/read/struct.PageMetaData.html\" title=\"struct parquet2::read::PageMetaData\">PageMetaData</a>","synthetic":false,"types":["parquet2::read::page::reader::PageMetaData"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.PhysicalType.html\" title=\"enum parquet2::schema::types::PhysicalType\">PhysicalType</a>&gt; for (Type, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i32.html\">i32</a>&gt;)","synthetic":false,"types":["parquet_format_safe::parquet_format::Type","core::option::Option"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.GroupConvertedType.html\" title=\"enum parquet2::schema::types::GroupConvertedType\">GroupConvertedType</a>&gt; for ConvertedType","synthetic":false,"types":["parquet_format_safe::parquet_format::ConvertedType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/schema/types/enum.PrimitiveConvertedType.html\" title=\"enum parquet2::schema::types::PrimitiveConvertedType\">PrimitiveConvertedType</a>&gt; for (ConvertedType, <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;(<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i32.html\">i32</a>, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i32.html\">i32</a>)&gt;)","synthetic":false,"types":["parquet_format_safe::parquet_format::ConvertedType","core::option::Option"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"parquet2/write/enum.Version.html\" title=\"enum parquet2::write::Version\">Version</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.i32.html\">i32</a>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()