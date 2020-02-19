'use strict';

function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.currentTemp = function(){
  return this._temperature;
};

Thermostat.prototype.up = function(){
  this._temperature += 1;
};
