

import { useHookOnce } from './useHookOnce';
import { useState } from 'react';

/**
 * Hook for checking if page is loaded from mobile device.
 * @returns boolean true if on mobile.
 */
export function useIsMobileOnce(): boolean {
    const [isMobile, setIsMobile] = useState(false);

    useHookOnce(() => {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            // true for mobile device
            setIsMobile(true);
        } else {
            // false for not mobile device
            setIsMobile(false);
        }
    });

    return isMobile;
}