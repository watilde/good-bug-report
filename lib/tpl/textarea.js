module.exports = `
<h3><%= label %></h3>
<div class="gbr-textfield mdl-textfield mdl-js-textfield">
  <textarea class="mdl-textfield__input" type="text" rows= "3" id="<%= ids() %>" ></textarea>
  <label class="mdl-textfield__label" for="<%= ids(true) %>"><%= placeholder %></label>
</div>
`
