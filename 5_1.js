let mail = [1,2,3,4,5];
let mailBlacklist = [2,3,5];

function whiteMailList(list, blacklist){
    let WhiteMailList = [];
    for(let i of list){
        for(let j of blacklist){
            if (j != i){
                WhiteMailList.push(i)
            }
            break
        }
    }
    return WhiteMailList
}
    

a = whiteMailList(mail, mailBlacklist)
console.log(a)