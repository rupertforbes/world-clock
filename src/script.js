function newTimeZone(event) {
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
select.addEventListener("change", newTimeZone);
//                                                "It is Saturday, October 8, 2023 2:51 PM in Europe/Paris"

//tokyo time and date

let tokyoDate = moment().tz("Asia/Tokyo").format("MMMM Do, YYYY");
let tokyoDateTarget = document.querySelector("#tokyo-date");
tokyoDateTarget.innerHTML = tokyoDate;

let tokyoTime = moment().tz("Asia/Tokyo").format("h:mm:ss");
let tokyoAmPm = moment().tz("Asia/Tokyo").format("A");
let tokyoTimeTarget = document.querySelector(".tokyo-time");
tokyoTimeTarget.innerHTML = `${tokyoTime} <span class="tokyo-am-pm">${tokyoAmPm}</span>`;

//paris time and date

//new york time and date
