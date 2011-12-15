/* Chapter 1 */

  /* Doğuşu: JS ilk çıktığı yıllarda sadece Netspace'de çalışan, validation'a yarayan bir şeydi. Kimse siklemedi. Daha
     sonra insanlar 2000'lerin başında JS'nin önemini fark etmeye başladı. Mesela Google Maps. Google Maps'i ilk
     kullandığın yıllara dönersen ne kadar etkilenmişti herkes... Ve insanlar anladı ki FE'de de çok iyi işler
     yapabilirsin. (95'te çıkıo JS. tamamen validation için) *takes minutes to learn but years to master.*

     Ve tabi XMLHttpRequest objesi var. (;

     JS asında DOM ve BOM'un bir integrasyonu. Ama aradaki tutarsızlıklardan dolayı cross-platfrom fln çalışmak zor oluo.

     Ve hala FE tarafında profesyonelleşme yavaş. Dpğru kullanan çok az. (ama tart kullanıo [:)

     */

  /* Yahoo! User Interface Library (YUI): adamlar her cuma konuluolarmış nasıl FE'yi geliştiririz fln die. Sonra Zakas'ın
      kitabını görüolar ve adamı Yahoo!'ya çağırıolar fln.

      */

  /* 92'de Nombas die bi şirket C'ye benzeyen bir script dili istiyo. Validation için. Sonra bunu Netspace'in browser'ına
      embed ediolar. Brendan Eich de 95'te Netspace Navigostor 2'nin içine koyuyo. Önce LiveScript diolar sonra Java'nın
      populeritesinden öte JS.

      Sonra Netspace Navigator 3 çıktığında Microsoft'ta bu iş üzerinde arge yapıp JScript'yı kullandığı IE'yi çıkartıyor.
      96 Ağustos'ta. Ama tabii JS'nin standartlaşmasın sorunlar yaşanıo. Bi Netspace'inki var bir Microsoft'unki...

      97'de standartlaştırıyorlar sonra ve adına ECMAScript diolar.
      */

  /* JS'in şu 3 katmandan oluştuğunu söyleyebiliriz: DOM-BOM-ECMAScript.

      ***ECMAScript: Sadece syntax, types, statements, operators...'leri belirleyen bir standart. Son versiyonu
      4, 2007'de çıktı***

      --

      DOM: aslında tam bir API. Her bir sayfa'yı tree şeklinde yazıyosun ya hani aslında. daha doğrusu browser öyle ayırıo,
      işte her bir node'u eklemek/çıkarmak/editlemek için DOM API'yı kullanıosun.

      DOM'un da level'ları var. Level 1 98'de recommend edilmeye başlandı. Level 1 sadece node'ları XML veya HTML ile
      tanımlamak içindi. 2 ise mouse hareketleri gibi UI event'leri de kapsıyor. Ve CSS!

      Level 2 şunları kapsıyor:
      1- DOM VIEWS: Interface (node'lar)
      2- DOM Events:
      3- DOM Style: CSS
      4- DOM Traversal and range

      Level 3 ise XPath'i faln kapsıyor DOM'a bazı method'lar ekliyor.

      --

      BOM: IE 3 ve Netscpace Navigator 3 zamanında bulunuyor bu. Kullanıcının browser'ının dışıyla da iletişime geçilmesini
      sağlıyor. Pencereler, pop-up'lar, cookises, XMLHttpRequests, screen resolution vs vs

      --
      <<< Her browser'ın her versiyon'unun desteklediği ECMAScript standart'ı, DOM Level'ı ve BOM level'ı var>>>
      */

  /* Mozilla Netscape'in devamı old. için JS'nin versiyonlanmasını o yapıo. Ama sadece Firefox siklio bunu. diğerleri
      ECMAScript ve DOM'u ayrı ayrı söylüyor fln..
   */
