
exports.min = function min (array) {
  if (!arguments || array == undefined || !array.length) return 0;
  return array.reduce((min, current) => min < current? min : current)
}

exports.max = function max (array) {
  if (!arguments || array == undefined || !array.length) return 0;
  return array.reduce((max, current) => max > current? max : current, 0)
}

exports.avg = function avg (array) {
  if (!arguments || array == undefined || !array.length) return 0;
  return array.reduce((sum, current) => sum += current) / array.length;
}
