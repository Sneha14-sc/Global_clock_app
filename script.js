// to display proper date and months defining an array
const day = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

// to showcase the first clock with only IST format data.
const digi_display1 = document.querySelector('.date-display1');
const hour_hand1 = document.querySelector('.hour1');
const min_hand1 = document.querySelector('.min1');
const sec_hand1 = document.querySelector('.sec1');


function showDate1()
{
    let date1 = new Date();
    
    digi_display1.innerHTML = `<h2>${day[date1.getDay()]}</h2>
                              <h4>${date1.getDate()}-${month[date1.getMonth()]}-${date1.getFullYear()}</h4><br><h3>
                              ${date1.getHours()} : ${date1.getMinutes()} : ${date1.getSeconds()}<br> GMT +5:30</h3>`;

      const getSec = date1.getSeconds();
      const getMin = date1.getMinutes();
      const getHour = date1.getHours(); 
    
      const degSec = (getSec/60)*360;
      const degMin = (getMin/60)*360;
      const degHour = (getHour/12)*360;
      hour_hand1.style.transform = `rotate(${degHour}deg)`;
      min_hand1.style.transform = `rotate(${degMin}deg)`;
      sec_hand1.style.transform = `rotate(${degSec}deg)`;
}
setInterval(showDate1,1000);



//actions to be implemented on UI of second clock
const hour_hand = document.querySelector('.hour');
const min_hand = document.querySelector('.min');
const sec_hand = document.querySelector('.sec');
const digi_display = document.querySelector('.date-display');


// to get the zone from drop down
const zone = document.getElementById("zone");
var selectedOption, gmt_id='GMT+00:00';

zone.addEventListener("click", (e) => {
    //to get the selected value:
     selectedOption = zone.value;
     gmt_id = zone.options[zone.selectedIndex].dataset.adjustment;
});


//fucntion to run a clock
function setDate(){
    const now = calcTime(selectedOption);

    digi_display.innerHTML = `<h2>${day[now.getDay()]}</h2>
                              <h4>${now.getDate()}-${month[now.getMonth()]}-${now.getFullYear()}</h4><br><h3>
                              ${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}<br> ${gmt_id}</h3>`;

    const getSec = now.getSeconds();
    const getMin = now.getMinutes();
    const getHour = now.getHours(); 
  
    const degSec = (getSec/60)*360;
    const degMin = (getMin/60)*360;
    const degHour = (getHour/12)*360;

    hour_hand.style.transform = `rotate(${degHour}deg)`;
    min_hand.style.transform = `rotate(${degMin}deg)`;
    sec_hand.style.transform = `rotate(${degSec}deg)`;
}
setInterval(setDate,1000);


//function to calculate the time according to the gmt time provided

function calcTime(offset=0) {

    // create Date object for current location
    const d = new Date();
   
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    let utc = d.getTime() + (d.getTimezoneOffset() * 60000);
   
    // create new Date object for different city
    // using supplied offset
    nd = new Date(utc + (3600000*offset));
    
    // return time as a string
    return nd;
}