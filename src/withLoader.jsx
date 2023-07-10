import React, { useState, useEffect } from 'react';

const withLoader = (WrappedComponent) => {
    const WithLoader = (props) => {
        const [loading, setLoading] = useState(true);
        const [offline, setOffline] = useState(!navigator.onLine);

        useEffect(() => {
            // Simulate an asynchronous operation
            setTimeout(() => {
                setLoading(false);
            }, 2000);

            const handleOnline = () => setOffline(false);
            const handleOffline = () => setOffline(true);

            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);

            return () => {
                window.removeEventListener('online', handleOnline);
                window.removeEventListener('offline', handleOffline);
            };
        }, []);

        if (offline) {
            return <div>Connect to Internet</div>;
        }

        return <WrappedComponent loading={loading} {...props} />;
    };

    return WithLoader;
};

export default withLoader;