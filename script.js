const profileMenu = document.getElementById("profileMenu");
const profilePic = document.getElementById("profilePic")

profilePic.addEventListener('click', function(){
  profileMenu.classList.toggle('open-menu');
})

const shoreMore = document.getElementById("shoreMore")
const profileAct = document.getElementById("profileAct")

shoreMore.addEventListener("click", function(){
  profileAct.classList.toggle('show-more');
})