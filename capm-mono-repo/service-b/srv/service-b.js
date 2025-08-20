const cds = require('@sap/cds');
module.exports = cds.service.impl(function() {
  this.after('READ', 'Products', (each) => {
    each.Name += ' (from Service B)';
  });
});