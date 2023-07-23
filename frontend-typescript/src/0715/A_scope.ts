// function alwaysThrow(): never{
//     throw new Error("I am wicked function!")
// }

function scopeExample() {
    var abc = 123;
    if(true){
        var abc = 456;
    }
    console.log(abc)
}
scopeExample();

function hoistingEx2() {
    var bar;
    console.log(bar)
    bar = 123;
}
hoistingEx2();

{
    let goOut = true;
    if( goOut = true){
        let goOut = false
    }
    console.log(goOut);
    goOut = false;
    console.log(goOut)

}

const notAble = 3;

const arr = [1, 2]

arr.push(3)

console.log(arr)

const obj = {a : 2}
obj.a = 3;
console.log(obj)