'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default of 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  describe('#up', function(){
    it('increases the temperature', function(){
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });
});