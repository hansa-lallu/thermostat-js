'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default of 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('has a minimum of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });

  describe('#up', function(){
    it('increases the temperature', function(){
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(21);
    });
  });

  describe('#down', function(){
    it('decreases the temperature', function(){
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(19);
    });
  });
});