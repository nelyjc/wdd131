// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  // Set the current year
  document.getElementById("currentyear").textContent = new Date().getFullYear();

  // Set the last modified date
  document.getElementById("lastModified").textContent = document.lastModified;

  // Static values for temperature and wind speed (Celsius, km/h)
  const temperature = 27;
  const windSpeed = 10;

  // Wind chill formula (in Celsius)
  function calculateWindChill(temp, speed) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(speed, 0.16) +
      0.3965 * temp * Math.pow(speed, 0.16)
    ).toFixed(1);
  }

  // Check if wind chill calculation is applicable
  let windChillText = "N/A";
  if (temperature <= 10 && windSpeed > 4.8) {
    windChillText = calculateWindChill(temperature, windSpeed) + " °C";
  }

  // Display result
  document.getElementById("windchill").textContent = windChillText;
});
