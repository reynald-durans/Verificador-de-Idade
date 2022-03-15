function verificar () {

    var data = new Date();
    var ano = data.getFullYear();
    var fano = window.document.querySelector('input#txtano');
    var res = window.document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var gênero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            gênero = 'Homem';
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebemenino.png');
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemhomem.png');
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultohomem.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosohomem.png');
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher';
            if (idade >=0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebemenina.png');
            } else if (idade <= 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jovemmulher.png');
            } else if (idade <= 50) {
                // Adulto
                img.setAttribute('src', 'imagens/adultamulher.png');
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idosamulher.png');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`;
        res.appendChild(img);
    }

}