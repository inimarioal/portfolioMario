"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from 'next/link';
import { Description } from '@radix-ui/react-dialog';

const services = [
    {
        num: '01',
        title: 'Web development',
        description: 'Web development involves designing, building, and maintaining websites or web applications. It includes backend (server-side), frontend (client-side) development, system integration, and testing. The goal is to create a seamless user experience, enhance customer interaction, and meet business needs. Effective development ensures responsive design, robust security, and scalability across devices and platforms.',
        href: ''
    },
    {
        num: '02',
        title: 'Quality Assurance',
        description: 'Quality Assurance (QA) ensures software meets requirements and functions reliably. Automation testing uses tools for efficient execution, while manual testing relies on human exploration of functionality and interfaces. Both aim to find bugs and enhance user experience before release. QA involves test planning, design, execution, and defect tracking, ensuring software is delivered with minimal defects and high user satisfaction.',
        href: ''
    },
    {
        num: '03',
        title: 'Data Analysis Support',
        description: 'Data Analysis involves inspecting, cleansing, transforming, and modeling data to discover useful information, draw conclusions, and support decision-making. It encompasses statistical analysis, data visualization, and predictive modeling to interpret complex data sets. The goal is to identify patterns, trends, and correlations that can inform business strategies. Effective data analysis ensures accurate insights, helping organizations make data-driven decisions, optimize operations, and achieve their objectives.',
        href: ''
    },
];

import { motion } from 'framer-motion';

const Services = () => {
    return (
        <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
            <div className="container mx-auto">
                <motion.div 
                initial={{opacity: 0}} 
                animate={{
                    opacity: 1, 
                    transition: {
                        delay: 2.4, 
                        duration: 0.4, 
                        ease:'easeIn'},
                        }}
                        className = "grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map((service, index) => {
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            {/* top */}
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>{service.num}</div>
                                <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45' >
                                <BsArrowDownRight className='text-primary text-3xl'/>
                                </Link>
                            </div>
                            {/* title */}
                            <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>{service.title}</h2>
                            {/* description */}
                            <p className='text-white/60 text-justify'>{service.description}</p>
                            {/* border */}
                            <div className='border-b border-white/20 w-full'></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    );
};

export default Services