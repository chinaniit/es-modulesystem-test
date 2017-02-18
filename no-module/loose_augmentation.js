var mod;
console.log(mod);
var module1 = (function(innerMod){
    innerMod.m3 = function(){
        console.log('m3');
    };
    return innerMod;
})(mod || {});
console.log(module1);
console.log(mod);