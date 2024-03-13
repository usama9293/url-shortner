
let count=0;


let btn_click=document.getElementById("btn");

btn_click.onclick=function(){
    count++;
    document.getElementById("count").innerHTML=count;
    
}

let btnSave = document.getElementById("btn2");
let passengerCountText = document.getElementById("txt");
btnSave.onclick = function() {
  passengerCountText.innerHTML = "Number of passengers added: " + count;
};
