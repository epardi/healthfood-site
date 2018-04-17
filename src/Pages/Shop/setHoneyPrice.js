const setHoneyPrice = () => {
	let honeyDiv = document.querySelector('img[src*="honey"]').parentElement
	let previousOldHoneyPrice = document.querySelector('p.old-honey-price')
	let previousSale = document.querySelector('span.sale')
	if (previousOldHoneyPrice)
		previousOldHoneyPrice.parentElement.removeChild(previousOldHoneyPrice)
	let oldHoneyPrice = document.createElement('p')
	oldHoneyPrice.setAttribute('class', 'old-honey-price')
	oldHoneyPrice.innerText = '$11.00'
	honeyDiv.insertAdjacentElement('afterbegin', oldHoneyPrice)
	if (previousSale)
		previousSale.parentElement.removeChild(previousSale)
	let sale = document.createElement('span')
	sale.setAttribute('class', 'sale')
	sale.innerText = 'Sale!'
	honeyDiv.insertAdjacentElement('afterbegin', sale)
}

export default setHoneyPrice