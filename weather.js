// all html items
let city = document.querySelector(".city");
let btn = document.querySelector(".get-weather");
let weatherIcon = document.querySelector(".weather-icon");
let loc = document.querySelector(".location");
let temperature = document.querySelector(".temperature");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind-speed");

//arr to push obj
const arr = [];
//btn click event for api call
let btnClick = btn.addEventListener("click", () => {
  let input = city.value;

  // check if the input is epmty or not
  if (input === "") {
    return alert("please write carefully");
  }

  // api starts from here
  const apiKey = "ed4146785e6b49daa24161520240609";

  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}&aqi=no`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error(
          "There might be a problem with api it's probably :",
          res.ok
        );
      }
      return res.json();
    })
    .then((data) => {
      //made arry of obj to access the item easy we can also access it via data

      arr.push(data);
      let arrObj = arr.map((item) => {
        loc.innerText = item.location.name;
        weatherIcon.src = `${item.current.condition.icon}`;
        temperature.innerText = `${item.current.feelslike_c}C`;
        humidity.innerText = item.current.humidity;
        return item;
      });
    })
    .catch((error) => {
      console.log("there is an errr", error);
    });

  city.value = "";
});

city.addEventListener("keydown", (e) => {
  if (e.key === "enter") {
    btnClick();
  }
});
