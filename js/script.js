var closeButtons = document.querySelectorAll(".popup-close-button");
var feedbackLink = document.querySelector(".feedback-open");
var feedbackPopup = document.querySelector(".feedback-popup");

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    if (this.parentElement)
    {
      this.parentElement.hidden = true;
    }
  });
}

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.hidden = false;
});
