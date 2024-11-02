import React, { useState, useEffect } from 'react';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import loginSchema from '@/validations/loginSchema';
import BlankLayout from '@/components/Layouts/BlankLayout';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, selectAuth, clearError } from '@/store/slices/authSlice';
import { useRouter } from 'next/router';
import { AppDispatch, IRootState } from '@/store'; // Update the import path as needed

interface LoginFormInputs {
    email: string;
    password: string;
    rememberMe: boolean;
}

const LoginBoxed = () => {
    const [showPassword, setShowPassword] = useState(false);
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();
    
    // Updated selector to match your store structure
    const { isLoading, error: serverError, isAuthenticated } = useSelector(
        (state: IRootState) => state.authConfig
    );

    const methods = useForm<LoginFormInputs>({
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
    });

    const {
        handleSubmit,
        register,
        formState: { errors },
        setError,
    } = methods;

    useEffect(() => {
        if (isAuthenticated) {
            router.push('/');
        }
        dispatch(clearError());
    }, [isAuthenticated, router, dispatch]);

    const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
        try {
            await dispatch(loginUser(data)).unwrap();
            // Successful login will trigger the useEffect above
        } catch (err: any) {
            setError('root', {
                type: 'server',
                message: err?.message || 'An unexpected error occurred',
            });
        }
    };

    return (
        <div className='w-full h-full min-h-screen justify-center items-center flex'>
            <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-md dark:bg-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white">Welcome Back</h1>
                    <p className="text-gray-600 dark:text-gray-400">Please sign in to your account</p>
                </div>

                {serverError && (
                    <div className="mb-4 rounded border border-red-400 bg-red-100 p-3 text-red-700">
                        {serverError}
                    </div>
                )}

                <FormProvider {...methods}>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email Address
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email')}
                                    className={`block w-full border py-2 pl-10 pr-3 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    } focus:ring-primary-500 focus:border-primary-500 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
                                    placeholder="Enter your email"
                                    aria-describedby={errors.email ? 'email-error' : undefined}
                                />
                            </div>
                            {errors.email && (
                                <p id="email-error" className="mt-1 text-sm text-red-600">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Password
                            </label>
                            <div className="relative">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    id="password"
                                    type={showPassword ? 'text' : 'password'}
                                    {...register('password')}
                                    className={`block w-full border py-2 pl-10 pr-10 ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    } focus:ring-primary-500 focus:border-primary-500 rounded-md shadow-sm dark:border-gray-600 dark:bg-gray-700 dark:text-white`}
                                    placeholder="Enter your password"
                                    aria-describedby={errors.password ? 'password-error' : undefined}
                                />
                                <button
                                    type="button"
                                    className="absolute inset-y-0 right-0 flex items-center pr-3"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Eye className="h-5 w-5 text-gray-400" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p id="password-error" className="mt-1 text-sm text-red-600">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Remember Me Checkbox */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="rememberMe"
                                    type="checkbox"
                                    {...register('rememberMe')}
                                    className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 dark:border-gray-600 dark:bg-gray-700"
                                />
                                <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            <Link
                                href="/forgot-password"
                                className="text-primary-600 hover:text-primary-500 dark:text-primary-400 text-sm font-medium"
                            >
                                Forgot password?
                            </Link>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="dark:bg-primary-500 dark:hover:bg-primary-600 flex w-full justify-center rounded-md border border-transparent bg-Red-100 px-4 py-2 text-sm font-medium text-white shadow-sm outline-none focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            {isLoading ? (
                                <span className="flex items-center">
                                    <svg
                                        className="-ml-1 mr-3 h-5 w-5 animate-spin text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        />
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        />
                                    </svg>
                                    Signing in...
                                </span>
                            ) : (
                                'Sign in'
                            )}
                        </button>
                    </form>
                </FormProvider>
            </div>
        </div>
    );
};

LoginBoxed.getLayout = (page: any) => {
    return <BlankLayout>{page}</BlankLayout>;
};

export default LoginBoxed;