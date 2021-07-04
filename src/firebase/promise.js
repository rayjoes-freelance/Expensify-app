const promise =  new Promise((res, rej) => {
    setTimeout(() => {
        res('this is my resolve data');
    }, 1500)
});

console.log('before');
promise.then( (data) => {
    console.log(data)
});
console.log('after');