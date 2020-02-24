var closeButtons = document.querySelectorAll(".popup-close-button");
var feedbackLink = document.querySelector(".feedback-open");

var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackInputs = feedbackForm.querySelectorAll("[name]");
var feedbackName = feedbackPopup.querySelector("[name='userName']");
var feedbackMail = feedbackPopup.querySelector("[name='userMail']");
var feedbackMessage = feedbackPopup.querySelector("[name='userMessage']");

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    if (this.parentElement) {
      this.parentElement.hidden = true;
    }
  });
}

/* feedback popup */

for (var i = 0; i < feedbackInputs.length; i++) {
  // отменяем html-валидацию
  feedbackInputs[i].required = false;
}

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.hidden = false;
  feedbackName.focus();
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
    evt.preventDefault();


  }
});
