module.exports = `
<label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="<%= ids() %>">
  <input type="checkbox" id="<%= ids(true) %>" class="mdl-checkbox__input">
  <span class="mdl-checkbox__label">Did you review the <a href="<%= link %>">guidelines for contributing</a> to this repository?</span>
</label>
`
