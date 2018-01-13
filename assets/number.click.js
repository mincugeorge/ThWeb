
function numberClick() {
	var b = document.getElementById("contactare");

b.onclick = function(){alert("Suna-ne acum la numarul 0724111234");}
}

numberClick();


function keyboardPress(){
document.addEventListener('keydown', (event) => {
  let numeButon = event.key;

  if (numeButon === 'Control') {
    return;
  }
}, false);

document.addEventListener('keyup', (event) => {
  let numeButon = event.key;

  if (numeButon === 'Control') {
    alert('Suna-ne acum la numarul 0724111234');
  }
}, false);
}

keyboardPress();