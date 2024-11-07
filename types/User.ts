export interface User {
    createdAt: string; // ISO date string format
    email: string;
    expired: boolean;
    firstName: string;
    gender: "male" | "female" | "other";
    googleId: string | null;
    id: string; // UUID format
    isActive: boolean;
    isBlock: boolean | null;
    isEmailVerified: boolean;
    lastName: string;
    lastTimePasswordUpdated: string; // ISO date string format
    mustUpdatePassword: boolean;
    password: string; // hashed password
    phoneN: string;
    prefferedCurrency: string;
    prefferedLanguage: string;
    profilePic: string; // URL format
    provider: string | null;
    refreshToken: string | null;
    refreshTokenExpired: string; // ISO date string format
    role: "admin" | "seller" | "user" | "guest"; // Adjust roles as needed
    updatedAt: string; // ISO date string format
    userAddress: UserAddress;
}

interface UserAddress {
    city: string;
    state: string;
    phoneN: string;
    street: string;
    district: string;
    // Add any other fields if necessary
}
