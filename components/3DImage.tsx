"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import MagicButton from "./MagicButton";
import { FaDownload } from "react-icons/fa6";

export function ThreeDCard() {
    return (
        <CardContainer className="inter-var z-50">
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-blue-950/30 dark:border-white/[0.2] border-black/[0.1] w-auto md:w-[20rem] lg:w-[25rem] h-auto rounded-xl p-6 border  ">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    Passionate about
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    Full Stack Development | Problem Solving | Innovation
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="http://res.cloudinary.com/djyzgjojr/image/upload/c_auto,f_auto,g_auto,h_500,q_auto,w_500/v1727554679/Polling/profile_images/65465220b4b8929cb532e583_lxum6b"
                        height="1000"
                        width="1000"
                        className="h-80 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-between items-center mt-10 z-40">
                    <CardItem
                        translateZ={20}
                        as={Link}
                        href="/resume.pdf"
                        target="__blank"
                        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                        <MagicButton title="Resume" icon={<FaDownload />} className="h-9 md:w-40 " />
                    </CardItem>
                    <CardItem
                        translateZ={20}
                        as="button"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                    >
                        Collaborate
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
