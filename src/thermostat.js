'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;
  this.MINIMUM_TEMPERATURE = 10;
  this.powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
};

Thermostat.prototype.currentTemp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  if (this.isMaximumTemperature()){
    return;
  }
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

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_TEMP_PSM_OFF;
  }
    return this._temperature === this.MAX_TEMP_PSM_ON;
}

Thermostat.prototype.resetTemp = function(){
  this._temperature = this.DEFAULT_TEMP;
};