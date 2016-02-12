var ejs = require('ejs')
var get = require('./util/get')()
var ids = require('./util/ids')
var tpl = require('./tpl/')
var config = require('./config')
var endpoints = config.endpoints
var account = get[0]
var repository = get[1]
var name = account + '/' + repository

$.getJSON(endpoints.api + name + '/labels', function (data) {})
.done(function(labels) {
  var dom = tpl.labels
  var params = {labels: labels, ids: ids}
  var elem = ejs.render(dom, params)
  $("#js-content").prepend(elem)
  componentHandler.upgradeDom()
})

$.getJSON(endpoints.rawgit + name + '/master/issue.json', function (data) {})
.done(function(data) {
  var fields = data.fields
  $("#js-title").text(data.title)
  fields.forEach(function (field) {
    field.ids = ids
    var type = field.type
    var dom = tpl[type]
    var elem = ejs.render(dom, field)
    $("#js-content").append(elem)
  })
  componentHandler.upgradeDom()
})

$.get(endpoints.rawgit + name + '/master/CONTRIBUTING.md', function (data) {})
.done(function(data) {
  if (!data) return
  var dom = tpl.agreement
  var link = endpoints.github + name + '/blob/master/CONTRIBUTING.md'
  var params = {link: link, ids: ids}
  var elem = ejs.render(dom, params)
  $('#js-content-footer').prepend(elem)
  componentHandler.upgradeDom()
})
