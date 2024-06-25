"use client";

import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects = [
    {
        num: '01',
        category: 'frontend',
        title: 'project 1',
        description: 'This coffee shop website was develope with the aim of presenting an authentic coffee drinking experience from various local plantations. The main features include a premium coffee catalog, complete menu, delivery service, shop locations, and easy-to-access contact information.',
        stack: [
            { name: 'Html 5' },
            { name: 'Css 3' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/project1.png',
        live: '',
        github: "https://github.com/inimarioal/Kopi-Titik-Kumpul",
    },
    {
        num: '02',
        category: 'frontend',
        title: 'project 2',
        description: 'This beauty clinic website is develope to provide complete information about the aesthetic and skin care services offered by Dee MD. The main feature is an appointment scheduling system that makes it easy for patients to make appointments online.',
        stack: [
            { name: 'Html 5' },
            { name: 'Bootstrap' },
            { name: 'JavaScript' },
        ],
        image: '/assets/work/project2.png',
        live: '',
        github: "https://github.com/inimarioal/DeeMD",
    },
    {
        num: '03',
        category: 'Data Analyst',
        title: 'project 3',
        description: 'This project aims to predict pizza prices based on certain attributes using linear regression techniques. In this analysis, we will use a dataset that contains information about various types of pizza along with attributes such as size, number of toppings, and sales location.',
        stack: [
            { name: 'Python' },
        ],
        image: '/assets/work/project3.png',
        live: '',
        github: "",
    },
    {
        num: '04',
        category: 'full stack',
        title: 'project 3',
        description: 'An e-wallet website that provides a safe and efficient platform for carrying out financial transactions, from user registration to digital banking services.',
        stack: [
            { name: 'Node.js' },
            { name: 'JavaScript' },
            { name: 'Laravel' },
        ],
        image: '/assets/work/project4.png',
        live: '',
        github: "",
    },
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleSlideChange = (swiper) => {
        const currenIndex = swiper.activeIndex;
        setProject(projects[currenIndex]);
    }

    if (!isClient) {
        return null; // Return null on the server to avoid mismatch
    }

    return (
        <motion.section 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1, transition: { delay: 0.4, duration: 0.4, ease: 'easeIn' } }} 
            className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
                    <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
                        <div className='text-justify flex flex-col gap-[30px] h-[50%]'>
                            <div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
                                {project.num}
                            </div>
                            <h2 className='text-[42px] font-bold leading-none text-white capitalize'>
                                {project.category} project
                            </h2>
                            <p className='text-white/60'>
                                {project.description}
                            </p>
                            <ul className='flex gap-4'>
                                {project.stack.map((item, index) => (
                                    <li key={index} className='text-xl text-accent'>
                                        {item.name}
                                        {index !== project.stack.length - 1 && ','}
                                    </li>
                                ))}
                            </ul>
                            <div className='border border-white/20'></div>
                            <div className='flex items-center gap-4'>
                                <Link href={project.live} target='_blank'>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github} target='_blank'>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                                                <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Github repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[50%]'>
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className='xl:h-[520px] mb-12'
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className='w-full'>
                                    <div className='flex justify-center items-center'>
                                        <div className='relative w-full h-[1080px]'>
                                            <Image src={project.image} width={1080} height={1080} className='object-contain' alt={project.title} />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            <WorkSliderBtns 
                                containerStyles='flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none' 
                                btnStyles='bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all' 
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Work;
