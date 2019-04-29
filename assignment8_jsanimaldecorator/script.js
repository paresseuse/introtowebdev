var img = document.getElementById('yeehat')

yeehat.onmousedown = function(event) {

  let dragX = event.clientX - yeehat.getBoundingClientRect().left;
  let dragY = event.clientY - yeehat.getBoundingClientRect().top;

  document.body.append(yeehat);

  moveAt(event.pageX, event.pageY);

  // centers the hat at (pageX, pageY) coordinates
  function moveAt(pageX, pageY) {
    yeehat.style.left = pageX - dragX + 'px';
    yeehat.style.top = pageY - dragY + 'px';
  }

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  //moves hat on mousemove
  document.addEventListener('mousemove', onMouseMove);

  //drops hat & removes unneeded handlers
  yeehat.onmouseup = function(){
    document.removeEventListener('mousemove', onMouseMove);
    yeehat.onmouseup = null;
  };

};

yeehat.ondragstart = function(){
  return false;
};


