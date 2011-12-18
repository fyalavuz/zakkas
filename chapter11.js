/* Chapter 11 */

/*

- Level 2 ve 3 daha advanced feature'lar içeryorlar. Aslında birkaç module'den oluşuyorlar:
Dom Core: Level 1, node'lara property ve method eklemece
Dom Views: Define different views
Dom Events: DOM node'ları event'leri nasıl kullanır?
Dom Style: CSS'e nasıl erişilir ve değiştirilir
Dom Tracersal and Range:
Dom HTML: Dom Core + interface

Ayrıca Level 3'de XPath var.

Internet Explorer does not support any of DOM Level 2 or 3.

***Styles
- Browser'ın DOM Level 2 CSS yatkınlığını öğrenmek için:
var supportsDOM2CSS = document.implementation.hasFeature(“CSS”, “2.0”);
var supportsDOM2CSS2 = document.implementation.hasFeature(“CSS2”, “2.0”);
var supportsDOM2CSS2 = document.implementation.hasFeature(“CSS3”, “2.0”);

CSS Elementlerine Erişmek
-
var myDiv = document.getElementById(“myDiv”);

//set the background
color myDiv.style.backgroundColor = “red”;

//change the dimensions
myDiv.style.width = “100px”;
myDiv.style.height = “200px”;

CSS'le ilgili birrçok feature'u var

- Tree içinde traverse etmek vs de mümkün.