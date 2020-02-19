'use strict';

function Thermostat() {
  this._temperature = 20;
};

Thermostat.prototype.currentTemp = function(){
  return this._temperature;
};


