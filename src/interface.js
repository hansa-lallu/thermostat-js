var thermostat = new Thermostat();
$(document).ready(function() {
      $('.current_temp').text(thermostat._temperature + '˚C');
      $('.energy_usage').text(thermostat.energyUsage());
      displayWeather();
    });

    $('.temp_up').click(function() {
      thermostat.up()
      updateTemperature();
    });

    $('.temp_down').click(function() {
      thermostat.down()
      updateTemperature();
  
    });

    $('.reset').click(function() { //event listener
      thermostat.resetTemp() //update model
      updateTemperature();
    });

    $('.toggle_power').on('click', function() {
      if(thermostat.powerSavingMode) {
          thermostat.turnPowerSavingModeOff();
      } else {
          thermostat.turnPowerSavingModeOn();
          $('.current_temp').text(thermostat._temperature + '˚C'); //view model
      };
    });

    function updateTemperature(){
      $('#current_temp').text(thermostat._temperature + '˚C');
      $('.energy_usage').text(thermostat.energyUsage());
      $('body').attr('class', thermostat.energyUsage());
    }
    
    function displayWeather(city) {
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
      var units =  '&units=metric';
      $.get(url + token + units, function(data) {
        $('#outside-temp').text(data.main.temp + '˚C');
      });
    };

    $('#select-city').submit(function(event){
      event.preventDefault();
      var city = $('#current-city').val();
      displayWeather(city);
      });
