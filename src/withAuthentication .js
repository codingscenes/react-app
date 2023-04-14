import React, { useState, useEffect } from "react";

const withAuthentication = (WrappedComponent) => {

    return (props) => {

        const [isAuthenticated, setIsAuthenticated] = useState(false);

        useEffect(() => {
            // Simulate checking if user is authenticated
            setTimeout(() => {
                setIsAuthenticated(true);
            }, 2000);
        }, []);

        if (!isAuthenticated) {
            return <div>Wait. Logging you back</div>;
        }

        return <WrappedComponent {...props} />;

    }


}

export default withAuthentication;