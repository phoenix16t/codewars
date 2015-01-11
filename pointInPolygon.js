// http://www.codewars.com/kata/530265044b7e23379d00076a/train/javascript

// The problem

// In this kata, you're going write a function called pointInPoly to test if a point is inside a polygon.

// Points will be represented as [x,y] arrays.

// The polygon will be an array of points which are the polygon's vertices. The last point in the array connects back to the first point.

// You can assume:

// The polygon will be a valid simple polygon. That is, it will have at least three points, none of its edges will cross each other, and exactly two edges will meet at each vertex.
// In the tests, the point will never fall exactly on an edge of the polygon.
// Testing

// To help you visualize your test cases, the showAndTest(poly,point,inside) function is preloaded. It draws the polygon and point and then calls Test.expect automatically.

// So if you call:

// showAndTest([[-5, -5], [5, -5], [0, 5]], [0,0], true)
// then you'll see:

// The drawing window is 14x14 units wide and centered at the origin.


//Return true if point is inside poly, and false if it is not
function pointInPoly(poly, point) {
  var testCases = [];
  var count = 0;

  // build a test case each time the polygon crosses the point's y-axis
  poly.reduce(function(vertex1, vertex2) {
    if(!((vertex1[1] > point[1] && vertex2[1] > point[1]) || 
      (vertex1[1] < point[1] && vertex2[1] < point[1]))) {
      testCases.push([vertex1, vertex2]);
    }
    return vertex2;
  }, poly[poly.length - 1]);

  // if the polygon never crosses the point's y axis, return false
  if(testCases.length <= 0) { return false; }

  // run tests for the line between each pair of points and keep track of the number of hits
  testCases.forEach(function(test, index) {
    var m = (test[0][1] - test[1][1]) / (test[0][0] - test[1][0]);
    var b = test[0][1] - (m * test[0][0]);

    if((test[0][1] === point[1] && test[0][0] > point[0]) || (test[1][1] === point[1] && test[1][0] > point)) { return false; }
    else if(!isFinite(m) && test[0][0] > point[0]) {
      count++;
    }
    else if((point[1] - b) / m > point[0]) { count++; }
  });
  return count % 2 === 1;
};
