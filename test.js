var centroid = require('./')
var test = require('tape')

test('computes the centroid of a triangle', function (t) {
  var t2d = [
    [10, 0],
    [20, 2],
    [30, 1]
  ]

  var t3d = [
    [10, 0, -4],
    [20, 2, 24],
    [30, 1, 4]
  ]

  t.deepEqual(centroid(t2d), [20, 1], 'handles 2d')
  t.deepEqual(centroid(t3d), [20, 1, 8], 'handles 3d')
  t.throws(function () {
    centroid([])
  }, 'throws type error')

  t.end()
})
