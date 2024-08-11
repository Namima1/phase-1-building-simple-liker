// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.querySelectorAll('.like-glyph').forEach(heart => {
  heart.addEventListener('click', handleHeartClick);
});


function handleHeartClick(event) {
  const heart = event.target;

 
  mimicServerCall()
    .then(() => {
      
      if (heart.textContent === EMPTY_HEART) {
        heart.textContent = FULL_HEART;
        heart.classList.add('activated-heart');
      } else {
        
        heart.textContent = EMPTY_HEART;
        heart.classList.remove('activated-heart');
      }
    })
    .catch((error) => {
      
      const errorModal = document.getElementById('modal');
      const errorMessage = document.getElementById('modal-message');
      
      errorMessage.textContent = error;
      errorModal.classList.remove('hidden');

      
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
