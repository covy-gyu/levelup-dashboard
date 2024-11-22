'use client'

import React, { useState, useEffect } from 'react';
import { UserPlusIcon, AtSymbolIcon, KeyIcon, ExclamationCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import { Button } from "@/ui/component/button";
import { useFormState, useFormStatus } from "react-dom";
import { signUp } from "@/backend/account-actions";

export default function signUpForm() {
    // 상태 관리
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessage, dispatch] = useFormState(signUp, undefined);

    // 비밀번호 일치 확인
    useEffect(() => {
        if (password !== confirmPassword && confirmPassword !== '') {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    }, [password, confirmPassword]);

    return (
        <form action={dispatch} className='space-y-3'>
            <div className='flex-1 px-6 pt-8 pb-4 rounded-lg bg-gray-50'>
                <h1 className='mb-3 text-2xl'>회원가입</h1>
                <div className='w-full'>

                    {/* 입력 필드들 (이름, 이메일, 비밀번호, 비밀번호 확인) */}

                    {/* 각 입력 필드는 레이블과 아이콘을 포함 */}

                    {/* Name Input */}

                    {/* ... 이름 입력 필드 ... */}

                    {/* Email Input */}

                    {/* ... 이메일 입력 필드 ... */}

                    {/* Password Input */}

                    {/* 비밀번호 입력 필드 */}

                    {/* Confirm Password Input */}

                    {/* ... 비밀번호 확인 입력 필드 ... */}

                    {/* 비밀번호 불일치 오류 메시지 */}
                    {passwordError && <div className='mt-2 text-sm text-red-500'>{passwordError}</div>}
                </div>

                {/* 회원가입 버튼 */}
                <SignUpButton />
                {/* 폼 제출 오류 메시지 */}
                {errorMessage && (
                    <>
                        <ExclamationCircleIcon className='w-5 h-5 text-red-500' />
                        <p className='text-sm text-red-500'>{errorMessage}</p>
                    </>
                )}
            </div>
        </form>
    );
}

function SignUpButton() {
    const { pending } = useFormStatus();
    return (
        <Button className='w-full mt-4' aria-disabled={pending}>
            회원가입 <UserPlusIcon className='w-5 h-5 ml-auto text-gray-50' />
        </Button>
    )
}