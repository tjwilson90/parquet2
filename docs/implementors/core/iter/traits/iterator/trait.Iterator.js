(function() {var implementors = {};
implementors["parquet2"] = [{"text":"impl&lt;'a, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"parquet2/deserialize/enum.HybridEncoded.html\" title=\"enum parquet2::deserialize::HybridEncoded\">HybridEncoded</a>&lt;'a&gt;, <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>&gt;&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/deserialize/struct.FilteredHybridBitmapIter.html\" title=\"struct parquet2::deserialize::FilteredHybridBitmapIter\">FilteredHybridBitmapIter</a>&lt;'a, I&gt;","synthetic":false,"types":["parquet2::deserialize::filtered_rle::FilteredHybridBitmapIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/deserialize/struct.FixexBinaryIter.html\" title=\"struct parquet2::deserialize::FixexBinaryIter\">FixexBinaryIter</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::deserialize::fixed_len::FixexBinaryIter"]},{"text":"impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/deserialize/struct.HybridRleIter.html\" title=\"struct parquet2::deserialize::HybridRleIter\">HybridRleIter</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"parquet2/encoding/hybrid_rle/enum.HybridEncoded.html\" title=\"enum parquet2::encoding::hybrid_rle::HybridEncoded\">HybridEncoded</a>&lt;'a&gt;, <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["parquet2::deserialize::hybrid_rle::HybridRleIter"]},{"text":"impl&lt;'a, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/deserialize/struct.HybridRleBooleanIter.html\" title=\"struct parquet2::deserialize::HybridRleBooleanIter\">HybridRleBooleanIter</a>&lt;'a, I&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;I: <a class=\"trait\" href=\"parquet2/deserialize/trait.HybridRleRunsIterator.html\" title=\"trait parquet2::deserialize::HybridRleRunsIterator\">HybridRleRunsIterator</a>&lt;'a&gt;,&nbsp;</span>","synthetic":false,"types":["parquet2::deserialize::hybrid_rle::HybridRleBooleanIter"]},{"text":"impl&lt;T, V:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.63.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.63.0/std/primitive.bool.html\">bool</a>, <a class=\"enum\" href=\"parquet2/error/enum.Error.html\" title=\"enum parquet2::error::Error\">Error</a>&gt;&gt;, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/deserialize/struct.OptionalValues.html\" title=\"struct parquet2::deserialize::OptionalValues\">OptionalValues</a>&lt;T, V, I&gt;","synthetic":false,"types":["parquet2::deserialize::utils::OptionalValues"]},{"text":"impl&lt;T, I:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a>&lt;Item = T&gt;&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/deserialize/struct.SliceFilteredIter.html\" title=\"struct parquet2::deserialize::SliceFilteredIter\">SliceFilteredIter</a>&lt;I&gt;","synthetic":false,"types":["parquet2::deserialize::utils::SliceFilteredIter"]},{"text":"impl&lt;'a, T:&nbsp;<a class=\"trait\" href=\"parquet2/encoding/bitpacked/trait.Unpackable.html\" title=\"trait parquet2::encoding::bitpacked::Unpackable\">Unpackable</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/bitpacked/struct.Decoder.html\" title=\"struct parquet2::encoding::bitpacked::Decoder\">Decoder</a>&lt;'a, T&gt;","synthetic":false,"types":["parquet2::encoding::bitpacked::decode::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/delta_bitpacked/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_bitpacked::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::delta_bitpacked::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/delta_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::delta_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/delta_length_byte_array/struct.Decoder.html\" title=\"struct parquet2::encoding::delta_length_byte_array::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::delta_length_byte_array::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.BitmapIter.html\" title=\"struct parquet2::encoding::hybrid_rle::BitmapIter\">BitmapIter</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::hybrid_rle::bitmap::BitmapIter"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.Decoder.html\" title=\"struct parquet2::encoding::hybrid_rle::Decoder\">Decoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::hybrid_rle::decoder::Decoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/hybrid_rle/struct.HybridRleDecoder.html\" title=\"struct parquet2::encoding::hybrid_rle::HybridRleDecoder\">HybridRleDecoder</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::hybrid_rle::HybridRleDecoder"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/encoding/plain_byte_array/struct.BinaryIter.html\" title=\"struct parquet2::encoding::plain_byte_array::BinaryIter\">BinaryIter</a>&lt;'a&gt;","synthetic":false,"types":["parquet2::encoding::plain_byte_array::BinaryIter"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Seek.html\" title=\"trait std::io::Seek\">Seek</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/read/struct.IndexedPageReader.html\" title=\"struct parquet2::read::IndexedPageReader\">IndexedPageReader</a>&lt;R&gt;","synthetic":false,"types":["parquet2::read::page::indexed_reader::IndexedPageReader"]},{"text":"impl&lt;R:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/std/io/trait.Read.html\" title=\"trait std::io::Read\">Read</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/read/struct.PageReader.html\" title=\"struct parquet2::read::PageReader\">PageReader</a>&lt;R&gt;","synthetic":false,"types":["parquet2::read::page::reader::PageReader"]},{"text":"impl&lt;'a, V&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.63.0/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"parquet2/write/struct.DynIter.html\" title=\"struct parquet2::write::DynIter\">DynIter</a>&lt;'a, V&gt;","synthetic":false,"types":["parquet2::write::dyn_iter::DynIter"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()