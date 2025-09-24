let submit = document.getElementById("submit")
let display = document.getElementById("display")

submit.addEventListener("click", async () => {
    // Input values fetch karni har click pe
    let lat = document.getElementById("lat").value;
    let lon = document.getElementById("lon").value;

    let url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

    
    let res = await fetch(url);
    let data = await res.json();

        // Display the temperature and windspeed
    display.innerHTML = `
        <p>Temperature: ${data.current_weather.temperature} °C</p>
        <p>Windspeed: ${data.current_weather.windspeed} km/h</p>
        <p>Time: ${data.current_weather.time}</p>
    `;
    
})