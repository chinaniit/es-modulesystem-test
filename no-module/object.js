var module1 = new Object({
    _count: 0,
    m1:function(){},
    m2:function(){}
});

module1.m1();
module1._count = 5;

console.log(module1);

