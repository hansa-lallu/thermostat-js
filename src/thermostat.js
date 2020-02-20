'use strict';

function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this._temperature = this.DEFAULT_TEMP;
  this.MINIMUM_TEMP = 10;
  this.powerSavingMode = true;
  this.MAX_TEMP_PSM_ON = 25;
  this.MAX_TEMP_PSM_OFF = 32;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 18;
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
  return this._temperature === this.MINIMUM_TEMP;
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

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'Low-Usage';
  }
  if (this._temperature >= this.MEDIUM_ENERGY_USAGE_LIMIT && this._temperature <= this.MAX_TEMP_PSM_ON) {
    return 'Medium-Usage';
  }
  return 'High-Usage';
}