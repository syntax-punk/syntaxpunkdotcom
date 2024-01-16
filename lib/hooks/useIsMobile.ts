

import { useEffect, useState } from 'react';

/**
 * Hook for checking if page is loaded from mobile device.
 * @returns boolean true if on mobile.
 */
export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(function onMount() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // true for mobile device
            setIsMobile(true);
        } else {
            // false for not mobile device
            setIsMobile(false);
        }
    }, []);

    return isMobile;
}