

let btn= document.getElementById("btn");
btn.onclick = function(){
    if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "";
    } else {
        document.body.style.backgroundColor = "black";
    }
}