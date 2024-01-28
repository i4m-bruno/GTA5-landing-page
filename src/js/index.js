const btnPlatforms = document.querySelector('.btn-platforms');
const platforms = document.querySelector('.btn-platforms .platforms');

btnPlatforms.addEventListener("click", () => {
    platforms.classList.toggle("ativo");
})