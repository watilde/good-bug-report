module.exports = function () {
  var hash = window.location.hash
  var vals = hash.split('/').splice(1)
  return vals
}
