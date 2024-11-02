import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { IRootState } from '../../store/index';
import LoginBoxed from '@/pages/auth/boxed-signin';

// AuthProvider component for checking authentication and handling redirection
const AuthProvider = ({ children }: { children: ReactNode }) => {
    const isAuthenticated = useSelector((state: IRootState) => state.authConfig.isAuthenticated);
    const router = useRouter();
    const [isCheckingAuth, setIsCheckingAuth] = useState(true); // Loading state for auth check

    useEffect(() => {
        // Check for token in localStorage or sessionStorage
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        if (!isAuthenticated && !token) {
            router.push('/auth/boxed-signin');
        } else {
            setIsCheckingAuth(false); 
        }
    }, [isAuthenticated, router]);

    
    if (isCheckingAuth) return <LoginBoxed />
    return <>{children}</>;
};

export default AuthProvider;
