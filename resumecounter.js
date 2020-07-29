var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    var jsonedResponse = JSON.parse(xhttp.response);
    document.getElementById("count").innerHTML = jsonedResponse.count;
  }
};
xhttp.open(
  "GET",
  "https://1o482jprai.execute-api.us-west-2.amazonaws.com/prod/visit",
  true
);
xhttp.send();

	
//const countEl = document.getElementById('count');

//updateVisitCount();
//
//function updateVisitCount() {
//    fetch('https://1o482jprai.execute-api.us-west-2.amazonaws.com/prod/visit')
//        .then(res => res.json())
//        .then(res => {
//        countEl.innerHTML = res.visits;
//    });
//}





//var xhttp = new XMLHttpRequest();
//xhttp.onreadystatechange = function () {
//    if (this.readyState === 4 && this.status === 200) {
//        document.getElementById("count").innerHTML = xhttp.responseText;
//    }
//};
//xhttp.open("GET", "https://1o482jprai.execute-api.us-west-2.amazonaws.com/prod/visit", true);
//xhttp.send();