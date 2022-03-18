const commentPopup = document.querySelector('.popup-section')

const header = document.querySelector('#header')
const main = document.querySelector('main')
const footer = document.querySelector('footer')

export const openPopup = () => {
	header.style.display = 'none'
	main.style.display = 'none'
	footer.style.display = 'none'
	commentPopup.style.display = 'block'
}

export const closePopup = () => {
	header.style.display = 'block'
	main.style.display = 'block'
	footer.style.display = 'block'
	commentPopup.style.display = 'none'
}
