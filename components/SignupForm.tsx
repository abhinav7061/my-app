"use client";
import React from "react";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

export function SignupForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted");
    };
    return (
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black-100">
            <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
                Welcome to My Portfolio
            </h2>
            <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
                Sign Up to connect with me, if you can because we don&apos;t have a login flow yet
            </p>

            <form className="my-8" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
                    <Input
                        id="firstname"
                        placeholder="john"
                        type="text"
                        label="First Name"
                    />
                    <Input
                        id="lastname"
                        placeholder="doe"
                        type="text"
                        label="Last Name"
                    />
                </div>
                <Input
                    id="email"
                    placeholder="yourmail123@mail.domain"
                    type="email"
                    label="Email Address"
                />
                <Input
                    id="password"
                    placeholder="••••••••"
                    type="password"
                    label="Password"
                />
                <Input
                    id="confirm-password"
                    placeholder="••••••••"
                    type="password"
                    label="Confirm Password"
                />
                <button
                    className="mt-8 bg-gradient-to-br relative group/btn from-black dark:from-black-100 dark:to-black-200 to-neutral-600 block dark:bg-black-200 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                    type="submit"
                >
                    Sign up &rarr;
                    <BottomGradient />
                </button>
            </form>
        </div>
    );
}

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
