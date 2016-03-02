var i  = 0
module.exports = function (returnVal) {
  if (returnVal) return 'js-ids-' + i
  i += 1
  return 'js-ids-' + i
}
