function textDelete(){
document.getElementById("copyright").innerHTML='';
}

function textCreate(){
var copyrightCreate= document.createElement("p");
var textnode = document.createTextNode("Copyright 2017 - AsistentaAuto.ro - ");
copyrightCreate.appendChild(textnode);
document.getElementById("copyrights").appendChild(copyrightCreate);
}

function textEdit(){	
document.getElementById("copyright").innerHTML = 
'Copyright a fost modificat ';
}

textDelete();
textCreate();
textEdit();