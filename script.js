fetch("schedule.json")
.then(function(response){
  return response.json();
})
.then(function(schdules){
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
