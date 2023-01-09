let xmlhttp = new XMLHttpRequest();
let url = "webs.txt";

xmlhttp.onreadystatechange = () => {
    if(this.readyState == 4 && this.status == 200) {
        let listadoWeebs = JSON.parse(this.responseText);
        getWeebs(listadoWeebs);
    }
};

xmlhttp.open("GET", url, true);
xmlhttp.send();

function getWeebs(arr) {
    let out = "";
    let i;
    for (i = 0; i < arr.length; i++){
        out += '<a href="'+arr[i].url + '">' + arr[i].display + '</a> <br>';
    }

    document.getElementById("weebs").innerHTML = out;
}