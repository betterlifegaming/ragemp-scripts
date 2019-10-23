mp.events.add('entityStreamIn', (entity) => {
  if (entity.type === 'vehicle' && entity.hasVariable('silencer')) {
    if (entity.getVariable('silencer')) {
      entity.setSirenSound(true);
    } else {
      entity.setSirenSound(false);
    }
  }
  if (entity.type === 'vehicle') {
    mp.events.callRemote("server:SirenSyncWithSilencer:streamSiren", entity);
  }
});

mp.events.add('client:SirenSyncWithSilencer:streamSiren', (vehicle, sirenState) => {
  vehicle.setSiren(sirenState);
});

mp.events.addDataHandler("silencer", (entity, value) => {
  if (entity.type === "vehicle")
    entity.setSirenSound(value);
});

mp.keys.bind(0x49, true, _ => {
  if (player.vehicle && (player.vehicle.getPedInSeat(-1) === player.handle || player.vehicle.getPedInSeat(0) == player.handle) && player.vehicle.getClass() === 18) {
    player.vehicle.getVariable('silencer') ? mp.game.graphics.notify(`~r~Silencer deactivated`) : mp.game.graphics.notify(`~g~Silencer activated`);
    mp.events.callRemote('server:SirenSyncWithSilencer:syncSirens', player.vehicle)
  }
});
