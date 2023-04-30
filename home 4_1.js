function getRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min
  }

  let n = -5;
  let m = 100;
  let count = 100;

  let a = []

  for (let i = 0; i < count; i++){
    a.push(getRandomNumber(n, m))
  }

  console.log(a);


  let brev = ''

  function getReversStr(str){
    for (let i = str.length - 1; i >=0; i--){
        brev += str[i]    }
  }

  getReversStr("aaasss")
  console.log(brev)