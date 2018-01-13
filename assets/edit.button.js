
function butonOver() {
var a=document.getElementById('buton');
var b=document.getElementById('buton');

a.addEventListener('mouseover', function () {
        document.getElementById('buton').style.color = "white";		
		document.getElementById('buton').style.backgroundColor = "blue";
    });


b.addEventListener('mouseout', function () {
        document.getElementById('buton').style.color = "white";		
		document.getElementById('buton').style.backgroundColor = "#1e1d2b";
    });
}

butonOver();