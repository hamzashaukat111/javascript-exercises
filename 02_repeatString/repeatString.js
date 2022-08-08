const repeatString = function(word, times) {
if(times<0) return 'ERROR';
let hi = '';
for(let i=0;i<times;i++){
hi+= word;}
return hi;
};

// Do not edit below this line
module.exports = repeatString;
