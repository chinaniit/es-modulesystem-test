console.log('math.js');
define([
    'math_add'
], function(mathAdd) {
    'use strict';
    return {
        add: mathAdd
    };
});