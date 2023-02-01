function calc() {
    let a1 = document.getElementById('ia1')
    let an = document.getElementById('ian')
    let r = document.getElementById('ir')
    let res = document.getElementById('res')

    if (a1.value.length == 0 || an.value.length == 0 || r.value.length == 0) {
        res.innerHTML = 'Dados incompletos'
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(a1.value)
        let f = Number(an.value)
        let p = Number(r.value)
        if (p <= 0) {
            alert('Razão inválida. Considerando razão = 1')
            p == 1
        }
        if (i < f) {
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3c1}` 
    }
}