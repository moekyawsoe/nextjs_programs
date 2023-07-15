import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

const SplashPage = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/website/home');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <Box display="flex" justifyContent="center" alignItems="center" height="100vh" overflow="hidden">
                <img src="/images/logo.png" alt="logo" />
            </Box>
        </div>
    );
}

export default SplashPage;