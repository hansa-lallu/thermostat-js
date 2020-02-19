'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default of 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  
});