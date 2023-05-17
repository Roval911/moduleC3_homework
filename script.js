
    let div = document.getElementById("count")
    let inter = document.getElementById("inp")
    let button = document.getElementById("but")
    let time;

    button.addEventListener("click", function(){
        time = parseInt(inter.value);
    })

    let timer = setInterval(function(){
        if (time <= 0){
            clearInterval(timer);
        } else {
            let strtime = `${time}`
            div.innerHTML = strtime
        }
        -- time;
    }, 1000)
    

