javascript:(function(x,y){if(!window.click){window.click=!0,document.body.style.cursor='crosshair';var cps=prompt('Autoclicker CPS: (Under 200 recommended)');if(!cps||isNaN(cps)?(alert(%27You entered something wrong. Try running the script again.%27),end()):alert(%27Autoclicker activated at %27+cps+%27 CPS! Do [ctrl+e] to stop.%27),addEventListener(%27mousemove%27,e=>{x=e.clientX,y=e.clientY}),addEventListener(%27keydown%27,e=>{%27e%27===e.key&&e.ctrlKey&&(alert(%27Autoclicker deactivated! Click the bookmark again to reactivate!%27),end())}),window.click)var int=setInterval(function(){var e=document.elementFromPoint(x,y);e&&e.click()},1e3/cps);function end(){clearInterval(int),window.click=!1,document.body.style.cursor=%27default%27}}})();
//paste into bookmarklet
