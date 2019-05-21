const arr = [5,8,2,1,15,2,3,5,9,11,10,4,3,14,1,7,10,3,2,13];

function createLiIndex(array){
  const container = document.createDocumentFragment();
  for(let i = 0; i < array.length; i++){
    let li = document.createElement('LI');
    li.innerText = i;
    container.appendChild(li);
  }
  return container;
}

function createLiNumbers(array){
  const container = document.createDocumentFragment();
  const maxNumber = Math.max(...array);

  for(let i = 1; i < maxNumber+1; i++){
    let li = document.createElement('LI');
    li.innerText = i;
    container.appendChild(li);
  }
  return container;
}


function createGraphBlock(array){
  const container = document.createDocumentFragment();
  const height = document.querySelector('.numbers li').clientHeight;
  const width = document.querySelector('.index li').clientWidth;
  for(let i = 0; i < array.length; i++){
    let li = document.createElement('LI');
    li.style.width = `${width}px`;
    li.style.height = `${height*array[i]}px`;
    array[i] < 6 ? li.classList.add('green') : array[i] > 5 && array[i] < 11 ? li.classList.add('yellow') : li.classList.add('red');
    container.appendChild(li);
  }
  return container;
}

document.querySelector('.index').prepend(createLiIndex(arr));
document.querySelector('.numbers').prepend(createLiNumbers(arr));
document.querySelector('.graph-list').prepend(createGraphBlock(arr));
