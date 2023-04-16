function key_out(object) {
    for(let i in object){
        if(object.hasOwnProperty(i)){
            console.log(i, object[i])
        }
    }
}

function name_in(string, object) {
    return (string in object)
}


function new_obj() {
    return Object.create(null)
}