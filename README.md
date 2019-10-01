```bio-remove
Steps of using this template:

1. Write a code block with the language "bio-meta" to set up metadata.
2. Use a heading (level 1) with "#" to set the heading. Use this only once.
3. Write Markdown as usual with these extensions:
  - To add comments that are not printed, write a code block with the language "bio-remove".
  - To protect an excerpt so that it's printed as-is, write <!--[bio][protect]your content here[bio]-->.
  - To write a math equation, write `math:\LaTeX` or `display:\LaTeX`.
  - To include a list of papers, put the BibTeX citations in the order you want it to appear in a code block with the language "blog-bib".
4. Run "build.sh" or "build.bat" or "build.js" to compile.

NOTE that this README.md is not licensed under the MIT license. You can use this as a reference or template, but not use (the specific content of) this file (relating to the original author).
```

```bio-meta
{
    "name": "Ji Luo",
    "title": "Ji Luo | Curriculum Vitae",
    "description": "Ji Luo&#8217;s curriculum vitae.",
    "domain": "luoji.bio",
    "date-created": "2019-08-25",
    "repo": "https://github.com/GeeLaw/bio-site"
}
```

# Ji Luo<span aria-hidden="true"> (</span><span lang="zh-CN">罗辑</span><span aria-hidden="true">)</span>

<figure class="gl-page-background gl-float-right" style="text-align: center;"><img src="/assets/images/hero-image.jpg" alt="A photo of Ji Luo" width="160" height="160" style="max-width: 160px;" /></figure>

I’m a second-year Ph.D. student in computer science, advised by [Huijia (Rachel) Lin](https://homes.cs.washington.edu/~rachel/) and [Stefano Tessaro](https://homes.cs.washington.edu/~tessaro/). My primary research interest is cryptography and I’m also interested in security and computational complexity.

Prior to joining [Paul G. Allen School of Computer Science and Engineering](https://www.cs.washington.edu/) at the University of Washington, I was a Ph.D. student at [University of California, Santa Barbara](https://cs.ucsb.edu/) for a quarter. I obtained my bachelor’s degree from [Tsinghua University](https://www.tsinghua.edu.cn/publish/thu2018en/index.html), where I attended [Yao class](http://iiis.tsinghua.edu.cn/en/).

I can be reached at <span id="_eml" class="gl-eml">3-letter-name 2-letter-name at cs dot washington dot edu</span>.

<!--[bio][protect]
<script type="application/javascript">
window.setTimeout(function ()
{
var u = [228, 92, 74, 215, 63, 210, 81, 104, 137, 163, 84, 110, 57, 62, 121, 92, 41, 249, 37, 228, 235, 150, 183];
var v = [136, 41, 37, 189, 86, 146, 50, 27, 167, 212, 53, 29, 81, 87, 23, 59, 93, 150, 75, 202, 142, 242, 194];
var addr = [];
for (var i = 0; i !== 23; ++i)
{
addr.push(String.fromCharCode(u[i] ^ v[i]));
}
addr = addr.join('');
var tgt = document.getElementById('_eml');
tgt.innerHTML = '<a href="mailto:' + addr + '">' + addr + '</a>';
tgt.removeAttribute('class');
}, 600);
</script>
[bio]-->

## Publications

```blog-bib

@InProceedings{PKC:DLOSS18,
  author =       "Ivan Damg{\r a}rd and
                  Ji Luo and
                  Sabine Oechsner and
                  Peter Scholl and
                  Mark Simkin",
  title =        "Compact Zero-Knowledge Proofs of Small Hamming Weight",
  pages =        "530--560",
  editor =       pkc18ed,
  booktitle =    pkc18name2,
  volume =       pkc18vol2,
  address =      pkc18addr,
  month =        pkc18month,
  publisher =    pkcpub,
  series =       mylncs,
  year =         2018,
  doi =          "10.1007/978-3-319-76581-5_18",

  biosite_url={https://link.springer.com/chapter/10.1007/978-3-319-76581-5_18},
  biosite_venue={PKC 2018},
  biosite_eprint={2017/1041},
}

```

## Pre-prints

```blog-bib

@article{ARXIV:LLZCX19,
  author    = {Ting Fung Lau and
               Ji Luo and
               Shengyu Zhao and
               Eric I{-}Chao Chang and
               Yan Xu},
  title     = {Unsupervised 3D End-to-End Medical Image Registration with Volume
               Tweening Network},
  journal   = {CoRR},
  volume    = {abs/1902.05020},
  year      = {2019},
  url       = {http://arxiv.org/abs/1902.05020},
  archivePrefix = {arXiv},
  eprint    = {1902.05020},
  timestamp = {Tue, 21 May 2019 18:03:37 +0200},
  biburl    = {https://dblp.org/rec/bib/journals/corr/abs-1902-05020},
  bibsource = {dblp computer science bibliography, https://dblp.org},

  biosite_arxiv = {1902.05020},
}

```
