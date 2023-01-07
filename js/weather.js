const API_KEY = "43c2731e9d9ab368b311af53292590ac";

function onGeoOK(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    fetch(url);
    console.log(url);
}

function onGeoerror(){
    alert("You can't find.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoerror);