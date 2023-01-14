function verificar(){

    let data = new Date()
    let ano = data.getFullYear()
    let nasc = document.getElementById('txtano')
    let res = document.getElementById('res')
    if (nasc.value.length == 0 || Number(nasc.value) > ano || nasc.value == 0) {
        alert("ERRO! Verifique os dados e tente novamente!")
    } else {
        let idade = ano - nasc.value
        let genero = document.getElementsByName('radsex')
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        let sexo = ''
        if (genero[0].checked) {
            sexo = 'Homem'
            if (idade >= 0 && idade <= 15) {
                img.setAttribute('src','man-child.jpg')
            } else if (idade <= 25) {
                img.setAttribute('src','man-teen.jpg')
            } else if (idade <= 60) {
                img.setAttribute('src','man-adult.jpg')
            } else {
                img.setAttribute('src','man-old.jpg')
            }
        } else if (genero[1].checked) {
            sexo = 'Mulher'
            if (idade >= 0 && idade <= 15) {
                img.setAttribute('src','woman-child.jpg')
            } else if (idade <= 25) {
                img.setAttribute('src','woman-teen.jpg')
            } else if (idade <= 60) {
                img.setAttribute('src','woman-adult.jpg')
            } else {
                img.setAttribute('src','woman-old.jpg')
            }
        }
        
        res.innerHTML = `<p>${sexo} de ${idade} anos de idade.</p>`
        res.appendChild(img)
    } 
}
