import { useCallback, useEffect, useState } from "react";

export function useStatistics() {
  const statsEndpoint = 'https://simplistics.fly.dev';
  const isBrowser = typeof window !== 'undefined';
  const hostName = isBrowser ? window.location.hostname : '';
  let path = isBrowser ?  window.location.pathname : '/';
  path = path.split('/').pop() || 'home';
  
  const [count, setCount] = useState<number | null>(null);

  const postTrackEvent = useCallback(async () => {
    const result = await fetch(`${statsEndpoint}/track`, {

      body: JSON.stringify({
        hostName,
        path,
      }),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((err) => console.error("[track err]: ", err));

    return result;
  }, [hostName, path])

  function fetchCountStatistics() {
    fetch(`${statsEndpoint}/count/${hostName}/${path}`)
      .then((res) => res.json())
      .then((data) => { 
        setCount(data.count);
       });
  }

  useEffect(() => {
    if (!isBrowser || !hostName) return;

    postTrackEvent().then(
      fetchCountStatistics
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return count;
}