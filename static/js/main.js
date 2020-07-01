//functions
function addEvent(evnt, elem, func) {
    if(!elem){
      return ;
    }
    if (elem.addEventListener){  // W3C DOM
       elem.addEventListener(evnt,func,false);
    }else if (elem.attachEvent) { // IE DOM
       elem.attachEvent("on"+evnt, func);
    }else { // No much to do
       elem["on"+evnt] = func;
    }
  }
  //
  (function(){
  
  var preloader = document.getElementById('preloader');
  if(preloader){
    addEvent('load', window,function(){
        var fadeEffect = setInterval(function() {
            // if we don't set opacity 1 in CSS, then
            // it will be equaled to "" -- that's why
            // we check it, and if so, set opacity to 1
            if (!preloader.style.opacity) {
            preloader.style.opacity = 1;
            }
            if (preloader.style.opacity > 0) {
            preloader.style.opacity -= 0.1;
            } else {
                preloader.style.display = 'none';
                clearInterval(fadeEffect);
            }
        }, 100);
    });
    
    // backup hide preloader if the event doesn't work after 10s
    setTimeout(function(){
        preloader.style.display = 'none';
    }, 5000);
    }
  })();
  
  (function(){ 
  // menu
  var menu_icon = document.getElementById('menu_icon');
  var menu_languages = document.getElementById('menu_languages');
  var overlay_menu = document.getElementById('menu_overlay');

  addEvent('click', menu_icon,function(ev){
    if(this.classList.contains('close')){
        this.className = "menu-icon open"; 
        overlay_menu.className = "overlay-menu show"; 
        menu_languages.style.position = "fixed";
    } else {
        this.className = "menu-icon close"; 
        overlay_menu.className = "overlay-menu"; 
        menu_languages.style.position = "absolute";
    }
  } );
  addEvent('click', overlay_menu,function(ev){
      if(ev.target.nodeType !="site_name" && ev.target.tagName !="UL" &&  ev.target.tagName !="LI"){
        menu_icon.className = "menu-icon close"; 
        overlay_menu.className = "overlay-menu"; 
        menu_languages.style.position = "absolute";
        
      }
    
  })
  })();
  // Contact form 
  (function(){
    var form = document.getElementById('contactForm');
    var formResponse = document.getElementById('js-form-response');
    if(form){
    form.onsubmit = function(e) {
      e.preventDefault();
  
      // Prepare data to send
      var  data = {};
      var formElements = Array.from(form);
      var METHOD = "POST";
      var URL = form.action;
      formElements.map(function(input){ data[input.name] = input.value });
  
      // Log what our lambda function will receive
      console.log(JSON.stringify(data));
      var MSG_SUCCESS="Thanks for the message. I’ll be in touch shortly.";
      var MSG_ERROR="Something went wrong, please contact me directly or try later.";
      if(data['lang'] == 'fr'){
        var MSG_SUCCESS="Merci pour le message. Je serai en contact sous peu.";
        var MSG_ERROR="Une erreur s'est produite, veuillez me contacter directement ou réessayer plus tard.";
      }else if(data['lang'] == 'ar'){
        var MSG_SUCCESS="شكرا لرسالتك. سأكون على اتصال قريبا.";
        var MSG_ERROR="حدث خطأ ، يرجى الاتصال بي مباشرة أو المحاولة لاحقًا.";
      }
      // Construct an HTTP request
      var xhr = new XMLHttpRequest();
      xhr.open(METHOD, URL, true);
      xhr.setRequestHeader('Accept', 'application/json; charset=utf-8');
      xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');    
  
      // Send the collected data as JSON
      xhr.send(JSON.stringify(data));
  
      // Callback function
      xhr.onloadend = function(response) {
        if (response.target.status === 200) {
          // The form submission was successful
          form.reset();
          formResponse.innerHTML = '<p class="alert alert-success">'+MSG_SUCCESS+'</p>';
        } else {
          // The form submission failed
          formResponse.innerHTML = '<p class="alert alert-danger">'+MSG_ERROR+'</p>';
          //console.error(JSON.parse(response.target.response).message);
        }
      };
  
  
    };
  }//end if form
  })();
  
  
  