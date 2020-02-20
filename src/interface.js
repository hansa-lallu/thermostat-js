var thermostat = new Thermostat();
$(document).ready(function() {
      $('.current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
    })

    $('.temp_up').click(function() {
      thermostat.up()
      $('.current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
    });

    $('.temp_down').click(function(){
      thermostat.down()
      $('.current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
    });

    $('.reset').click(function(){
      thermostat.resetTemp()
      $('.current_temp').text(thermostat._temperature);
      $('.energy_usage').text(thermostat.energyUsage());
    });

    $('.toggle_power').on('click', function() {
      if(thermostat.powerSavingMode) {
          thermostat.turnPowerSavingModeOff();
      } else {
          thermostat.turnPowerSavingModeOn();
          $('.current_temp').text(thermostat._temperature);
      }
  })
