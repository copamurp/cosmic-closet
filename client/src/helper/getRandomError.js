const errors = [
	{
		code: '42x8C7',
		message: 'The dimensional matrix is undergoing destabilization due to an unexpected quantum flux.' +
			' Realigning reality threads, please wait for synchronization to complete.'
	},
	{
		code: '0xAB9D0F',
		message: 'Temporal Anomaly Detected. Initiate cascading data purge to reclaim quantum storage space.'
	},
	{
		code: '500-0xC7FA13',
		message: 'Excessive Tachyon Emission. Memory Address 0x987CFA is emitting an abnormal amount of tachyon particles, causing temporal disturbances.'
	},
	{code: '0x9E1C3B', message: 'Address 0x3B8E57 has encountered a critical anomaly.'},
	{code: '0x1A4F2B', message: 'Quantum dilithium crystal replacement required for faster-than-light travel.'},
]

const getRandomError = () => {
	return errors[Math.floor(Math.random() * errors.length)];
}

export default getRandomError;