"use client";

import {FaBootstrap, FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaJira, FaPython} from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMysql, SiGooglebigquery, SiTableau } from 'react-icons/si';

// about data
const about = {
    title: 'About me',
    description: 'I am a passionate and dedicated developer with a strong background in front-end development and IT solutions. I have honed my technical skills and problem-solving abilities through various projects and am eager to apply my knowledge to create innovative digital experiences. I am also open to exploring opportunities as a data engineer, where I can utilize my analytical skills and interest in data to drive impactful solutions in the tech industry.',
    info: [
        {
            fieldName: 'Name',
            fieldValue: "Mario Al Qadr",
        },
        {
            fieldName: 'Phone',
            fieldValue: "(+62) 812 9050 6611",
        },
        // {
        //     fieldName: 'Experience',
        //     fieldValue: "1 Year (Fresh Graduate)",
        // },
        {
            fieldName: 'Nationality',
            fieldValue: "Indonesia",
        },
        {
            fieldName: 'Email',
            fieldValue: "marioalqadr@gmail.com",
        },
        {
            fieldName: 'Freelance',
            fieldValue: "Available",
        },
        {
            fieldName: 'Language',
            fieldValue: "Indonesia, English",
        },
    ]
};

// experience data
const experience = {
    icon: '/assets/resume.svg', //ini blm
    title: 'My experience',
    description: 'With a strong background in front-end development and IT solutions, I have successfully contributed to dynamic web applications and innovative IT projects. My diverse experience has sharpened my technical skills and problem-solving abilities, preparing me to excel in the tech industry.',
    items: [
        {
            company: 'Freelance Project',
            position: 'AI Engineer',
            duration: 'July - October 2024',
        },
        {
            company: 'Sifa Aplikasi Indonesia',
            position: 'Front-end Developer',
            duration: 'March 2023 - March 2024',
        },
        {
            company: 'Pertamina Internasional EP',
            position: 'IT Solution',
            duration: 'March - September 2022',
        },
    ],
};
// education data
const education = {
    icon: '/assets/resume/', // ini blm
    title: 'My education',
    description: 'My academic journey has equipped me with valuable knowledge and skills, preparing me for challenges in my field.',
    items: [
        {
            institution: "Esa Unggul University",
            degree: "Bachelor of Computer Science",
            duration: "2019 - 2023",
            grades: "GPA: 3.55",
        },
    ],
};
// training experience data
const training = {
    icon: '/assets/resume/',
    title: 'My training experience',
    description: 'After graduating from college, I pursued several online courses to upgrade my skills, deepen my understanding across various fields, expand my practical knowledge, and prepare myself for new career challenges.',
    items: [
        {
            company: 'BuildWithAngga',
            position: 'Data Scientist for Beginners: Linear Regression Analysis',
            duration: 'Februari 2024',
        },
        {
            company: 'Rakamin Academy',
            position: "Python Programming Essentials: A Beginner's Guide",
            duration: 'November 2023',
        },
        {
            company: 'RevoU',
            position: 'Intro to Data Analytics',
            duration: 'November 2023',
        },
    ],
};
// lisence & certificate  data
const certificate = {
    icon: '/assets/resume/',
    title: 'My lisence & certificate',
    description: 'I have successfully obtained a certificate, demonstrating my proficiency and completion of specialized training in a specific field.',
    items: [
        {
            title: 'Software Quality Assurance',
            company: 'Indonesian Profesional Certification Authority',
            duration: 'February 2024 (3 Years)',
        },
    ],
};
// organization data
const organization = {
    icon: '/assets/resume/',
    title: 'My organization',
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, perspiciatis.',
    items: [
        {
            company: 'Student Executive Board',
            position: 'Vice Chairman',
            duration: 'March 2022 - February 2023',
        },
        {
            company: 'Informatics Engineering Student Association',
            position: 'Vice Chairman',
            duration: 'Novemebr 2020 - February 2022',
        },
    ],
};
// skills data
const skills = {
    title: "My skills",
    description: "I possess a well-rounded set of skills in web development and IT solutions, enabling me to create efficient and innovative digital products",
    skillList:[
        {
            icon: <FaHtml5 />,
            name: "html 5",
        },
        {
            icon: <FaCss3 />,
            name: "css 3",
        },
        {
            icon: <FaReact />,
            name: "react",
        },
        {
            icon: <FaJs />,
            name: "javascript",
        },
        {
            icon: <FaPython />,
            name: "python",
        },
        {
            icon: <FaNodeJs />,
            name: "node.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "next.js",
        },
        {
            icon: <SiTailwindcss/>,
            name: "taildwind css",
        },
        {
            icon: <FaBootstrap />,
            name: "bootstrap",
        },
        {
            icon: <FaFigma />,
            name: "figma",
        },
        {
            icon: <FaJira />,
            name: "jira",
        },
        {
            icon: <SiMysql />,
            name: "mySql",
        },
        {
            icon: <SiGooglebigquery />,
            name: "google BigQuery",
        },
        {
            icon: <SiTableau />,
            name: "tableau",
        },
    ]
}

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 

import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div 
        initial={{opacity: 0}} 
        animate={{
            opacity: 1, 
            transition: {delay: 2.4, duration: 0.4, ease: 'easeIn'},
        }}

        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px]'>
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="training">Training</TabsTrigger>
                        <TabsTrigger value="certificate">Certificate</TabsTrigger>
                        <TabsTrigger value="organization">Organization</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About me</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className='min-h-[70vh] w-full'>
                        {/* experience */}
                        <TabsContent value="experience" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{experience.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{experience.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {experience.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) => (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree}</h3>
                                                <p className='text-white/60'>{item.grades}</p>                                             
                                                <div className='flex items-center gap-3'>
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* training */}
                        <TabsContent value="training" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{training.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{training.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 gap-[30px]'>
                                        {training.items.map((item, index) => (
                                            <li key={index} className='bg-[#232329] py-6 px-10 rounded-xl'>
                                                <div className='flex items-center justify-between mb-4'>
                                                <div>
                                                    <h3 className='text-xl text-white'>{item.position}</h3>
                                                    <p className='text-lg text-accent mt-3'>{item.company}</p>
                                                    </div>
                                                    <span className='text-accent whitespace-nowrap'>{item.duration}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* certificate */}
                        <TabsContent value="certificate" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{certificate.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{certificate.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {certificate.items.map((item, index) => (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-accent'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.title}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[8px] h-[8px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* organization */}
                        <TabsContent value="organization" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{organization.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{organization.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {organization.items.map((item, index) => {
                                            return <li key={index} className='bg-[#232329] h-[184px] py-6 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3'>
                                                <span className='text-accent whitespace-nowrap'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position}</h3>
                                                <div className='flex items-center gap-3'>
                                                    {/* dot */}
                                                    <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                    <p className='text-white/60 whitespace-nowrap'>{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                                                        <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about me */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                            <span className='text-white/60'>{item.fieldName}</span>
                                            {/* dibawah ini blm dikasih className */}
                                            <span className=''>{item.fieldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
};

export default Resume;