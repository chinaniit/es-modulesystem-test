var mod = {
    core: function(){}
};
var module1 = (function(innerMod){
    innerMod.m3 = function(){
        console.log('m3');
    };
    return innerMod;
})(mod);
console.log(module1);