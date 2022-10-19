var b_constraste_branco = document.querySelector('#constraste_branco')

function contrasteParaBranco(){
    var todas = document.querySelectorAll('*')
    todas.forEach(function(tag){
        if (tag.nodeName == 'A') {
            tag.style.backgroundColor = 'black';
            tag.style.color = 'white';
        } else {
            tag.style.backgroundColor = 'white';
            tag.style.color = 'black';
        }
    })
    inicio.style.backgroundColor = '';
}

b_constraste_branco.addEventListener('click', contrasteParaBranco)




var b_constraste_preto = document.querySelector('#constraste_preto')

function contrasteParaPreto(){
    var todas = document.querySelectorAll('*')
    todas.forEach(function(tag){
        console.log(tag.nodeName.toLowerCase());
        if (tag.nodeName.toLowerCase() == 'a') {
            tag.style.backgroundColor = 'white';
            tag.style.color = 'black';
        } else {
            tag.style.backgroundColor = 'black';
            tag.style.color = 'white';
        }
    })
    inicio.style.backgroundColor = '';
}

b_constraste_preto.addEventListener('click', contrasteParaPreto)