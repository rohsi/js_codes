
function getsplice(input){

    input.splice(1,2,"e", "F");
    return input
}
console.log(getsplice(['a','b','c','d']));