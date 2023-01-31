function load(){
    let msg = document.getElementById('msg')
    let img = document.getElementById('foto')
    let mensagem = document.getElementById('aisatsu')
    let data = new Date()
    let hora = data.getHours()
    //let hora = 
    let min = data.getMinutes()
    if (min <10) {
        min = "0" + min
    } 
    

    if (hora >= 0 && hora < 12) {
        img.src = 'morning.jpg'
        document.body.style.background = '#e2cd9f'
        mensagem.innerHTML = "Bom dia"
    } else if(hora >= 12 && hora < 18) {
        img.src = 'afternoon.jpg'
        document.body.style.background = '#b9846f'
        mensagem.innerHTML = "Boa Tarde"
    } else {
        img.src = 'night.jpg'
        document.body.style.background = '#515154'
        mensagem.innerHTML = "Boa Noite"
    }
    msg.innerHTML = `Agora são ${hora}:${min} horas`
}
