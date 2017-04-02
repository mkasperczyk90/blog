import _ from 'lodash';

function getSimpleElement () {
  var element = document.createElement('div');

  var data = [
    {"text":"Hello"},
    {"text":"World"},
  ];

  element.innerHTML = _.map(data,'text').join(', ')

  return element;
}

document.body.appendChild(getSimpleElement());