const contributeButton = document.getElementById("contribute__photo");
const modal = document.getElementById('myModal');
const button = document.getElementById('contribute__photo');
const span = document.getElementsByClassName('close')[0];

if (contributeButton) {
  contributeButton.addEventListener('click', uploadPhotoModal);
}




const loginButton = document.getElementById("login__button");

if (loginButton) {
  loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.location.href = "../pages/login.html";
  });
}

function uploadPhotoModal() {

  // Todos
  // check if user is authenticated and has a token in the local storage
  // if local storage contain token open modal
  // else redirect to login page



  // window.location.href = "../pages/modal.html"

  button.onclick = () => (modal.style.display = 'block');
  // When the user clicks on <span> (x), close the modal
  span.onclick = () => (modal.style.display = 'none');
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = event => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };

}