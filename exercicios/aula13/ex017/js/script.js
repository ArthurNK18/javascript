function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res= window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert(' [ERROR]Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'foto-crianca-masc.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'foto-jovem-masc.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'foto-adulto-masc.png')
            } else {
                // Idoso
                img.setAttribute('src', 'foto-idoso-masc.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'foto-crianca-fem.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'foto-jovem-fem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'foto-adulta-fem.png')
            } else {
                //Idoso
                img.setAttribute('src', 'foto-idosa-fem.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}