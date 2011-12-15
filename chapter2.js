/* Chapter 2 */

  /* JS'yi sayfalara eklemenin yolu: <script>
        charset: Opt. kodu charset'i. çoğu browser bakmıo bile.
        defer: Opt. document parse olsun ve display edilsin, öyle bak/yükle.
        language: Derprecared.
        src: Opt Inline da yazabilirsin ya...
        type: Required.
      attribute'ları var.

      Sonuçta ya inline yazıcan ya da external çağırıcan.

      1-
      <script type=”text/javascript”>
        function sayHi() {
          alert(“Hi!”); // alert ("</script>"); patlardı bu arada (; illa yazacaksan: alert(“</scr” + “ipt>”);
      </script>

      2- external için src şart tabii.

      Şu çoğu IE'de patlar: <script type=”text/javascript” src=”example.js” />
      <script type=”text/javascript” src=”example.js”></script> olmalı

      Sayfanın render edilmesi <body> ile başlar. <body>'nin üzerinde koyarsan önce JS indiriler/parse edilir/yorumlanır,
      sonra HTML gelir. AMA günümüzde JS dosyaları çok büyük old.'dan bu müşterinin hissedeceği bir yavaşlığa sebep olur.
      <body>'nin sonuna eklenir o yuzden.

      Veya defer kullanırsın ve </html>'e kadar yüklenmez JS'in. HTML4'le geldi:
      <script type=”text/javascript” defer=”defer” src=”example1.js”></script>

      Inline JS kodun XHTML'de de valid olsun dersen, //<![CDATA[ kullanıosun:
        <script type=”text/javascript”>
            //<![CDATA[
            /* code
            // ]]>
        </script>

      En iyisi external çağımak ama unutma!!!
      1- ulaşılması daha zor. daha az. Maintainability düşük.
      2- caching
      3- XHTML mi destekliyor mu mu falan die düşünmüon

      <noscript> -> JS desteklemeyen veya off olan browser'larda çalışıo:
        <noscript>
            <p>This page requires a JavaScript-enabled browser.</p>
        </noscript>

  */