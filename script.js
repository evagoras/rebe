fetch("schedule.json")
.then(function(response){
  return response.json();
})
.then(function(schedules){
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
}
