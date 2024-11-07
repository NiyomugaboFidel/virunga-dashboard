// // auth.js
// import { jwtVerify } from 'jose';

// export async function decodeToken(token:string) {
//   const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET_KEY);
  
//   try {
//     const { payload } = await jwtVerify(token, secret);
//     return payload; // This will contain the decoded JWT payload
//   } catch (error) {
//     console.error("Token verification failed:", error);
//     return null;
//   }
// }

// export async function getUserRole() {
//   const token = sessionStorage.getItem('token') || localStorage.getItem('token');
//   if (!token) return null;

//   const payload = await decodeToken(token);
//   return payload ? payload.role : null; // assuming the payload has a `role` field
// }
