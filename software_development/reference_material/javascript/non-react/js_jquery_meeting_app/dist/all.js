/**

GLOBAL VARIABLES

I reused some older code, which explains the mixed use of vanilla 
JS and jQuery.

*/
// JavaScript
var form = document.getElementsByTagName('form')[0];
var form2 = document.getElementsByTagName('form')[1];
var forms = document.getElementsByTagName('form');
var fullName = document.getElementById('fullname-id');
var fullNameError = document.getElementById('fullname-error');
var telephone = document.getElementById('telephone-number');
var telephoneError = document.getElementById('telephone-error');
var email = document.getElementById('email-adress');
var emailError = document.getElementById('email-error');
var eventName = document.getElementById('event-name');
var eventNameError = document.getElementById('event-name-error');
var eventType = document.getElementById('event-type');
var eventTypeError = document.getElementById('event-type-error');
var eventHost = document.getElementById('event-host');
var eventHostError = document.getElementById('event-host-error');
var eventLocation = document.getElementById('event-location');
var eventLocationError = document.getElementById('event-location-error');
var eventStart = document.getElementById('event-start');
var eventStartError = document.getElementById('event-start-error');
var eventEnd = document.getElementById('event-end');
var eventEndError = document.getElementById('event-end-error');
var eventGuests = document.getElementById('event-guests');
var eventGuestsError = document.getElementById('event-guests-error');
var eventMessage = document.getElementById('event-message');
var eventMessageError = document.getElementById('event-message-error');
var password = document.getElementById('password');
var passwordRepeat = document.getElementById('password-repeat');
var passwordError = document.getElementById('password-error');
var passwordRepeatError = document.getElementById('password-repeat-error');

var passwordValidityMessageArray = [];
var equalMessage = "<li>Please make sure both passwords match</li>";
var amountCheckMessage = "<li>Please enter a password of at least 9 characters and no more than 20";
var symbolCheckMessage = "<li>Please make sure there is a symbol present in your password</li>";
var numberCheckMessage = "<li>Please make sure there is a number present in your password</li>";
var lowercaseCheckMessage = "<li>Please make sure there is a lowercase character present</li>";
var uppercaseCheckMessage = "<li>Please make sure there is an uppercase character present</li>";
var firstPasswordInput = document.querySelector('#password');
var secondPasswordInput = document.querySelector('#password-repeat');
var minAmountPassword = 9;
var maxAmountPassword = 20;
var regExSymbol = /[\!\@\#\$\%\^\&\*]/g;
var regExNumber = /[0-9]/g;
var regExLowCase = /[a-z]/g;
var regExUpCase = /[A-Z]/g;
var regExIllegal = /[^A-z0-9\!\@\#\$\%\^\&\*]/g;
var regExText = /^[a-zA-Z]+$/;

// jQuery

var $eventName = $('#event-name');
var $eventType = $('#event-type');
var $eventHost = $('#event-host');
var $eventLocation = $('#event-location');
var $eventStart = $('#event-start');
var $eventEnd = $('#event-end');
var $eventGuests = $('#event-guests');
var $eventMessage = $('#event-message');
var $eventEndError = $('#event-name-error');
var $registrationForm = $("#registration-form");
var $accountContainer = $(".account-container");
var $eventContainer = $(".event-container");
var $toggleEvents = $(".toggle-events");
var $toggleAccount = $(".toggle-account");
var $hideLogin = $(".hide-login");
var $hideRegistration = $(".hide-registration");
var $loginForm = $("#login-form");
var $addEventButton = $("#add-event");
var $eventformId = $("#event-form");
var $eventEntry = $(".new-events-here");
var $loginField = $("#login-field");
var $fullnameId = $("#fullname-id");

// Hard-coded events (these are placeholders)

var firstEvent =

    "<div class='col-lg-4 event-entry'>" +
    "<h4><p>event: </h4><br>" +
    "type: birthday party" +
    "<br>" +
    "location: Amsterdam" +
    "<br>" +
    "host: doctor Goat" +
    "<br>" +
    "begins at: 1-1-2017 00:00" +
    "<br> " +
    "ends at: 1-1-2017 04:00" +
    "<br>" +
    "attendees: Fish, Cat, Goat, Sheep, Elephant" +
    "<br>" +
    "message: everyone's invited!" +
    "</p></div>";

$(document).ready(function() {
    $eventEntry.append(firstEvent, firstEvent, firstEvent); // adds hard-coded events
});



/** 

FUNCTIONALITY

*/

// Toggles visibility of the forms

$toggleAccount.on("click tap", function() {
    $accountContainer.show();
    $eventContainer.hide();
    $registrationForm.hide();
    $loginForm.show();
    $loginField.focus();
});

$toggleEvents.on("click tap", function() {
    $accountContainer.hide(700);
    $registrationForm.hide(700);
    $eventContainer.show(700);
    $eventName.focus();
});

$hideLogin.on("click tap", function() {
    $loginForm.hide();
    $registrationForm.show();
    $fullnameId.focus();
});

$hideRegistration.on("click tap", function() { 
    $loginForm.show();
    $registrationForm.hide();
    $loginField.focus();
});

// Adding events to the DOM

function addEvent() {
    $eventEntry.append(
        "<div class='col-lg-4 event-entry'><h4> event: " +
        $eventName.val() +
        "</h4><p><br> type:" +
        $eventType.val() +
        "<br> location: " +
        $eventLocation.val() +
        "<br> host: " +
        $eventHost.val() +
        "<br> begins at: " +
        $eventStart.val() +
        "<br> ends at: " +
        $eventEnd.val() +
        "<br> attendees: " +
        $eventGuests.val() +
        "<br> message: " +
        $eventMessage.val() +
        "</p></div>");
}

$addEventButton.on("click tap", function() {
    if ($eventformId[0].checkValidity() === true) {
        addEvent();
        $eventformId.trigger("reset");
    }
});

/** 

VALIDATION - ACCOUNT

Here I validate the input fields of the account part.

*/

// Turning off default error message.

for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('invalid', function(e) {
        e.preventDefault();
    }, true);
}

// Fullname - error is/is not displayed on focusout and submit

fullName.addEventListener("input", function(event) {
    if (fullName.validity.valid) {
        fullNameError.innerHTML = "";
        fullNameError.classname = "error";
    }
    if (!fullName.validity.valid) {
        if (fullName.value.length === 0) {
            fullNameError.innerHTML = "This field is required";
        }
        if (fullName.value.length !== 0) {
            fullNameError.innerHTML = "Please only use normal text characters.";
        }
    }
}, false);

// E-mail adress - error is/is not displayed on focusout and submit

email.addEventListener("input", function(event) {
    if (email.validity.valid) {
        emailError.innerHTML = "";
        emailError.classname = "error";
    }
    if (!email.validity.valid) {
        if (email.value.length === 0) {
            emailError.innerHTML = "This field is required";
        }
        if (email.value.length !== 0) {
            emailError.innerHTML = "Please fill in a valid e-mail.";
        }
    }

}, false);

// Telephone number - error is/is not displayed on focusout and submit

telephone.addEventListener("input", function(event) {
    if (telephone.validity.valid) {
        telephoneError.innerHTML = "";
        telephoneError.classname = "error";
    }
    if (!telephone.validity.valid) {
        telephoneError.innerHTML = "Please fill in a valid phone number.";
    }
}, false);


/** 

VALIDATION - EVENTS

Here I validate the input fields of the events part.

*/

// Event name - error is/is not displayed on focusout and submit

eventName.addEventListener("input", function(event) {
    if (eventName.validity.valid) {
        eventNameError.innerHTML = "";
        eventNameError.classname = "error";
    }
    if (!eventName.validity.valid) {
        if (eventName.value.length === 0) {
            eventNameError.innerHTML = "This field is required";
        }
        if (eventName.value.length !== 0) {
            eventNameError.innerHTML = "Please only use normal text characters.";
        }
    }
}, false);

// Event type - error is/is not displayed on focusout and submit

eventType.addEventListener("input", function(event) {
    if (eventType.validity.valid) {
        eventTypeError.innerHTML = "";
        eventTypeError.classname = "error";
    }
    if (!eventType.validity.valid) {
        if (eventType.value.length === 0) {
            eventTypeError.innerHTML = "This field is required";
        }
        if (eventType.value.length !== 0) {
            eventTypeError.innerHTML = "Please only use normal text characters.";
        }
    }
}, false);

// Event host - error is/is not displayed on focusout and submit

eventHost.addEventListener("input", function(event) {
    if (eventHost.validity.valid) {
        eventHostError.innerHTML = "";
        eventHostError.classname = "error";
    }
    if (!eventHost.validity.valid) {
        if (eventHost.value.length === 0) {
            eventHostError.innerHTML = "This field is required";
        }        
    }
}, false);

// Event location - error is/is not displayed on focusout and submit

eventLocation.addEventListener("input", function(event) {
    if (eventLocation.validity.valid) {
        eventLocationError.innerHTML = "";
        eventLocationError.classname = "error";
    }
    if (!eventLocation.validity.valid) {
        if (eventLocation.value.length === 0) {
            eventLocationError.innerHTML = "This field is required";
        }
        if (eventLocation.value.length !== 0) {
            eventLocationError.innerHTML = "Please insert a correct location";
        }
    }
}, false);

// Event guests - error is/is not displayed on focusout and submit

eventGuests.addEventListener("input", function(event) {
    if (eventGuests.validity.valid) {
        eventGuestsError.innerHTML = "";
        eventGuestsError.classname = "error";
    }
    if (!eventGuests.validity.valid) {
        if (eventGuests.value.length === 0) {
            eventGuestsError.innerHTML = "This field is required";
        }
        if (eventGuests.value.length !== 0) {
            eventGuestsError.innerHTML = "Please only use normal text characters.";
        }
    }
}, false);

// Event date validation. 

$eventStart.on("focusout submit invalid", function() {    
    if (!eventStart.validity.valid) {
        eventStartError.innerHTML = "This field is required";
    }
    if (eventStart.validity.valid) {
        eventStartError.innerHTML = "";
    }
});

$eventEnd.on("focusout submit invalid", function() {
    $eventEnd.attr("min", $eventStart.val());
    if (!eventEnd.validity.valid) {
        eventEndError.innerHTML = "Please ensure the end is AFTER the beginning of the event.";
    }
    if (eventEnd.validity.valid) {
        eventEndError.innerHTML = "";
    }
});

// Eventlistener for the form (to ensure highlighting of all required fields)

form.addEventListener("focusout", function(event) {

    // Firstname

    if (!fullName.validity.valid) {
        if (fullName.value.length === 0) {
            fullNameError.innerHTML = "This field is required";
        }
        if (fullName.value.length !== 0) {
            fullNameError.innerHTML = "Please only use normal text characters.";
        }
    }

    // Email

    if (!email.validity.valid) {
        if (email.value.length === 0) {
            emailError.innerHTML = "This field is required";
        }
        if (email.value.length !== 0) {}
    }

    // Telephone (optional)

    if (!telephone.validity.valid) {
        telephoneError.innerHTML = "Please fill in a valid phone number.";
    }

    // Event name

    if (!eventName.validity.valid) {
        if (eventName.value.length === 0) {
            eventNameError.innerHTML = "This field is required";
        }
        if (eventName.value.length !== 0) {
            eventNameError.innerHTML = "Please only use normal text characters.";
        }
    }

    // Event type

    if (!eventType.validity.valid) {
        if (eventType.value.length === 0) {
            eventTypeError.innerHTML = "This field is required";
        }
        if (eventType.value.length !== 0) {
            eventTypeError.innerHTML = "Please only use normal text characters.";
        }
    }

    // Event host

    if (!eventHost.validity.valid) {
        if (eventHost.value.length === 0) {
            eventHostError.innerHTML = "This field is required";
        }
        if (eventHost.value.length !== 0) {
            eventHostError.innerHTML = "Please only use normal text characters.";
        }
    }

    // Event location

    if (!eventLocation.validity.valid) {
        if (eventLocation.value.length === 0) {
            eventLocationError.innerHTML = "This field is required";
        }        
    }

    // Event guests

    if (!eventGuests.validity.valid) {
        if (eventHost.value.length === 0) {
            eventGuestsError.innerHTML = "This field is required";
        }
        if (eventGuests.value.length !== 0) {
            eventGuestsError.innerHTML = "Please only use normal text characters.";
        }
    }

}, false);

// Validation password

password.addEventListener("input", function(event) {
    var firstPassword = firstPasswordInput.value;
    var secondPassword = secondPasswordInput.value;
    fullPassWordCheck(firstPassword, secondPassword);
    if (passwordValidityMessageArray.length === 0) {
        passwordError.innerHTML = "";
        passwordError.classname = "error";
    } else {
        passwordError.innerHTML = passwordValidityMessageArray.join("");
    }
});

passwordRepeat.addEventListener("input", function(event) {
    var firstPassword = firstPasswordInput.value;
    var secondPassword = secondPasswordInput.value;
    if (equalityCheck(firstPassword, secondPassword) === false){
        passwordRepeatError.innerHTML = equalMessage;
    } else {
        passwordRepeatError.innerHTML = "";
    }
});



// Checks if first and second input are equal

function equalityCheck(first, second) {
    if (first === second) {
        return true;
    } else 
        return false;    
}

// Checks the amount of characters

function amountCharactersCheck(first) {
    if (first.length >= minAmountPassword && first.length <= maxAmountPassword) {
        return true;
    } else
        return false;
}

// Checks the presence of a symbol

function symbolCheck(first) {
    if (first.match(regExSymbol)) {
        return true;
    } else
        return false;
}

// Checks the presence of a number

function numberCheck(first) {
    if (first.match(regExNumber)) {
        return true;
    } else
        return false;
}

// Checks the presence of a lowercase character

function lowercaseCheck(first) {
    if (first.match(regExLowCase)) {
        return true;
    } else
        return false;

}

// Checks the presence of an uppercase character

function uppercaseCheck(first) {
    if (first.match(regExUpCase)) {
        return true;
    } else
        return false;

}

function fullPassWordCheck(first, second) {
    passwordValidityMessageArray = [];    
    if (amountCharactersCheck(first) === false) {
        passwordValidityMessageArray.push(amountCheckMessage);
    }
    if (symbolCheck(first) === false) {
        passwordValidityMessageArray.push(symbolCheckMessage);
    }
    if (numberCheck(first) === false) {
        passwordValidityMessageArray.push(numberCheckMessage);
    }
    if (lowercaseCheck(first) === false) {
        passwordValidityMessageArray.push(lowercaseCheckMessage);
    }
    if (uppercaseCheck(first) === false) {
        passwordValidityMessageArray.push(uppercaseCheckMessage);
    }
}

// Autocomplete for location search. 

function initAutocomplete() {
    var input = document.getElementById('event-location');
    var autocomplete = new google.maps.places.Autocomplete(input);

}
google.maps.event.addDomListener(window, 'load', initAutocomplete);