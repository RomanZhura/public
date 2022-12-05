//slider
let slid = ["url(image/22.jpg)", "url(image/23.jpg)", "url(image/24.jpg)", "url(image/25.jpg)", "url(image/26.jpg)"]
let idbuttons=["radio1", "radio2", "radio3", "radio4", "radio5"]

window.onload = function(){
let i=1;
document.getElementById("slider").style.background=slid[0];

setInterval(function(){
        document.getElementById("slider").style.background=slid[i];
        document.getElementById(idbuttons[i]).checked=true;
        i++;
        if (i==5){
            i=0;
        }
        }, 5000)
}

function fon(){
    let rad=document.getElementsByName("radio1");
    for (let i=0; i<rad.length; i++) {
        if (rad[i].checked) {
            document.getElementById("slider").style.background=slid[i];
        }}}

//


function overflow(){
if (document.getElementById("menu__toggle").checked) {
    document.getElementById("body").style.overflow="hidden";
} else {document.getElementById("body").style.overflow="scroll";}
}