(function ()
{
const BibTeX = require('./bibtex.js');
const Utils = require('./bibtex-utils.js');

function field(entry, field)
{
    const field1 = entry.Fields[field];
    if (!field1)
    {
        return BibTeX.Strings.Literal.Empty;
    }
    const field2 = field1.Resolve();
    return field2 || BibTeX.Strings.Literal.Empty;
}

function RenderTitle(entry, result)
{
    const url = field(entry, 'glbiourl').Raw;
    if (url)
    {
        result.push('<div class="gl-bibtex-entry-title"><a href="',
            Utils.HtmlEncode(url), '">',
            Utils.TeX2Html(false, field(entry, 'title').Raw),
            '</a></div>\n');
        return;
    }
    result.push('<div class="gl-bibtex-entry-title">',
        Utils.TeX2Html(false, field(entry, 'title').Raw),
        '</div>\n');
}

const AuthorFormat = BibTeX.ParsePersonNameFormat('{ff }{vv~}{ll}{, jj}');
function RenderAuthors(entry, result)
{
    result.push('<div class="gl-bibtex-entry-authors">');
    const people = BibTeX.ParsePersonNames(field(entry, 'author'));
    const realpeople = [];
    let etal = false;
    for (const person of people)
    {
        if (person.IsEtal())
        {
            etal = true;
        }
        else
        {
            const formatted = AuthorFormat.Format(person);
            if (formatted.replace(/[ \t\v\f\r\n~-]+/g, '') !== '')
            {
                realpeople.push(Utils.TeX2Html(false, formatted));
            }
        }
    }
    if (realpeople.length === 0)
    {
        result.push('Anonymous');
    }
    else if (realpeople.length === 1)
    {
        result.push(realpeople[0]);
        if (etal)
        {
            result.push(', et&nbsp;al.');
        }
    }
    else if (etal)
    {
        result.push(realpeople.join(', '));
        result.push(', et&nbsp;al.');
    }
    else
    {
        result.push(realpeople.slice(0, realpeople.length - 1).join(', '));
        result.push(', and ');
        result.push(realpeople[realpeople.length - 1]);
    }
    result.push('</div>\n');
}

const ExtrasLinks = [
    { field: 'glbioeprint', name: 'ePrint' },
    { field: 'glbioarxiv', name: 'arXiv' },
];
function RenderExtras(entry, result)
{
    result.push('<div class="gl-bibtex-entry-extras">');
    let first = true;
    const glBIOinfo = field(entry, 'glbioinfo').Raw;
    if (glBIOinfo)
    {
        result.push('<span class="gl-bibtex-entry-extras-info">',
            Utils.TeX2Html(false, glBIOinfo),
            '</span>');
        first = false;
    }
    for (const item of ExtrasLinks)
    {
        const value = field(entry, item.field).Raw;
        if (!value)
        {
            continue;
        }
        if (!first)
        {
            result.push('<span aria-hidden="true"> | </span>');
        }
        else
        {
            first = false;
        }
        result.push('<a class="gl-bibtex-entry-extras-link" href="',
            Utils.HtmlEncode(value), '">',
            Utils.TeX2Html(false, item.name),
            '</a>');
    }
    if (!first)
    {
        result.push('</div>\n');
    }
    else
    {
        result.pop();
    }
}

function RenderDatabase(parsed)
{
    const result = ['<div class="gl-bibtex-bst-bio">\n'];
    let className = 'gl-bibtex-entry';
    const preamble = Utils.RenderPreambleHtml(parsed);
    if (preamble)
    {
        result.push('<div class="gl-bibtex-preamble">',
            preamble, '</div>\n');
        className = 'gl-bibtex-entry gl-bibtex-notfirstentry';
    }
    for (const entry of parsed.Entries)
    {
        result.push('<div class="', className, '">\n');
        RenderTitle(entry, result);
        RenderAuthors(entry, result);
        RenderExtras(entry, result);
        result.push('</div>\n');
        className = 'gl-bibtex-entry gl-bibtex-notfirstentry';
    }
    result.push('</div>');
    return result.join('');
}

function Handler(content)
{
    const parsed = BibTeX.ParseDatabase(content);
    return RenderDatabase(parsed);
}

const BlogBibTeX = {
    BibTeX: BibTeX,
    Handler: Handler
};

if (typeof module !== 'undefined' && typeof exports === 'object')
{
    module.exports = BlogBibTeX;
}
else if (typeof define === 'function' && define.amd)
{
    define(function() { return BlogBibTeX; });
}
else if (this)
{
    this.GL_BlogBibTeX = BlogBibTeX;
}
else if (typeof window !== 'undefined')
{
    window.GL_BlogBibTeX = BlogBibTeX;
}
else
{
    global.GL_BlogBibTeX = BlogBibTeX;
}
})();
