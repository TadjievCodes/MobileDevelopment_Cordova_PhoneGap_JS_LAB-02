document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
   var alertButton = document.getElementById('show-alert-button');
   alertButton.addEventListener('click', showAlert, false); 

   var confirmButton = document.getElementById('show-confirm-button');
   confirmButton.addEventListener('click', showConfirm, false); 

   var promptButton = document.getElementById('show-prompt-button');
   promptButton.addEventListener('click', showPrompt, false); 

   var beepButton = document.getElementById('show-beep-button');
   beepButton.addEventListener('click', doSomeBeeps, false); 

   document.addEventListener('pause', onPause, false);
   document.addEventListener('resume', onResume, false);
}


function onPause() {
    // Handle the pause event
    navigator.notification.alert(
     'APP IS PAUSED!'   // message
   );
}



function onResume() {
    // Handle the pause event
    navigator.notification.alert(
     'APP IS RESUMED!'   // message
   );
}



// This is Phonegap's way of doing alerts
// Always do the alerts in this phonegap style within this class

function showAlert() {
   navigator.notification.alert(
     'here is my message!',   // message
    alertDismissed,   // callback
    'This is the title!',   // title
    'Done'    // buttonName  
   );
}


function alertDismissed() {
   navigator.notification.alert(
     'Original alert was dismissed!',   // message
     null,   // callback
    'Callback code!',   // title
    'Done'    // buttonName  
   );
}






function showConfirm() {
   navigator.notification.confirm(
     'What will you choose?',   // message
    onConfirm,   // callback to invoke with index of button pressed
    'Choose something',   // title
    ['Choose #1','Choose #2','Choose #3']    // buttonLabels
   );
}


function onConfirm(buttonIndex) {
  if(buttonIndex === 1){
  alert('You selected a button #' + buttonIndex)
  }
}



function showPrompt() {
  navigator.notification.prompt( 
    'Please enter your name',   // message
     onPrompt,   // callback to invoke
     'Registration'   // title
     ['OK', 'Exit'],   // buttonLabels
     'Some Name'   // Default Text
  );
}


function onPrompt(results) {
    alert("You selected button number " + results.buttonIndex + " and entered " + results.input1);
}



function doSomeBeeps() {
   navigator.notification.beep(3);
}


