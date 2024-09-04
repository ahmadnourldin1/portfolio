import { useEffect, useState } from "react";

export const useBreakpoint = () => {
    const [breakpoints, setBreakpoints] = useState({
        isMobile: false,
        isTablet: false,
        isDesktop: false
    });

    useEffect(() => {
        const handleResize = () => {
            setBreakpoints({
                isMobile: window.innerWidth < 640,
                isTablet: window.innerWidth >= 640 && window.innerWidth < 1024,
                isDesktop: window.innerWidth >= 1024
            });
        }
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return breakpoints
}