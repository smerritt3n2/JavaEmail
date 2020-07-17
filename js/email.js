/*==============================================================================
 * Loading Image Function
 ==============================================================================*/

window.onload = getImg; /* When window Page is loaded, Run Function */

function getImg() { 
    var img = document.createElement('img');    /* Create new "Image Element" when needed */
    img.src = 'https://source.unsplash.com/random'; /* Stores Random Image in Variable */
    document.getElementById('location').appendChild(img); /* Places the New Element inside the id called "Location" */
}

/*=============================================================================*/

/*==============================================================================
 * When Buttom is Pressed Store Image in a Variable
 ==============================================================================*/

 function test() {

    var input = document.getElementById('eInput').value;
    alert(input);

    console.log(input);
 }
 
 /*=============================================================================*/