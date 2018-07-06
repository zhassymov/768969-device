var overlayLayout = document.querySelector('.overlay');
var blockForm = document.querySelector('.form-popup');
var blockMap = document.querySelector('.map-popup');
var buttonOpenForm = document.querySelector('.button-submit');
var buttonOpenMap = document.querySelector('.open-map');
var buttonCloseForm = document.querySelector('.button-close-form');
var buttonCloseMap = document.querySelector('.button-close-map');

var buttonSubmit = document.querySelector('.button-submit-form');
var feedbackForm = document.querySelector('.feedback');

buttonSubmit.addEventListener('click', function(event){
  event.preventDefault();
  var inputField = document.querySelectorAll('.input-field')
  for (var i = 0; i < inputField.length; i++){
    if (inputField[i].value === ''){
      blockForm.classList.add('validate-form');
      return false;
    } else {
      blockForm.classList.remove('validate-form');
      feedbackForm.submit();
    }
  }
});

buttonOpenForm.addEventListener('click', function(event){
  event.preventDefault();
  overlayLayout.style.display = 'block';
  blockForm.style.display = 'block';
});

buttonCloseForm.addEventListener('click', function(event){
  blockForm.style.display = 'none';
  overlayLayout.style.display = 'none';
});

overlayLayout.addEventListener('click', function(event){
  blockForm.style.display = 'none';
  blockMap.style.display = 'none';
  overlayLayout.style.display = 'none';
});

document.body.addEventListener('keydown', function(event) {
  if (event.keyCode === 27){
    blockForm.style.display = 'none';
    blockMap.style.display = 'none';
    overlayLayout.style.display = 'none';
  }
});

buttonOpenMap.addEventListener('click', function(event){
  event.preventDefault();
  overlayLayout.style.display = 'block';
  blockMap.style.display = 'block';
});

buttonCloseMap.addEventListener('click', function(event){
  event.preventDefault();
  blockMap.style.display = 'none';
  overlayLayout.style.display = 'none';
});