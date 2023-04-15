function tabuada(){
    let num = window.document.getElementById('num')
    let end = window.document.getElementById('end')
    let n = Number(num.value)
    let e = Number(end.value)
    if (n == '' || e == ''){
        window.alert('Preencha os campos')
    }else{
    let x = 0
    let r = ''

    let res = window.document.getElementById('resposta')
    res.innerHTML=`A Tabuada do ${n} é:<br> `
    do{
       r = n*x
       res.innerHTML+=`${x}x ${n} = ${r} <br>`
       x++
    } while(x <= e)
}

}