mp.events.add('server:SirenSyncWithSilencer:syncSirens', (player, vehicle) => {
  if (vehicle && mp.vehicles.exists(vehicle))
    vehicle.setVariable('silencer', !vehicle.getVariable('silencer'))
});

mp.events.add('server:SirenSyncWithSilencer:streamSiren', (player, vehicle) => {
  if (vehicle && mp.vehicles.exists(vehicle))
    player.call('client:SirenSyncWithSilencer:streamSiren', [vehicle, vehicle.siren]);
});
