var ejs = require('ejs')
var get = require('./util/get')()
var ids = require('./util/ids')
var tpl = require('./tpl/')
var config = require('./config')
var endpoints = config.endpoints
var account = get[0]
var repository = get[1]
var name = account + '/' + repository

$('#js-form').on('submit', function (e) {
  e.preventDefault();
  var title = $('#js-issue-title').val()
  var url = endpoints.github + name + '/issues/new'
  url += '?title=' + title
  window.location.href = url
})

$.getJSON(endpoints.rawgit + name + '/master/issue.json', function (data) {})
.fail(function() {
  $("#js-title").text(name)
})
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
.fail(function() {
  $('#js-submit').attr("disabled", null)
})
.done(function(data) {
  var dom = tpl.agreement
  var link = endpoints.github + name + '/blob/master/CONTRIBUTING.md'
  var params = {link: link, ids: ids}
  var elem = ejs.render(dom, params)
  var id = ids(true)
  $('#js-content-footer').prepend(elem)
  $('#' + id).on('click', function () {
    var val = $(this).prop('checked')
    var status = val ? null : 'disabled'
    $('#js-submit').attr("disabled", status)
  })
  componentHandler.upgradeDom()
})
