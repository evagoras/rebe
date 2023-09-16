"use strict";

import playtimes from "./playtimes.json" assert {type: "json"}
import holidays from "./holidays.json" assert {type: "json"}

let playtimesDiv = document.getElementById("playtimes-output");
let holidaysDiv = document.getElementById("holidays-output");
var radio = document.getElementById("radio");
let playtimesOutput = "";
let holidaysOutput = "";
let todaysDate = new Date();
let weekDayNow = todaysDate.getDay();

var yearNow = todaysDate.getFullYear();
var monthNow = todaysDate.getMonth();
var monthDayNow = todaysDate.getDate();

function renderPlaytimes(){
  for(let playtime of playtimes){
    playtimesOutput += `
      <tr>
        <td>${playtime.start}</td>
        <td>${playtime.end}</td>
      </tr>
    `;
  }
  playtimesDiv.innerHTML = playtimesOutput;
}

function renderHolidays(){
  for(let holiday of holidays){
    holidaysOutput += `
      <tr>
        <td>${holiday.date}</td>
      </tr>
    `;
  }
  holidaysDiv.innerHTML = holidaysOutput;
}

function isToday(date) {
  if(
    todaysDate.getFullYear() === date.getFullYear() &&
    todaysDate.getMonth() === date.getMonth() &&
    todaysDate.getDate() === date.getDate()
  ){
    return true;
  }
  return false;
}

function checkPlaytimes() {
  let play = false;
  for(let playtime of playtimes){
    const [startHour, startMin] = playtime.start.split(":");
    const [endHour, endMin] = playtime.end.split(":");
    const startDate = new Date(yearNow, monthNow, monthDayNow, startHour, startMin, 0);
    const endDate = new Date(yearNow, monthNow, monthDayNow, endHour, endMin, 0);
    if(todaysDate >= startDate && todaysDate <= endDate){
      play = true;
      break;
    }
  }
  if(play){
    radio.muted = false;
    if(radio.paused){
      var resp = radio.play();
      if (resp!== undefined) {
          resp.then(_ => {
              // autoplay starts!
          }).catch(error => {
            //show error
            radio.muted = false;
            radio.play();
          });
      }
    }
  } else {
    stopRadio();
  }
}

function playRadio(){
  stopRadio();
  // play only between Monday to Friday
  if(weekDayNow > 0 && weekDayNow < 7){
    for(let holiday of holidays){
      const [holidayDay, holidayMonth, holidayYear] = holiday.date.split("/");
      const holidayDate = new Date(holidayYear, holidayMonth, holidayDay);
      // exclude any holidays
      if(isToday(holidayDate)){
        // actions for when it's a holiday
      } else {
        setInterval(function(){
          checkPlaytimes();
        }, 5000);
      }
    }
  }
}

function stopRadio(){
  radio.pause();
  radio.currentTime = 0;
}

// run page actions
renderPlaytimes();
renderHolidays();
playRadio();