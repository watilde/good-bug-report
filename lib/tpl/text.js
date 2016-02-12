module.exports = `
<h3><%= label %></h3>
<div class="gbr-textfield mdl-textfield mdl-js-textfield">
  <input class="mdl-textfield__input" type="text" id="<%= ids() %>">
  <label class="mdl-textfield__label" for="<%= ids(true) %>"><%= placeholder %></label>
</div>
`
