menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Veg Supreme Pizza","Panner Tikka Pizza","Deluxe Veggie Pizza","Veg Extravaganza Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i]  + '</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
menu_list_array.sort();
htmldta="<section class='cards'>"
for(var i=0;i<menu_list_array.length;i++){
  htmldata=htmldata+'<div class="card">'
  +'<img src="pizzaImg.png" style="width:50px;height:50px;" id="iiimg"/>'
  +menu_list_array[i] + '</div>'  
}
htmldata=htmldata+"</section>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
}

function add_pizza(){
var item=document.getElementById("add_item").value;
menu_list_array.push(item);
add_item();
}