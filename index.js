// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  function fuzzyMatch(drivers, fuzzy) {
    return drivers.filter(driver => driver.toLowerCase().startsWith(fuzzy.toLowerCase()));
  }
  function matchName(drivers, match) {
    return drivers.filter(driver => driver.name === match);
  }
  