'use strict';

  var scenea = document.getElementById('scene');
  var parallax = new Parallax(scenea);  


for (var i = 1; i <= 25; i++) {
  var scene = document.getElementById('scene-' + i);
  var parallax = new Parallax(scene, {
    calibrateX: false,
    calibrateY: true,
    scalarX: -80,
    scalarY: 20,
    frictionX: 0.8,
    frictionY: 0.8,
    originX: 0.0,
    originY: 1.0
  });
}




