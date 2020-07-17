/*==============================================================================
 * Loading Image Function
 ==============================================================================*/

window.onload = getImg; /* When window Page is loaded, Run Function */

function getImg() { 
    var img = document.createElement('img');    /* Create new "Image Element" when needed */
    img.src = 'https://source.unsplash.com/random'; /* Stores Random Image in Variable */
    localStorage.setItem("img", img);
    document.getElementById('location').appendChild(img); /* Places the New Element inside the id called "Location" */
    document.getElementsByTagName("img")[0].setAttribute("id", "details"); /* Gives the new "Image Element" a ID Function */
}

/*=============================================================================*/

/*==============================================================================
 * When Buttom is Pressed Store Image in a Variable with Email Variable
 ==============================================================================*/

 function test() {

    var input = document.getElementById('eInput').value;
    var image = document.getElementById('details').value;
    var full = [input, image];
    console.log(full);
 }
 
 /*=============================================================================*/

 /*==============================================================================
 * Checks that the Email Values are Valid before being stored
 ==============================================================================*/

 
 
 /*=============================================================================*/