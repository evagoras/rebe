let playtimes = [];

fetch("schedule.json")
.then(function(response){
  return response.json();
})
.then(function(schedules){
  playtimes = schedules;
  let placeholder = document.querySelector("#data-output");
  let out = "";
  for(let schedule of schedules){
    out += `
      <tr>
        <td>${schedule.start}</td>
        <td>${schedule.end}</td>
      </tr>
    `;
  }

  placeholder.innerHTML = out;
})

setInterval(function() {
  myfunction();
}, 5000);

function myfunction() {
  var d = new Date();
  console.log(d);
  var year = d.getFullYear();
  console.log(year);
  var month = d.getMonth();
  console.log(month);
  var weekday = d.getDay();
  console.log(weekday);
  var monthday = d.getDate();
  console.log(monthday);
  var hour = d.getHours();
  console.log(hour);
  var min = d.getMinutes();
  console.log(min);
  var sec = d.getSeconds();
  console.log(sec);
  var play = false;

  for(let playtime of playtimes){
    const startTime = playtime.start.split(":");
    const startHour = startTime[0];
    const startMin = startTime[1];
    const endTime = playtime.end.split(":");
    const endHour = endTime[0];
    const endMin = endTime[1];
    
    const startDate = new Date(year, month, monthday, startHour, startMin, 0);
    const endDate = new Date(year, month, monthday, endHour, endMin, 0);

    if(d>startDate && d<endDate){
      play = true;
      break;
    }
  }

  var rebeplayer = document.getElementById("reberadio");
  if(play){
    if(rebeplayer.paused){
      rebeplayer.click();
    }
  } else {
    if(!rebeplayer.paused){
      rebeplayer.click();
    }
  }
    
  console.log(play);
}
