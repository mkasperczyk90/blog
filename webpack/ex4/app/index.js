import _ from 'lodash';
require('./style.css');  
require('./lessstyle.less');   
  
[1, 2, 3].map(n => n ** 2); 
     
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