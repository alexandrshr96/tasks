let socket = io();

function sendMessage(){
  socket.emit('chat message', document.querySelector('#m').value);
  document.querySelector('#m').value = '';
  return false;
}

socket.on('chat message', function(msg){
  let li = document.createElement('li');
  li.innerText = msg;
  document.querySelector('.messages').append(li);
});

document.body.addEventListener('click',(e)=>{
  let target = e.target;

  if(target.className == 'chat-btn' || target.className == 'close-chat-btn'){
    document.querySelector('.pop-up-wrapper').classList.toggle('open');
  }
 
});
