//var js2 = document.createElement('script');
// js2.setAttribute('type', 'text/javascript');
// js2.setAttribute('src', "https://cdn.jsdelivr.net/gh/Eduard2011CR/tool/GSDevTools.min.js");
// document.getElementsByTagName('head')[0].appendChild(js2);
//load();
//
// function load(){
//var js = document.createElement('script');
// js.setAttribute('type', 'text/javascript');
// js.setAttribute('src', "https://cdn.jsdelivr.net/gh/Eduard2011CR/tool/tool2.js");
// document.getElementsByTagName('head')[0].appendChild(js);
//  
// }






 setTimeout(function () {
  init();
  gsap.registerPlugin(GSDevTools);
  GSDevTools.create();
 }, 1000);


