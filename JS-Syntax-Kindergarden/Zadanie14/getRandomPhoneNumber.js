const getRandomPhoneNumber = () => {
	let phoneNumber = ""
	for (let i = 0; i < 9; i++) {
		phoneNumber += Math.floor(Math.random() * 9)
	}

	return phoneNumber
}
