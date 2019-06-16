var launchDate = new Date("Jan 30, 2023 12:00:00").getTime();

var timer = setInterval(function() {
    
    var today = new Date().getTime();
    var distance = launchDate - today;
    
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    document.getElementById("launchtime").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    
    if (distance < 0) {
    clearInterval(timer);
    document.getElementById("launchtime").innerHTML = "LAUNCH";
  }
    
}, 1000);

fetch('http://api.open-notify.org/iss-now.json')
    .then(result => result.json())
   .then((res) => {
    createCurrentLocation(res);
})
.catch(err => console.log(err))


function createCurrentLocation(result){
    var details = document.getElementById('spacelocation');
    details.innerHTML += "<span>The current location of the International Space Station is " + result.iss_position.latitude + "°N and " + result.iss_position.longitude + "°E</span>";   
}