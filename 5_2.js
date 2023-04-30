function finalSumm(sum, coast, promo = null) {
    let sum1 = sum;
    let count = coast;
    let promo_final = 0;
    if (promo === 'ДАРИМ300'){
        promo_final += 300;
    }
    if (count >= 10){
        promo_final += sum1 - (sum1/100*5); 
    }
    if (sum1 > 50000){
        promo_final += (sum1 - 50000)/100*20;
    }
    if (promo === 'СКИДКА15' && sum1 >= 20000){
        promo_final += sum1 - (sum1/100*15); 
    }
    let fsum = sum1 - promo_final;
    return fsum
}

a = finalSumm(51000, 9, 'ДАРИМ300')
console.log(a)