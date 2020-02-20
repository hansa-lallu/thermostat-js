var thermostat = new Thermostat();
$(document).ready(function() {
      $('.current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
    });

    $('.temp_up').click(function() {
      thermostat.up()
      updateTemperature();
      // $('.current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
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
          $('.current_temp').text(thermostat._temperature);
      };
    });

    function updateTemperature(){
      $('#current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
      $('body').attr('class', thermostat.energyUsage());
    }
