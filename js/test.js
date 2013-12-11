var changeColors;
var element = $("div.test");

changeColors = setInterval(function() { 
     element.toggleClass('test-trans');
}, 2000);

$(document).ready(changeColors);
