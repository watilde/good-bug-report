module.exports = `
<h3>Labels</h3>
<% labels.forEach(function(label){ %>
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="<%= ids() %>">
  <input type="checkbox" id="<%= ids(true) %>" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">
    <span style="border: 1px solid #000; background-color: #<%= label.color %>">&nbsp;&nbsp;</span>
    <%= label.name %>
  </span>
</label>
<% }) %>
`
