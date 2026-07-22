const btn = document.querySelector('.btn');
const textToCopy = document.querySelector('.textToCopy');

btn.addEventListener('click', copyText);

function copyText(e){
    e.preventDefault();

    navigator.clipboard.writeText(textToCopy.value)
    .then( () => {
        btn.textContent = "Copiado!";

        setTimeout( () => {
            btn.textContent = "Copiar";
        }, 3000)
    });
}