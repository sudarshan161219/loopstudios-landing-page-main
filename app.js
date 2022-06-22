const open = document.querySelector('.open');
const close = document.querySelector('.close');

const sidebar = document.querySelector('.sidebar')


open.addEventListener("click", () => {
sidebar.classList.add('show-sidebar')

close.addEventListener("click", () => {
    sidebar.classList.remove('show-sidebar')

})

})