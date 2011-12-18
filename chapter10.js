/* Chapter 10 */

/*

The DOM
- Kısaca bir API. sayfayı hiyerarşik bir tree olarak sunuyor. Her node'u eklemek/editelemek/değiştirmek vs için bu API'ı
kullanıosun.

DOM Level 1
- W3C tarafından Ekim 98'de standartlaştırıldı. Level 1'i şu an hemen hemen her browser destekliyor.

***Hierarchy of Nodes
- Any HTML or XML document can be represented as a hierarchy of nodes using the DOM. Her bir mark-up Tree'de kendine yer
bulur.

The Node Type
- Level 1'in Node die bir interface'i var. IE hariç tüm browser'lardan erişilebilir.

- Node'ların 12 tane numeric constant'i var:
Node.ELEMENT_NODE, Node.ATTRIBUTE_NODE, Node.TEXT_NODE...

- Her Node nodeType property'sine sahip.
if (someNode.nodeType == 1) {	//works in all browsers
    alert(“Node is an element.”);
}

The nodeName and nodeValue Properties
- Two properties, nodeName and nodeValue, give specific information about the node. . It’s always best to test the node
type before using one of these values, as the following code shows:
if (someNode.nodeType == 1) {
    value = someNode.nodeName;	//will be the element’s tag name
}

Node Relationships
- Her Node'un diğer Node'larla bir ilişkisi var. Parent-child ilişkisi var mesela, sibling var.. Each node has a
childNodes property containing a NodeList.

var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
var count = someNode.childNodes.length;

Manipulating Nodes
- Because all relationship pointers are read-only, several methods are available to manipulate nodes. En çok appendChild(),
kullanılıyor. childNodes list'in sonuna yeni bir eleman ekliyor.

Other Methods
- cloneNode() mesela.

The Document Type
- Document HTML'in tamamını temsil ediyor. Aslında window'un bir property'si. nodeType'ı 9, parentNode'u null...

Document Information
- document.title, document.domain, document.referrer...

Locating Elements
- getElementById(), getElementsByTagName()!
var myImage = images.namedItem(“myImage”);
var allElements = document.getElementsByTagName(“*”);

document.links — Contains all <a> elements with an href attribute in the document
document.images — Contains all <img> elements in the document. The same as document.getElementsByTagName(“img”)
document.forms — Contains all <form> elements in the document. The same as document.getElementsByTagName(“form”)

DOM Conformance Detection
- DOM'un hangi versiyonu/level'ı implemente edilmiş, onu görüyorsun.
var hasXmlDom = document.implementation.hasFeature(“XML”, “1.0”);

Document Writing
- write() simply adds the text as is, whereas writeln() appends a new-line character (\n) to the end of the string
window.onload = function() {
    document.write(“Hello world!”);
};

The Element Type
- Document gibi Element'te çok kullanılıyor. The Element type represents an XML or HTML element, providing access to
information such as its tag name, children, and attributes. nodeType'ı 1, nodeValue'su NULL...
var div = document.getElementById(“myDiv”);
alert(div.tagName);	// ”DIV”
alert(div.tagName == div.nodeName);	// true

HTML Elements
- ELements'in inherit. Tüm HTML element'lerini HTMLElement temsil ediyor.
id, lang, dir, title, className...

var div = document.getElementById(“myDiv”);
alert(div.getAttribute(“id”)); // "myDiv"
alert(div.getAttribute(“class”)); // "bd"

div.setAttribute(“id”, “someOtherId”);
div.setAttribute(“title”, “Some other text”);

Creating Elements
- document.createElement() ile yeni element yaratıyorsun. attribute ile de tag name'ini veriyorsun.

if (client.browser.ie && client.browser.ie <= 7) {
    //create iframe with a name
    var iframe = document.createElement(“<iframe name=\”myframe\”></iframe>”);

    //create input element
    var input = document.createElement(“<input type=\”checkbox\”>”);
}

The Text Type
-

The Comment Type
-

The DocumentType Type
-

The Attr Type
-

***DOM Extensions
- Dom extentions'ları çok populer. Common use-case'ler, browser compatibility'ler...
Rendering, scrolling, innerText, innerHTML, outerText ve outerHTML.

***Working with the DOM
- DOM kullanımı genelde çok kolay ve işe yarar.

Dynamic Scripts
-
function loadScript(url) {
    var script = document.createElement(“script”);
    script.type = “text/javascript”;
    script.src = url;
    document.body.appendChild(script);
}

loadScript(“client.js”);

Dynamic Styles
-
function loadStyles(url) {
    var link = document.createElement(“link”);
    link.rel = “stylesheet”;
    link.type = “text/css”;
    link.href = url;
    var head = document.getElementsByTagName(“head”)[0];
    head.appendChild(link);
}

loadStyles(“styles.css”);