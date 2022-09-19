addEventListener('load', (event) => {
	getFooter()
})

function getFooter() {
	const year = new Date().getFullYear()
	const footer = document.getElementById('root-footer')
	footer.innerText = `© ${year} · Team Testmilu`
}