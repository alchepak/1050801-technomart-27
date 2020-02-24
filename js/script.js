var closeButtons = document.querySelectorAll(".popup-close-button");
var feedbackLink = document.querySelector(".feedback-open");

var feedbackPopup = document.querySelector(".feedback-popup");
var feedbackForm = feedbackPopup.querySelector("form");
var feedbackInputs = feedbackForm.querySelectorAll("[name]");
var feedbackName = feedbackPopup.querySelector("[name='userName']");
var feedbackMail = feedbackPopup.querySelector("[name='userMail']");
var feedbackMessage = feedbackPopup.querySelector("[name='userMessage']");

var isStorageSupport = true;
var storageName = "";
var storageMail = "";

for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", function() {
    if (this.parentElement) {
      this.parentElement.hidden = true;
    }
  });
}

/* local storage */

try {
  storageName = localStorage.getItem("technomartUserName");
  storageMail = localStorage.getItem("technomartUserMail");
}
catch (err) {
  isStorageSupport = false;
}

/* feedback popup */

// отменяем html-валидацию
for (var i = 0; i < feedbackInputs.length; i++) {
  feedbackInputs[i].required = false;
}

feedbackLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  feedbackPopup.hidden = false;
  feedbackName.focus();

  if (storageName) {
    feedbackName.value = storageName;
    feedbackMail.focus();
  }

  if (storageMail) {
    feedbackMail.value = storageMail;
    feedbackMessage.focus();
  }
});

feedbackForm.addEventListener("submit", function(evt) {
  if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
    evt.preventDefault();

  }
  else {
    if (isStorageSupport) {
      localStorage.setItem("technomartUserName", feedbackName.value);
      localStorage.setItem("technomartUserMail", feedbackMail.value);
    }
  }
});
