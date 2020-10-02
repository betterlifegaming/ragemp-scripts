const objects = require('./objects.js');
const player = mp.players.local;

mp.keys.bind(0x45, true, function() {
  var closestObject = objects.checkLocalObjectsFirst(player);
  
  //Do your switch case or ifs about which object it was
});
