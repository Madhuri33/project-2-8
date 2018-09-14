

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
$("[data-addui=typing]").addTyping({

  // animation speed
  speed: 350,

  // Each key stroke's speed will vary (+ or -) up to this amount (milliseconds) giving it a more human like look.
  variance: 100,

  // delete text after completed
   backspace: true,

  // delay
  pause: 3000,

  // shows the blinking cursor
  caret: true

});

