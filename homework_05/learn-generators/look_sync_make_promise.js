const askFoo = () => {
    return new Promise((resolve, reject) => {
        resolve('foo');
    });
}

const run = (generator) => {
    var it = generator();
    
    const go = (result) => {
        if(result.done) {
            return result.value;
        }

        return result.value.then(function (value) {
            return go(it.next(value));
        }, function() {
            return go(it.throw(error));
        });
    }

    go(it.next());
}

run(function* () {
    try {
        var foo = yield askFoo();
        console.log(foo);
    } catch(error) {
        console.log(error);
    }
});