(function() {
  var cbstate;
  
  window.addEventListener('load', function() {
    cbstate = JSON.parse(localStorage['CBState'] || '{}');

    for(var i in cbstate) {
      var el = document.querySelector('input[name="' + i + '"]');
      if (el) el.checked = true;
    }
  
    var cb = document.getElementsByClassName('save-cb-state');
  
    for(var i = 0; i < cb.length; i++) {
  
      cb[i].addEventListener('click', function(evt) {
        if (this.checked) {
          cbstate[this.name] = true;
        }
    
        else if (cbstate[this.name]) {
          delete cbstate[this.name];
        }
    
        localStorage.CBState = JSON.stringify(cbstate);
      });
    }
  });
})();