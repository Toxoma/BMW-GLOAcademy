export default () => {

    const featureLinkElems = document.querySelectorAll('.feature__link');
    const featureSubElems = document.querySelectorAll('.feature-sub')

    featureLinkElems.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('feature__link_active')) {
                featureSubElems[index].classList.toggle('hidden')
                btn.classList.toggle('feature__link_active')
            } else {
                featureSubElems.forEach((featureSubElem) => {
                    featureSubElem.classList.add('hidden')
                })
                featureLinkElems.forEach((featureLinkElem) => {
                    featureLinkElem.classList.remove('feature__link_active')
                })
                featureSubElems[index].classList.toggle('hidden')
                btn.classList.toggle('feature__link_active')
            }

        })
    })
};


