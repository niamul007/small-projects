let city = document.querySelector(".city");
let btn = document.querySelector(".get-weather");

btn.addEventListener("click", () => {
  const apiKey = "ed4146785e6b49daa24161520240609";
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city.value}&aqi=no`
  )
    .then(res => {
      if (!res.ok) {
        throw new Error(
          "There might be a problem with api it's probably :",
          res.ok
        );
      }
    return res.json();

    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log("there is an errr", error);
    });

  city.value = "";
});
