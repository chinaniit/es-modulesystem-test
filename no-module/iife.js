var module1 = (function(){
    var _count = 0;
    var m1 = function(){}
    var m2 = function(){}

    return {m1: m1, m2: m2};
});

var instance = module1();
console.log(instance._count);
console.log(instance);
console.log(instance.m1);