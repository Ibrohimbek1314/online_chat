const username = window.localStorage.getItem('username')
const img = window.localStorage.getItem('img')

if(username && img) window.location = '/'

form.onsubmit = async event => {
	event.preventDefault()

	if(!usernameInput.value || !fileInput.files[0]) return

	let formData = new FormData()

	formData.append('file', fileInput.files[0])
	formData.append('username', usernameInput.value)

	let response = await fetch('/login', {
		method: 'POST',
		body: formData
	})

	response = await response.json()

	window.localStorage.setItem('username', response.username)
	window.localStorage.setItem('img', response.imgPath)
	window.location = '/'
}