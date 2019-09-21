var slideIndex = 0;

if (document.getElementsByClassName("banner").length != 0) {
  showSlides();
}

if(document.getElementsByClassName("tabcontent").length != 0){
  firstTab = document.getElementsByClassName("tabcontent")[0];
  firstTab.style.display = "inherit";
}


function showSlides() {
  var i;
  var slides = document.getElementsByClassName("banner");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function hoverPelicula(pelicula){
  pelicula.classList.add("hovered-movie");
  pelicula.childNodes[3].style.display = "inherit";
}

function unhoverPelicula(pelicula){
  pelicula.classList.remove("hovered-movie");
  pelicula.childNodes[3].style.display = "none";
}

function openTab(evt, option) {

  var i, tabcontent, tab;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tab = document.getElementsByClassName("tab");
  for (i = 0; i < tab.length; i++) {
    tab[i].className = tab[i].className.replace(" active", "");
  }


  document.getElementById(option).style.display = "inherit";
  evt.currentTarget.className += " active";
}
