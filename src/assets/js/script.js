const inputName = document.querySelector('#inputName');
const inputId = document.querySelector('#inputId');

// Lista dos Botões 'Cotribua Agora'
const donateBtnList = document.querySelectorAll('#donateBtn');

donateBtnList.forEach(item => {
    item.addEventListener('click', (e) => {
        const cardNameElement = item.parentNode.querySelector("div");

        inputName.value = cardNameElement.childNodes[1].textContent;
        inputId.value = cardNameElement.querySelector(".card-id").childNodes[1].innerHTML;
    })
})