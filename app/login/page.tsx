"use client"

import HeroSpotlights from '@/components/HeroSpotlights';
import { LoginForm } from '@/components/LoginForm';
import { SignupForm } from '@/components/SignupForm'
import Template from '@/components/Template';
import { Tabs } from '@/components/ui/tabs';
import React, { useState } from 'react'

export default function Login() {
    const [selectedTab, setSelectedTab] = useState('login')
    const tabs = [
        {
            title: "Login",
            value: "login",
            content: (<Template title='Login' form={<LoginForm />} />),
        },
        {
            title: "Signup",
            value: "signup",
            content: (<Template title="Signup" form={<SignupForm />} />),
        },
    ];

    return (
        <>
            <HeroSpotlights />
            <div className={`${selectedTab == "login" ? 'h-[38rem]' : 'h-[55rem] md:h-[50rem]'} [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-28 mb-10 xl:mb-40`}>
                <Tabs tabs={tabs} setSelectedTab={(item) => setSelectedTab(item)} />
            </div>
        </>
    );
}
