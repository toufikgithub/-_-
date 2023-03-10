function convertCelsiusToFahrenheit() {
    const celsius = document.getElementById('celsius').value;
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('fahrenheit').value = fahrenheit.toFixed(2);
  }
  
  function convertFahrenheitToCelsius() {
    const fahrenheit = document.getElementById('fahrenheit').value;
    const celsius = (fahrenheit - 32) * 5/9;
    document.getElementById('celsius').value = celsius.toFixed(2);
  }
  
  function convertCelsiusToKelvin() {
    const celsius = document.getElementById('celsius').value;
    const kelvin = parseInt(celsius) + 273.15;
    document.getElementById('kelvin').value = kelvin.toFixed(2);
  }
  
  function convertKelvinToCelsius() {
    const kelvin = document.getElementById('kelvin').value;
    const celsius = kelvin - 273.15;
    document.getElementById('celsius').value = celsius.toFixed(2);
  }
  