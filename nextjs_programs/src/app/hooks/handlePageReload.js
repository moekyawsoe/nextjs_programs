import React, { useEffect, useState } from 'react';
import { useRouter, Router } from 'next/router';
import SplashPage from '../../pages/splash';

const usePageReload = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      setIsLoading(true);
    };

    const handleComplete = () => {
      setIsLoading(false);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, []);

  if (isLoading) {
    return(
      <div>Hello</div>
    );
  }
  return <div>Home Page</div>;
};
  
export default usePageReload;