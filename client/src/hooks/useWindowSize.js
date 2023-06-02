import {useEffect, useState} from 'react';

function useWindowSize() {
	const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return windowDimensions;
}

function getWindowDimensions() {
	const {innerWidth: width, innerHeight: height} = window;

	return {
		width,
		height
	};
}

export default useWindowSize;