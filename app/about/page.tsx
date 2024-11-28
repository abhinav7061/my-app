import { ThreeDCard } from '@/components/3DImage';
import Grid from '@/components/Grid';
import HeroSpotlights from '@/components/HeroSpotlights';
import MagicButton from '@/components/MagicButton';
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import React from 'react';
import { RiHandCoinLine } from 'react-icons/ri';


const About = () => {
    return (
        <div className="pt-28">
            <HeroSpotlights />
            <div className="flex justify-between flex-col md:flex-row">
                <div className="flex-grow">
                    <div
                        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
               absolute top-0 left-0 flex items-center justify-center"
                    >
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
                 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                        />
                    </div>

                    <div className="flex justify-center relative my-20 z-10">
                        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col">
                            <p className="uppercase tracking-widest text-xs text-blue-100">
                                Specialize in developing clean, responsive, and accessible designs, backed by robust frameworks.
                            </p>
                            <TextGenerateEffect
                                words="My name is Abhinav Kumar. I turn ideas into reality."
                                className="text-[40px] md:text-5xl lg:text-6xl leading-normal"
                            />
                            <p className="md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl">
                                I&apos;m a software engineer with strong problem-solving skills, specializing in creating exceptional digital experiences. With expertise in both front-end and back-end development, I work with a diverse range of technologies. I enjoy solving challenging projects that drive innovation and deliver high-quality results. I am excited to contribute to dynamic projects that push the boundaries of technology.
                            </p>
                            <a href="#about" className='w-min'>
                                <MagicButton
                                    title="Hire Me"
                                    icon={<RiHandCoinLine />}
                                    position="right"
                                    className="h-12 w-60 md:mt-10"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <ThreeDCard />
            </div>
            <Grid />
        </div>
    )
}

export default About