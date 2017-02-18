console.log('main.js');
require(['math'], function(math){
    console.log(math.add);
    console.log(math.add(1, 1));

    console.log('main.js');
    let div = document.createElement('div');
    div.innerText = 'hello main.js';
    document.body.appendChild(div);
});