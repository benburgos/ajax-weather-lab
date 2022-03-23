const $input = $("input")
const $button = $("button")
const $aside = $("aside")

$button.on("click", () => {
    $("span").empty();
    const searchTerm = $input.val()
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=625581a608103e2740b59d94973c7176&units=imperial`)
    .then((getWeather) => {
        $("span.location").append(`${getWeather.name}`)
        $("span.temperature-actual").append(`${getWeather.main.temp}°`)
        $("span.temperature-feel").append(`${getWeather.main.feels_like}°`)
        $("span.precipitation").append(`${getWeather.weather[0].description}`)
    })
})