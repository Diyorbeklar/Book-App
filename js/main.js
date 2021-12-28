const list =  document.querySelectorAll('.list');
function activeLink() {
  list.forEach((item) => 
  item.classList.remove('active'));
  this.classList.add('active');
  }
  list.forEach((item) => item.addEventListener('click', activeLink));


  function likeButton() {
    let heart = document.querySelector('.heart');
    let likes = document.querySelector(".likes")
    if (heart.scr.match("heart.png")) {
      heart.src = "heart_red.png"
      likes.innerHTML = "3,685 likes";
    } 
    else {
      heart.src = "heart.png"
      likes.innerHTML = "3,684 likes";
    }
  }