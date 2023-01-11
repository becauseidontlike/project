setInterval(function() {
let wars = document.querySelector("#warsaw");
let warsDate = document.querySelector("#warsaw .date");
let warsTime = document.querySelector("#warsaw .time");
warsDate.innerHTML = moment().tz("Europe/Warsaw").format("MMMM Do YYYY");
warsTime.innerHTML =  moment().tz("Europe/Warsaw").format("hh:mm:ss [<small>]A[</small>]");

let manch = document.querySelector("#manchester");
let manchDate = document.querySelector("#manchester .date");
let manchTime = document.querySelector("#manchester .time");
manchDate.innerHTML = moment().tz("Europe/London").format("MMMM Do YYYY");
manchTime.innerHTML =  moment().tz("Europe/London").format("hh:mm:ss [<small>]A[</small>]");


let melb = document.querySelector("#melbourne");
let melbDate = melb.querySelector(".date");
let melbTime = document.querySelector("#melbourne .time");
melbDate.innerHTML = moment().tz("Australia/Melbourne").format("MMMM Do YYYY");
melbTime.innerHTML =  moment().tz("Australia/Melbourne").format("hh:mm:ss [<small>]A[</small>]");
}, 1000);

function update(event){
   let cityTZ = event.target.value; 
   let cityNames = cityTZ.replace("_", " ").split("/")[1]; 
   let cityT = moment().tz(cityTZ);
   let cityElement = document.querySelector(".city");
   cityElement.innerHTML = `<div class="cities">
                <h2>${cityNames}</h2>
                <div class="date">${cityT.format("MMMM Do YYYY")}</div>
                <div class="time">${cityT.format("h:mm:ss")} <small>${cityT.format("A")}</div>
            </div>`
}


let citySelect = document.querySelector("#selector");
citySelect.addEventListener("change", update);