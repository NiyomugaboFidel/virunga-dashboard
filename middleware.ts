import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose';
import cookie from 'cookie';

const secret_key = process.env.NEXT_PUBLIC_JWT_SECRET_KEY;
const domain = process.env.NEXT_PUBLIC_DOMAIN || 'http://localhost:4000';

export async function middleware(request: NextRequest) {

    const cookies = request.headers.get('cookie') ? cookie.parse(request.headers.get('cookie')!) : {};
    const token = cookies.token || request.headers.get('authorization')?.split(' ')[1];

    if (!token) {
        return redirectToSignIn(request);
    }

    try {
        const secret = new TextEncoder().encode(secret_key);
        const verifiedToken = await jwtVerify(token, secret);

        const role = (verifiedToken.payload as any).payload?.role ?? verifiedToken.payload.role;

    
        if (role !== 'admin' && role !== 'seller') {
            return NextResponse.redirect(domain);
        }
    } catch (error) {
        console.error('JWT Verification Error:', error);
        return redirectToSignIn(request);
    }


    return NextResponse.next();
}


function redirectToSignIn(request: NextRequest): NextResponse {
    return NextResponse.redirect(new URL('/auth/boxed-signin', request.url));
}

export const config = {
    matcher: ['/apps/:path*', '/', '/table/:path*','/users/:path*'],
};
