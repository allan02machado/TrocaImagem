var botao = document.getElementById('clique');

botao.onclick = function(){
    if(botao.value === 'troca'){
        pers1.src = './img/Rengoku.jpg';
        botao.value = 'Retornar';
        botao.innerHTML = '戻る (Voltar)';
    }else{
        pers1.src = './img/Tanjiro.jpg';
        botao.value = 'troca';
        botao.innerHTML = '置換 (Trocar)';
    }
}

