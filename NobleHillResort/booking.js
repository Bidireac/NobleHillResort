// Googlemap API
let map;
document.addEventListener("DOMContentLoaded", () => {
    let s = document.createElement("script");
    document.head.appendChild(s);
    s.addEventListener("load", () => {
        //script has loaded
        console.log("script has loaded");
        map = new google.maps.Map(document.getElementById("map"), {
            center: {
                lat: 44.304208,
                lng: 23.806229
            },
            zoom: 16,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
    });
    s.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyC2tcBnlDSpO88zE0eQeQ9VxcS1lPp7UlY`;
});