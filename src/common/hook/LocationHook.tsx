import { useState, useEffect } from 'react';

export function useUserLocation() {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState<string | null>(null);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser');
      return;
    }

    const handleSuccess = (position : any) => {
      const { latitude, longitude } = position.coords;
      setLocation({ latitude, longitude });
    };

    const handleError = (error : any) => {
      setError(error.message);
    };

    const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError);

    console.log(location);

    // Cleanup function to stop watching the location when the component unmounts
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };

  };

  return { getLocation, location, error };
}

export default useUserLocation;
