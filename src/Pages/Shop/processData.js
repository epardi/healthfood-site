const processData = (shopItems, sortedItems) => {
	let newShopItems = []
	let totalKeys = shopItems.map(item => Object.keys(item))
	let shopItemKeys = new Set([].concat(...totalKeys))
		for (let key of shopItemKeys) {
			if (shopItems.every(item => typeof item[key] === 'string'))
				newShopItems = shopItems.sort( (a, b) => a[key].localeCompare(b[key]) )
			else if (shopItems.every(item => typeof item[key] === 'number'))
				newShopItems = shopItems.sort( (a, b) => a[key] - b[key] )
			sortedItems[key] = newShopItems.map((item, index) => {
				return shopItems[index]
			})
		}
}

export default processData