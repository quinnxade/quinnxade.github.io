window.onload = function () {
  // Get the canvas element
  const canvas = document.getElementById('interactiveCanvas');

  // Initialize Paper.js with the canvas
  paper.setup(canvas);

  // Set default style for all shapes
  paper.project.currentStyle = {
    fillColor: 'white', // White fill color
    opacity: 0.5,
    strokeColor: null   // No stroke
  };

  // Ball positions
  var ballPositions = [
    [255, 129], [610, 73], [486, 363],
    [117, 459], [484, 726], [843, 306],
    [789, 615], [1049, 82], [1292, 428],
    [1117, 733], [1352, 86], [92, 798]
  ];

  var handle_len_rate = 2.4;
  var circlePaths = [];
  var radius = 30;

  // Create circle paths
  for (var i = 0, l = ballPositions.length; i < l; i++) {
    var circlePath = new paper.Path.Circle({
      center: ballPositions[i],
      radius: radius,
    });
    circlePaths.push(circlePath);
  }

  // Create large circle
  var largeCircle = new paper.Path.Circle({
    center: [676, 433],
    radius: 60
  });
  circlePaths.push(largeCircle);

  // Handle mouse move
  paper.view.onMouseMove = function (event) {
    largeCircle.position = event.point;
    generateConnections(circlePaths);
  };

  // Group for connections
  var connections = new paper.Group();

  // Generate metaball connections
  function generateConnections(paths) {
    connections.removeChildren(); // Clear previous connections

    for (var i = 0, l = paths.length; i < l; i++) {
      for (var j = i - 1; j >= 0; j--) {
        var path = metaball(paths[i], paths[j], 0.5, handle_len_rate, 300);
        if (path) {
          connections.appendTop(path);
          path.removeOnMove();
        }
      }
    }
  }

  // Metaball function
  function metaball(ball1, ball2, v, handle_len_rate, maxDistance) {
    var center1 = ball1.position;
    var center2 = ball2.position;
    var radius1 = ball1.bounds.width / 2;
    var radius2 = ball2.bounds.width / 2;
    var pi2 = Math.PI / 2;
    var d = center1.getDistance(center2);

    if (radius1 === 0 || radius2 === 0) return;

    if (d > maxDistance || d <= Math.abs(radius1 - radius2)) {
      return;
    }

    var direction = center2.subtract(center1);
    var angle1 = direction.angleInRadians;
    var angle2 = Math.acos((radius1 - radius2) / d);

    var u1 = d < radius1 + radius2 ? Math.acos((radius1 ** 2 + d ** 2 - radius2 ** 2) / (2 * radius1 * d)) : 0;
    var u2 = d < radius1 + radius2 ? Math.acos((radius2 ** 2 + d ** 2 - radius1 ** 2) / (2 * radius2 * d)) : 0;

    var angle1a = angle1 + u1 + (angle2 - u1) * v;
    var angle1b = angle1 - u1 - (angle2 - u1) * v;
    var angle2a = angle1 + pi2 - u2 - (pi2 - u2 - angle2) * v;
    var angle2b = angle1 - pi2 + u2 + (pi2 - u2 - angle2) * v;

    var p1a = center1.add(getVector(angle1a, radius1));
    var p1b = center1.add(getVector(angle1b, radius1));
    var p2a = center2.add(getVector(angle2a, radius2));
    var p2b = center2.add(getVector(angle2b, radius2));

    var totalRadius = radius1 + radius2;
    var d2 = Math.min(v * handle_len_rate, p1a.getDistance(p2a) / totalRadius);
    d2 *= Math.min(1, d * 2 / totalRadius);

    radius1 *= d2;
    radius2 *= d2;

    var path = new paper.Path({
      segments: [p1a, p2a, p2b, p1b],
      style: ball1.style,
      closed: true
    });

    path.segments[0].handleOut = getVector(angle1a - pi2, radius1);
    path.segments[1].handleIn = getVector(angle2a + pi2, radius2);
    path.segments[2].handleOut = getVector(angle2b - pi2, radius2);
    path.segments[3].handleIn = getVector(angle1b + pi2, radius1);

    return path;
  }

  // Get vector
  function getVector(radians, length) {
    return new paper.Point({
      angle: radians * 180 / Math.PI,
      length: length
    });
  }

  // Generate initial connections
  generateConnections(circlePaths);
};
