let data=document.getElementById('para');

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(getposition);
    }
    else{
        x.innerHTML="your browsrer does not support geolocation";
    }
}
function getposition(position){
    data.innerHTML="latitude: "+position.coords.latitude+"<br> longitude: "+position.coords.longitude;
}