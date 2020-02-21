var thermostat = new Thermostat();
$(document).ready(function() {
      $('.current_temp').text(thermostat._temperature + '˚C');
      $('.energy_usage').text(thermostat.energyUsage());
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

    $.get("https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric", function(data) {
    $('#outside-temp').text(data.main.temp + '˚C')
    });

