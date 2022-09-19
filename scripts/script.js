var ovals = [
	{
		value: 1,
		items: [
			{
				name: 'Stefan van der Kort',
				pageUrl: 'https://stefan-vdkort.student.fdnd.nl',
				imgUrl: '../assets/squad-c/stefan-van-der-kort.jpg',
				style: 'animation-delay: 0s;'
			},
			{
				name: 'Amber van der Reijden',
				pageUrl: '',
				imgUrl: '../assets/squad-c/amber-vd-reijden.jpg',
				style: 'animation-delay: -15s;'
			},
			{
				name: '',
				pageUrl: '',
				imgUrl: '',
				style: ''
			},
		]
	},
	{
		value: 2,
		items: [
			{
				name: 'Stefan van der Kort',
				pageUrl: 'https://stefan-vdkort.student.fdnd.nl',
				imgUrl: '../assets/squad-c/stefan-van-der-kort.jpg',
				style: 'animation-delay: 0s;'
			},
			{
				name: 'Amber van der Reijden',
				pageUrl: '',
				imgUrl: '../assets/squad-c/amber-vd-reijden.jpg',
				style: 'animation-delay: -15s;'
			},
			{
				name: '',
				pageUrl: '',
				imgUrl: '',
				style: ''
			},
		]
	}

]

/**
 * Builds universe based on list
 */
function buildUniverse() {
	const ovalsElement = document.getElementById('ovals')
	ovals.forEach((item) => {
		const ovalElement = getParentElement(item)

		ovalsElement.appendChild(ovalElement)
	})
}

/**
 * Builds & returns html elements
 */
function getParentElement(item) {
	const parent = document.createElement('div')
	parent.id = `oval-${item.value}`
	parent.classList.add('oval', `oval-${item.value}`)
	const child = document.createElement('div')
	child.classList.add('carousel')
	item.items.forEach((subItem) => child.appendChild(getChildren(subItem)))
	parent.appendChild(child)
	return parent
}

/**
 * Builds & returns html element
 */
function getChildren(item) {
	const a = document.createElement('a')
	a.href = item.pageUrl
	a.style = item.style
	a.classList.add('carousel__item')
	const img = document.createElement('img')
	img.src = item.imgUrl
	img.alt = item.name
	const p = document.createElement('p')
	p.innerText = item.name
	a.appendChild(img)
	a.appendChild(p)
	return a
}