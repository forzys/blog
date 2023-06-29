


import { useEffect, useState } from "react";
 
/**
 * useFullScreen
 * 
 */

export function useFullScreen () {
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEffect(() => {
		const handleFullscreenChange = () => {
			setIsFullscreen(!!document.fullscreenElement);
		};
		document.addEventListener('fullscreenchange', handleFullscreenChange);

		return () => {
			document.removeEventListener('fullscreenchange', handleFullscreenChange);
		};
	}, []);

	const toggleFullscreen = () => {
		if (isFullscreen) {
			document.exitFullscreen();
		} else {
			document.documentElement.requestFullscreen();
		}
	};

  	return [isFullscreen, toggleFullscreen];
}
