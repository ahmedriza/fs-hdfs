(function() {var implementors = {};
implementors["idna"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"idna/struct.Errors.html\" title=\"struct idna::Errors\">Errors</a>&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.56.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"idna/struct.Errors.html\" title=\"struct idna::Errors\">Errors</a>&gt;","synthetic":false,"types":["core::result::Result"]}];
implementors["percent_encoding"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"percent_encoding/struct.PercentEncode.html\" title=\"struct percent_encoding::PercentEncode\">PercentEncode</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.56.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.str.html\">str</a>&gt;","synthetic":false,"types":["alloc::borrow::Cow"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"percent_encoding/struct.PercentDecode.html\" title=\"struct percent_encoding::PercentDecode\">PercentDecode</a>&lt;'a&gt;&gt; for <a class=\"enum\" href=\"https://doc.rust-lang.org/1.56.0/alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'a, <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.slice.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.slice.html\">]</a>&gt;","synthetic":false,"types":["alloc::borrow::Cow"]}];
implementors["tinyvec"] = [{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;A&gt; for <a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::arrayvec::ArrayVec"]},{"text":"impl&lt;'s, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'s mut [T]&gt; for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt;","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;'s, T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'s mut A&gt; for <a class=\"struct\" href=\"tinyvec/struct.SliceVec.html\" title=\"struct tinyvec::SliceVec\">SliceVec</a>&lt;'s, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.AsMut.html\" title=\"trait core::convert::AsMut\">AsMut</a>&lt;[T]&gt;,&nbsp;</span>","synthetic":false,"types":["tinyvec::slicevec::SliceVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"tinyvec/struct.ArrayVec.html\" title=\"struct tinyvec::ArrayVec\">ArrayVec</a>&lt;A&gt;&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]},{"text":"impl&lt;A:&nbsp;<a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;A&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt;","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]},{"text":"impl&lt;T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ [T]&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&lt;Item = T&gt;,&nbsp;</span>","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]},{"text":"impl&lt;T, A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;&amp;'_ mut [T]&gt; for <a class=\"enum\" href=\"tinyvec/enum.TinyVec.html\" title=\"enum tinyvec::TinyVec\">TinyVec</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"tinyvec/trait.Array.html\" title=\"trait tinyvec::Array\">Array</a>&lt;Item = T&gt;,&nbsp;</span>","synthetic":false,"types":["tinyvec::tinyvec::TinyVec"]}];
implementors["unicode_bidi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"struct\" href=\"unicode_bidi/level/struct.Level.html\" title=\"struct unicode_bidi::level::Level\">Level</a>","synthetic":false,"types":["unicode_bidi::level::Level"]}];
implementors["url"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"idna/uts46/struct.Errors.html\" title=\"struct idna::uts46::Errors\">Errors</a>&gt; for <a class=\"enum\" href=\"url/enum.ParseError.html\" title=\"enum url::ParseError\">ParseError</a>","synthetic":false,"types":["url::parser::ParseError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"url/struct.Url.html\" title=\"struct url::Url\">Url</a>&gt; for <a class=\"struct\" href=\"https://doc.rust-lang.org/1.56.0/alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>","synthetic":false,"types":["alloc::string::String"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()