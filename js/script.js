/* local storage var */

var isStorageSupport = true;
var storageName = "";
var storageMail = "";

var closeButtons = document.querySelectorAll(".popup-close-button");

if (closeButtons) {
  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
      if (this.parentElement) {
        this.parentElement.hidden = true;
      }
    });
  }
}

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    var openPopup = document.querySelector(".popup:not([hidden])");

    if (openPopup)
    {
      evt.preventDefault();
      openPopup.hidden = true;
    }
  }
});

/* local storage */

try {
  storageName = localStorage.getItem("technomartUserName");
  storageMail = localStorage.getItem("technomartUserMail");
}
catch (err) {
  isStorageSupport = false;
}

/* map popup */

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".map-popup");

if (mapLink) {

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();

    if (mapPopup) {
      mapPopup.hidden = false;
    }
  });

}

/* feedback popup */

var feedbackPopup = document.querySelector(".feedback-popup");

if (feedbackPopup) {

  var feedbackLink = document.querySelector(".feedback-open");
  var feedbackForm = feedbackPopup.querySelector("form");
  var feedbackInputs = feedbackForm.querySelectorAll("[name]");
  var feedbackName = feedbackPopup.querySelector("[name='userName']");
  var feedbackMail = feedbackPopup.querySelector("[name='userMail']");
  var feedbackMessage = feedbackPopup.querySelector("[name='userMessage']");

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
    feedbackPopup.classList.remove("invalid-data");

    if (!feedbackName.value || !feedbackMail.value || !feedbackMessage.value) {
      evt.preventDefault();

      // перезапуск css анимации
      void feedbackPopup.offsetWidth;
      feedbackPopup.classList.add("invalid-data");
    }
    else {
      if (isStorageSupport) {
        localStorage.setItem("technomartUserName", feedbackName.value);
        localStorage.setItem("technomartUserMail", feedbackMail.value);
      }
    }
  });

}

/* catalog marks */

var addMarkButtons = document.querySelectorAll(".button-add-mark");
var linkMarks = document.querySelector(".link-marks");

if (addMarkButtons) {

  for (var i = 0; i < addMarkButtons.length; i++) {
    addMarkButtons[i].addEventListener("click", function(evt) {
      evt.preventDefault();

      if (linkMarks) {
        linkMarks.classList.add("item-added");
      }
    });
  }

}

/* catalog products */

var buyButtons = document.querySelectorAll(".button-buy");
var productAddedPopup = document.querySelector(".product-added-popup");
var linkCart = document.querySelector(".link-cart");

if (buyButtons) {

  for (var i = 0; i < buyButtons.length; i++) {
    buyButtons[i].addEventListener("click", function(evt) {
      evt.preventDefault();

      if (productAddedPopup) {
        productAddedPopup.hidden = false;
      }

      if (linkCart) {
        linkCart.classList.add("item-added");
      }
    });
  }

}


