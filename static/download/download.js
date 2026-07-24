const btn = document.querySelector('.btn-copy');
const textToCopy = document.querySelector('.textToCopy');

btn.addEventListener('click', copyText);

function copyText(e){
    e.preventDefault();

    navigator.clipboard.writeText(textToCopy.value)
    .then( () => {
        btn.textContent = "Copiado!";
        btn.classList.remove("btn-outline-secondary")
        btn.classList.add("btn-success")

        setTimeout( () => {
            btn.textContent = "Copiar link";
            btn.classList.remove("btn-success")
            btn.classList.add("btn-outline-secondary")
        }, 3000)
    });
}