var requests=2;
function changeName(id){
    document.querySelector(id).innerText="Joe Bob";
}
function decline(id){
    document.querySelector(id).remove();
    requests--;
    document.querySelector("#numbox").innerText=requests;
}