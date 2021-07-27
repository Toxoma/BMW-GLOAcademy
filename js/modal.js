import blockScrolled from './blockScrolled.js';
const { disabledScroll, enabledScroll } = blockScrolled

export default function modal() {
    const modalElem = document.querySelector('.modal')
    const designElem = document.querySelector('.design-block')

    const openModal = () => {
        modalElem.classList.remove('hidden')
        disabledScroll()
    }
    const closeModal = () => {
        modalElem.classList.add('hidden')
        enabledScroll()
    }

    designElem.addEventListener('click', e => {
        const target = e.target;
        if (target.matches('.more')) {
            openModal();
        }
    })

    modalElem.addEventListener('click', (e) => {
        const target = e.target
        if (target.matches('.overlay, .modal__close')) {
            closeModal()
        }
    })
}