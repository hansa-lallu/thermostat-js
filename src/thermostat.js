'use strict';

function Thermostat() {
  this._temperature = 20;
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
};

Thermostat.prototype.currentTemp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  this._temperature += 1;
};

Thermostat.prototype.down = function(){
  if(this.isMinimumTemperature()){
    return;
  }
  this._temperature -= 1
}; 

Thermostat.prototype.isMinimumTemperature = function() {
  return this._temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function(){
  return this.powerSavingMode === true;
};

Thermostat.prototype.turnPowerSavingModeOff = function() {
  this.powerSavingMode = false;
}

Thermostat.prototype.turnPowerSavingModeOn = function() {
  this.powerSavingMode = true;
}
