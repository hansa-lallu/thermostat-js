'use strict';

describe('Thermostat', function(){
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default of 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(thermostat.DEFAULT_TEMP);
  });

  it('has a minimum of 10 degrees', function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.currentTemp()).toEqual(thermostat.MINIMUM_TEMP);
  });

  it('can reset to default temp', function(){
    for (var i =0; i <6; i++){
    thermostat.up();
    }
    thermostat.resetTemp();
    expect(thermostat.currentTemp()).toEqual(thermostat.DEFAULT_TEMP); 
  })

  describe('#up', function(){
    it('increases the temperature', function(){
      thermostat.up();
      expect(thermostat.currentTemp()).toEqual(thermostat.DEFAULT_TEMP + 1);
    });
  });

  describe('#down', function(){
    it('decreases the temperature', function(){
      thermostat.down();
      expect(thermostat.currentTemp()).toEqual(thermostat.DEFAULT_TEMP -1);
    });
  });

  describe('#powerSaving', function(){
    it('has power saving mode on by default', function(){
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });

    it('turn power saving mode off', function(){
      thermostat.turnPowerSavingModeOff();
      expect(thermostat.isPowerSavingModeOn()).toBe(false);
    });

    it('turns power saving mode back on', function(){
      thermostat.turnPowerSavingModeOff();
      thermostat.turnPowerSavingModeOn();
      expect(thermostat.isPowerSavingModeOn()).toBe(true);
    });
  });

  describe('when power saving mode is on', function(){
    it('has a max temp of 25 degrees', function(){
      for (var i = 0; i <6; i ++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(thermostat.MAX_TEMP_PSM_ON);
    });
  });

  describe('when power saving mode is off', function() {
    it('has a max temp of 32 degrees', function() {
      thermostat.turnPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.currentTemp()).toEqual(thermostat.MAX_TEMP_PSM_OFF);
    });
  });

  describe('displaying usage levels', function() {
    describe('when the temp is below 18 degrees', function() {
      it('is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });
  });

  describe('when the temp is between 18 and 25 degrees', function() {
    it('it is considered medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
  });

  describe('when the temp is anything else', function() {
    it('it is considered high-usage', function() {
      thermostat.powerSavingMode = false;
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });
});