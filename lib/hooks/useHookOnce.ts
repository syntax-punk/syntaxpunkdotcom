
import { useEffect, useState } from 'react';

/**
 * Hook for running the callback once on mount.
 * @param callback The callback to be invoked on mounting.
 */
export function useHookOnce(callback: (() => void) | (() => Promise<void>)): void {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (!mounted) {
            callback();
            setMounted(true);
        }
    }, [callback, mounted]);
}