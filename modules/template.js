
var ejs = require('ejs');
var fs = require('fs');
var path = require('path');
var str = fs.readFileSync(path.join(__dirname + '/../views/index.ejs'), 'utf8');
var React = require('react/addons');
var _ = require('lodash');

module.exports = function(Component, props, locals, jsx) {
  // for backwards compatibility
  var data = _.extend(props, locals);

  var reactHtml = React.renderToString(Component(data));

  return ejs.render(str, { reactOutput: reactHtml, props: JSON.stringify(data), jsx: jsx });
};