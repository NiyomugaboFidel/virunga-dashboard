import { jwtVerify } from "jose";
import Cookies from "js-cookie";

const secret_key = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
let cachedUser: any | null = null;
let cachedToken: string | null = null;

const verifyToken = async () => {
    const token = localStorage.getItem('token') || Cookies.get('token') || sessionStorage.getItem('token');

    // Avoid re-verifying if token hasn't changed and user is already cached
    if (token === cachedToken && cachedUser) {
        return cachedUser;
    }

    if (!token) {
        console.log('No token found');
        return null;
    }

    try {
        const secret = new TextEncoder().encode(secret_key);
        const verifiedToken = await jwtVerify(token, secret);
        const role = (verifiedToken.payload as any).payload?.role ?? verifiedToken.payload.role;
        const user = (verifiedToken.payload as any).payload ?? verifiedToken.payload;
        
        if (role !== 'admin' && role !== 'seller') {
            console.log('User is not authorized');
            return null;
        }

        // Cache the user and token
        cachedUser = user;
        cachedToken = token;

        return user;
    } catch (error) {
        console.error('JWT Verification Error:', error);
        return null;
    }
};

export default verifyToken;
