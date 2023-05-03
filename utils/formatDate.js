const moment = require('moment');
const handlebars = require('handlebars');

handlebars.registerHelper('formatDate', function(dateString) {
  return moment(dateString).format('ddd MMM DD');
});