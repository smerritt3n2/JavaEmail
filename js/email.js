/*==============================================================================
 * Loading Image Function
 ==============================================================================*/

window.onload = getImg; /* When window Page is loaded, Run Function */

function getImg() { 
    var img = document.createElement('img');    /* Create new "Image Element" when needed */
    img.src = 'https://source.unsplash.com/random'; /* Stores Random Image in Variable */ 
    document.getElementById('location').appendChild(img); /* Places the New Element inside the id called "Location" */
    document.getElementsByTagName("img")[0].setAttribute("id", "details"); /* Gives the new "Image Element" a ID Function */
    console.log(img);
}

/*=============================================================================*/

 /*==============================================================================
 * Checks that the Email Values are Valid before being stored
 ==============================================================================*/

 function validateEmail(sEmail) {
     /* This big variable stores the data needed to compare all "Emails" that currently exist. No matter what the email is as long as the email contains the symbols "@" it will become valid */
    var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;
  
    if(!sEmail.match(reEmail)) { /* Compares the two variables, data provided by the online user & data currently stored in "var" */
      if(alert("Invalid email address")){} /* If email is invalid return data false and display message */
      else window.location.reload(); /* When alert button is pressed, refreashes the page */
      return false;
    }
    return true; /* If email is valid return data true */

  }

 /*=============================================================================*/

/*==============================================================================
 * When Buttom is Pressed Store Image in a Variable with Email Variable
 ==============================================================================*/

 function submit() {

    var input = document.getElementById('eInput').value;
    image = document.getElementsByName('img');
    var full = [input, 'https://source.unsplash.com/random'];
    

    var Emaildetails = JSON.stringify(full);
    localStorage.setItem('full', Emaildetails);

    console.log(JSON.parse(localStorage['full']));
    alert("Your data been stored into Local Storage!");
    window.location.reload();
    
 }
 
 /*=============================================================================*/