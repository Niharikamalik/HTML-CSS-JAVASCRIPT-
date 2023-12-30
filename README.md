# Development 
## HTML 
### HTML basics [Files](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/tree/main/HTML)

* `<!DOCTYPE HTML>` : define documnet type for browser 
* `<html>` element is the root element of an HTML page
* `<head>` element contains meta information about the HTML page
* `<title>` element specifies a title for the HTML page (which is shown in the browser's title bar or in the page's tab)
* `<body>` element defines the document's body, and is a container for all the visible contents, such as headings, paragraphs, images, hyperlinks, tables, lists, etc.
* `<h1>` element defines a large heading
    * HTML headings are defined with the `<h1>` to `<h6>` tags. [Hearders in html](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/blob/main/HTML/HeadingPara.html)
* `<p>` element defines a paragraph.[paragraph in html](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/blob/main/HTML/HeadingPara.html)
  
* `<a>` HTML links are defined with the `<a>` tag
    * The `href` attribute specifies the URL of the page the link goes to.[syntax](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/blob/main/HTML/links.html)
* `<img>` HTML images are defined with the <img> tag.
    - The source file (src), alternative text (alt), width, and height are provided as attributes.[syntax](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/blob/main/HTML/links.html)
### HTML Formatting Elements [syntax](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/blob/main/HTML/links.html)
Formatting elements were designed to display special types of text:
* `<b>` - Bold text
* `<strong>` - Important text
* `<i>` - Italic text
* `<em>` - Emphasized text
* `<mark>` - Marked text
* `<small>` - Smaller text
* `<del>` - Deleted text
* `<ins>` - Inserted text
* `<sub>` - Subscript text
* `<sup>` - Superscript text

### HTML Quotation and citation element 
* `<abbr>`Defines an abbreviation or acronym
* `<address>`Defines contact information for the author/owner of a document
* `<bdo>`Defines the text direction
* `<blockquote>`Defines a section that is quoted from another source
* `<cite>`Defines the title of a work
* `<q>`Defines a short inline quotation
### HTML list [Example syntax ](https://github.com/Niharikamalik/HTML-CSS-JAVASCRIPT-/blob/main/HTML/list.html)
*`<ul>`	Defines an unordered list
*`<ol>`	Defines an ordered list
*`<li>`	Defines a list item
*`<dl>`	Defines a description list
*`<dt>`	Defines a term in a description list
*`<dd>`	Describes the term in a description list
### Block-level Elements
    A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.
    A block-level element always takes up the full width available (stretches out to the left and right as far as it can).
    Two commonly used block elements are: `<p>` and `<div>`.
    The `<p>` element defines a paragraph in an HTML document.
    The `<div>` element defines a division or a section in an HTML document.
        `<address><article><aside><blockquote>
        <canvas><dd><div><dl><dt><fieldset>
        <figcaption><figure><footer><form>
        <h1>-<h6><header><hr><li><main><nav>
        <noscript><ol><p><pre><section><table>
        <tfoot><ul><video></video>`

### Inline Elements
    An inline element does not start on a new line.
    An inline element only takes up as much width as necessary.
    This is a <span> element inside a paragraph.
        `<a><abbr><b><bdo><br><button><cite>
        <code><dfn><em><i><img><input>
        <kbd><label><map><object>
        <output><q><samp> `
### `<div>` Element
    The `<div>` element is by default a block element, meaning that it takes all available width, and comes with line breaks before and after.
    The <div> element is often used to group sections of a web page together.
### id Attribute
        The id attribute specifies a unique id for an HTML element. The value of the id attribute must be unique within the HTML document.
        The id attribute is used to point to a specific style declaration in a style sheet. It is also used by JavaScript to access and manipulate the element with the specific id.
        The syntax for id is: write a hash character (#), followed by an id name. Then, define the CSS properties within curly braces {}.
        In the following example we have an `<h1>` element that points to the id name "myHeader". This` <h1> `element will be styled according to the #myHeader style definition in the head section