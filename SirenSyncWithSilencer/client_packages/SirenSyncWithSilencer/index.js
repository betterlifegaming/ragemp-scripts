mp.events.add('entityStreamIn', (entity) => {
  if (entity.type === 'vehicle' && entity.hasVariable('silencer')) {
    if (entity.getVariable('silencer')) {
      entity.setSirenSound(true);
    } else {
      entity.setSirenSound(false);
    }
  }
  if (entity.type === 'vehicle') {
    mp.events.callRemote("server:police:streamSiren", entity);
  }
});

mp.events.add('client:police:streamSiren', (vehicle, sirenState) => {
  vehicle.setSiren(sirenState);
});

mp.events.addDataHandler("silencer", (entity, value) => {
  if (entity.type === "vehicle")
    entity.setSirenSound(value);
});
