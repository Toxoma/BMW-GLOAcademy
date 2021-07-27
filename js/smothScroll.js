function smothScroll() {
    const smothScrollEllems = document.querySelectorAll('a[href^="#"]:not(a[href="#"])');
    smothScrollEllems.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault()
            const id = link.getAttribute('href').substring(1)
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            })
        })
    })
}
export default smothScroll;