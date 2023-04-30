let objects = [
    { name: 'Василий', surname: 'Васильев' },
    { name: 'Иван', surname: 'Иванов' },
    { name: 'Пётр', surname: 'Петров' }
    ]
    
    function fn(obj, key, value) {
        let res = [];

        for (let object of obj){
            if (object[key]===value){
                res.push(object)
            }
        }
        return res
    }
    let result = fn(objects, 'name', 'Иван');
    console.log(result)
    