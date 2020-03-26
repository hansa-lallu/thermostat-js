# Thermostat Challenge #

## Description ##

This app is based on the Makers Academy Week 5 afternoon challenge. 
An online thermostat that allows the user to set the temperature 

## User Stories: ##
```
As a user,
So that I can tell the temperature,
I want a thermostat

As a user,
So that I can warm up,
I want to be able to increase the temperature

As a user,
So that I can save on my electricity bills,
I want to be able to set the temperature on power saving mode

As a user,
So that I can return to a standard temperature,
I want to be able to reset the thermostat

As a user,
So that I can remain conscious of my carbon footprint,
I want to be able to monitor my energy usage
```

## Functional Description ## 
- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- Use a jQuery AJAX call to get the weather information for London from a weather API. Display the weather information to the user.
- Add further functionality so that the user can select their current city and the weather provided is for the selected city.

## Tech Used ##
- Javascript
- jQuery
- HTML
- CSS

## Testing ##

- Open `SpecRunner.html` in your browser 
  
  ## Getting Started ##

- Fork this repo, and clone to your local machine
- Change into the directory `cd thermostat-js`
- run command `open index.html` in your terminal

## Project Status ##
- Unfinished as unable to save state. Temperature currently resets when page has been refreshed.
- Styling needs to be developed 
