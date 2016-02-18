module.exports = `<h3><%= label %></h3>
<% values.forEach(function(value){ %>
  <label class="gbr-radio mdl-radio mdl-js-radio mdl-js-ripple-effect" for="<%= ids() %>">
    <input type="radio" id="<%= ids(true) %>" class="mdl-radio__button" name="options" value="<%= value %>">
    <span class="mdl-radio__label"><%= value %></span>
  </label>
<% }) %>`
