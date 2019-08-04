window.onload = function(){
var modal = document.getElementById("portraitZoomed");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("portrait");
var modalImg = document.getElementById("portraitModal");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}
modal.onclick = function () {
    modal.style.display = "none";
}
};