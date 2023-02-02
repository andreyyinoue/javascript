function showtab() {
    let num = document.getElementById('inum')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('ERRO! Digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = " "
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${c*n}`
            tab.appendChild(item)
            c++
        }
    }
     
}