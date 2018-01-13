/*
window.onload=function (){
  var data, txt=" ",x ;
  var  httpObj = new XMLHttpRequest();
        httpObj.open('GET', "phone.numbers.json", true);   
        //httpObj.send(null);
	   console.log(txt);
       httpObj.onreadystatechange = function() {
        if (httpObj.readyState == 4) { // when request is complete
          if (httpObj.status == 200) {
			data=JSON.parse(httpObj.responseText);
			console.log(data);
			document.getElementById("numere2").innerHTML = data;
			txt +="<select>"
			for(x in data){
				txt +="<option>"+data[x].oras+" "+data[x].numar_telefon;
			}
			txt +="</select>"
			document.getElementById("numere").innerHTML = txt;
		  }
          else {alert("eroare");}
        }
};
}
*/

window.onload=function (){
var obj, httpObj, myObj, x, txt = " ";
httpObj = new XMLHttpRequest();
httpObj.open("GET", "phones.json", true);

httpObj.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        myObj = JSON.parse(this.responseText);
        console.log(myObj);
        txt += "<select>"
        for (x in myObj) {
            txt += "<option>" + myObj[x].oras;
        }
        txt += "</select>"
        document.getElementById("copyright").innerHTML = "mail";
    }
};

}



