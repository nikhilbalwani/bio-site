# Yet another academic homepage builder

This builder features simplicity and integration with BibTeX. The templates/CSS/scripts are hand-written without leveraging heavy scaffolds. To start, fork and edit [`index.md`](index.md), [`CNAME`](CNAME) and the assets (images).

**To migrate from the 2019 version,** see [this](#upgrading-from-2019).

## Steps of writing `index.md`

1. Write a code block with the language `bio-meta` to set up metadata.
2. Use a heading (level 1) with `#` to set the heading. **Use this only once.**
3. Write Markdown as usual with these extensions:
  - To add comments that are not output, write a code block with the language `bio-remove`. Note that however, these comments might still be publicly available, because by default the source files are published with the generated files.
  - To protect an excerpt so that it is printed as-is, write `<!--[bio][protect]your content here[bio]-->`. For example, you can use this to insert scripts.
  - To write a math equation, write `math:\LaTeX` or `display:\LaTeX` as inline code.
  - To include a list of papers, put the BibTeX citations in the order you want it to appear in a code block with the language `blog-bib`. The citations will have stable bookmark labels (HTML `id` attributes) and you can use them.
4. Run `build.sh` or `build.bat` or `build.js` to compile.

You can use the provided [`index.md`](index.md) as a reference or template, but not use (the specific content of) this file (relating to the original author). In particular, it is important that you change the email address part.

## Customizations

**Fav-icons, tiles, images.** See line 28&ndash;36 and 50 of [`builder/template.html`](builder/template.html#L28) and line 20 and 21 of [`builder/404.template.html`](builder/404.template.html#L20). Remove unwanted lines as you like. For information about tiles, see [the documentation](https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn455106%28v%3dvs.85%29) (quick note: images must be below 1024x1024 and below 200 KB).

**Date modified.** See line 63 of [`builder/template.html`](builder/template.html#63).

**Footer.** See line 69 of [`builder/template.html`](builder/template.html#L69). Footer removal does **not** violate the license, because it does not govern the output (webpage).

### BibTeX

On this website, there are a few extensions to BibTeX.

**URL inference.** BibTeX `url` field is **not** used. You can specify the main URL using `biosite_url`. If `biosite_url` is absent but `doi` is present, a URL can be inferred. If neither are present, the title is not a link.

**Venue.** `biosite_venue` specifies the main publication venue, which should be consistent with the link (if there is one).

**Info links.** By default, there are `biosite_arxiv`, `biosite_eprint` and `biosite_jcryptol`. (`biosite_jcryptol` is for dual publications whose main publication is a conference.) This is extensible. To add more kinds of info links, see line 109 of [`builder/marked.0.3.6/bibtex-service.js`](builder/marked.0.3.6/bibtex-service.js#L109). More specifically, `field` represents the field name (`biosite_xyz`), `name` represents the textual HTML (link name), `href1html` and `href2html` control URL stitching, `arialabel` provides a readable explanation of the link name (e.g., so that the screen reader knows `arXiv` should be read as `archive`).

**Title pronunciation.** You can use `biosite_arialabel` to specify a title readable by the screen readers. The logic for labelling is as follows:

- Is `aria-label` set in HTML output?
  - If `title` contains an equation, `aria-label` is set.
  - If `biosite_url` or `doi` is specified, **and** if `biosite_arialabel` is specified, `aria-label` is set.
  - Otherwise, `aria-label` is not set. (Even if `biosite_arialabel` is specified, it can be ignored.)
- If `aria-label` is set, what is the content?
  - If `biosite_arialabel` is specified, it is used.
  - Otherwise, the purified form of `title` is used.

It is important to use a correctly encoded (both per BibTeX and per TeX) `title` if you do not set `biosite_arialabel`.

## Upgrading from 2019

There are some significant changes since the 2019 version. Most notably, you need to take care of the following:

- The content was stored in `README.md`. It is now in `index.md`.
- Tile color was hard-coded in `builder/template.html`. It is now configured in the metadata in `index.md`.

The simplest way to migrate to the new version is as follows:

1. Make a backup copy of your files, then start from the current commit.
2. Replace `index.md` with your previous `README.md`.
3. Set `tilecolor` in `index.md` (see this repository for example).
4. Redo all customizations you have done to the templates.
