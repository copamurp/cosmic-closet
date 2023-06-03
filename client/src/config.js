const BASE_URL = "http://localhost:3005/";

const NETWORK_STATUS = {
	DEFAULT: {
		code: 0,
		description: 'Default'
	},
	GOOD: {
		code: 1,
		description: 'Good'
	},
	FAULT: {
		code: -1,
		description: 'Bad'
	}
}

module.exports = {
	BASE_URL,
	NETWORK_STATUS
}