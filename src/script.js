/*function newTimeZone(event) {
  let targetElement = document.querySelector("#target");
  if (event.target.value.length > 0) {
    if (event.target.value === "tokyo") {
      targetElement.innerHTML = `It is ${moment()
        .tz("Asia/Tokyo")
        .format("dddd, MMMM D, YYYY h:mm A")} in Tokyo`;
    } else if (event.target.value === "paris") {
      targetElement.innerHTML = `It is ${moment()
        .tz("Europe/Paris")
        .format("dddd, MMMM D, YYYY h:mm A")} in Paris`;
    } else if (event.target.value === "new-york") {
      targetElement.innerHTML = `It is ${moment()
        .tz("America/New_York")
        .format("dddd, MMMM D, YYYY h:mm A")} in New York`;
    }
  }
}

let select = document.querySelector("#select-city");
select.addEventListener("change", newTimeZone);*/
//                                                "It is Saturday, October 8, 2023 2:51 PM in Europe/Paris"

//adding city selector

function setNewTimeZone() {
  if (event.target.value.length > 0) {
    newTimeZoneTarget.innerHTML = `<hr />
            <div class="col">
              <h2 class="city">${newCity}</h2>
              <p class="date">${moment()
                .tz(newTimeZone)
                .format("MMMM Do, YYYY")}</p>
            </div>
            <div class="col">
              <h1 class="time">${moment()
                .tz(newTimeZone)
                .format("h:mm:ss")}</h1>
              <span class="am-pm">${moment().tz(newTimeZone).format("A")}</span>
            </div>`;
  } else {
    newTimeZoneTarget.innerHTML = "";
  }
}

function newTimeZone(event) {
  let newTimeZoneTarget = document.querySelector(".target-city");
  let newTimeZone;
  let newCity;

  if (event.target.value === "london") {
    newTimeZone = "Europe/London";
    newCity = "London";
  } else if (event.target.value === "dubai") {
    newTimeZone = "Asia/Dubai";
    newCity = "Dubai";
  } else if (event.target.value === "los-angeles") {
    newTimeZone = "America/Los_Angeles";
    newCity = "Los Angeles";
  }

  function setNewTimeZone() {
    if (event.target.value.length > 0) {
      newTimeZoneTarget.innerHTML = `<hr />
            <div class="col">
              <h2 class="city">${newCity}</h2>
              <p class="date">${moment()
                .tz(newTimeZone)
                .format("MMMM Do, YYYY")}</p>
            </div>
            <div class="col">
              <h1 class="time">${moment()
                .tz(newTimeZone)
                .format("h:mm:ss")}</h1>
              <span class="am-pm">${moment().tz(newTimeZone).format("A")}</span>
            </div>`;
    } else {
      newTimeZoneTarget.innerHTML = "";
    }
  }
  setNewTimeZone();
}

let select = document.querySelector("#select-city");
select.addEventListener("change", newTimeZone);

//tokyo time and date
function tokyTimeAndDate() {
  let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do, YYYY");
  let tokyoDateTarget = document.querySelector(".tokyo-date");
  tokyoDateTarget.innerHTML = tokyoDate;

  let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ss");
  let tokyoAmPm = moment().tz("Asia/Tokyo").format("A");
  let tokyoTimeTarget = document.querySelector(".tokyo-time");
  tokyoTimeTarget.innerHTML = `${tokyoTime} <span class="am-pm">${tokyoAmPm}</span>`;
}

setInterval(tokyTimeAndDate, 1000);

//paris time and date
function parisTimeAndDate() {
  let parisDate = moment().tz("Europe/Paris").format("MMMM Do, YYYY");
  let parisDateTarget = document.querySelector(".paris-date");
  parisDateTarget.innerHTML = parisDate;

  let parisTime = moment().tz("Europe/Paris").format("h:mm:ss");
  let parisAmPm = moment().tz("Europe/Paris").format("A");
  let parisTimeTarget = document.querySelector(".paris-time");
  parisTimeTarget.innerHTML = `${parisTime} <span class="am-pm">${parisAmPm}</span>`;
}

setInterval(parisTimeAndDate, 1000);

//new york time and date

function newYorkTimeAndDate() {
  let newYorkDate = moment().tz("America/New_York").format("MMMM Do, YYYY");
  let newYorkDateTarget = document.querySelector(".new-york-date");
  newYorkDateTarget.innerHTML = newYorkDate;

  let newYorkTime = moment().tz("America/New_York").format("h:mm:ss");
  let newYorkAmPm = moment().tz("America/New_York").format("A");
  let newYorkTimeTarget = document.querySelector(".new-york-time");
  newYorkTimeTarget.innerHTML = `${newYorkTime} <span class="am-pm">${newYorkAmPm}</span>`;
}

setInterval(newYorkTimeAndDate, 1000);
