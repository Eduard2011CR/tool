// var js = document.createElement('script');
// js.setAttribute('type', 'text/javascript');
// js.setAttribute('src', "https://cdn.jsdelivr.net/gh/Eduard2011CR/tool/tool.js");
// document.getElementsByTagName('head')[0].appendChild(js);


 setTimeout(function () {
  init();
  gsap.registerPlugin(GSDevTools);
  GSDevTools.create();
 }, 1000);


