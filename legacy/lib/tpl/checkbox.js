module.exports = `<h3><%= label %></h3>
<% values.forEach(function(value){ %>
  <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="<%= ids() %>">
    <input type="checkbox" id="<%= ids(true) %>" class="mdl-checkbox__input" value="<%= value %>">
    <span class="mdl-checkbox__label"><%= value %></span>
  </label>
<% }) %>`
