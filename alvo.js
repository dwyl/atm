// Kasia.js Drives our app in the browser without selenium (useful for demos)
if (Meteor.isClient) {
  Meteor.defer(function () {
    setTimeout(function(){
      // login("tessa@ideaq.com", "pasword", function(){
      //   setTimeout(function(){
      //     resetPassword();
      //   }, 5000);
      // });
      // newuser();
    }, 2000);
  });
}

function newuser() {
  click("newuser");

  // enter email address
  setTimeout(function(){
    $('#account-email').val("demouser@email.com");
  }, 1000);

  // enter password
  setTimeout(function(){
    $('#account-password').val("S0m3th1ng!");
  }, 3000);

  // click the register button
  setTimeout(function(){
    click("create-account");
  }, 6000);

}

function loginFail(email, password, callback) {
  

  if(callback !== undefined){
    callback();
  }
}

function resetPassword(callback){
  console.log("Attempt to resetPassword");
  click("forgot-password");

  // click the reset password button
  setTimeout(function(){
    click("reset-password-button");
    if(callback !== undefined){
      callback();
    }
  }, 3000);

}



function login(email, password, callback) {
  click("showlogin");
    // enter email address
  setTimeout(function(){
    $('#login-email').val(email);
  }, 1000);

  // enter password
  setTimeout(function(){
    $('#login-password').val(password);
  }, 2000);

  // click the login button
  setTimeout(function(){
    console.log("Click Login");
    click("login-button");
  }, 3000);

  if(callback !== undefined){
    callback();
  }
}



// click an element by id
function click(id) {
  var el = document.getElementById(id);
  eventFire(el, 'click');
}

// fire a dom event reliably:
// http://stackoverflow.com/questions/2705583/how-to-simulate-a-click-with-javascript
function eventFire(el, etype){
  if (el.fireEvent) {
    (el.fireEvent('on' + etype));
  } else {
    var evObj = document.createEvent('Events');
    evObj.initEvent(etype, true, false);
    el.dispatchEvent(evObj);
  }
}
