// RecentProjects component
import React from 'react';
import { projects } from '@/data';
import { PinContainer } from './ui/3d-pin';
import { FaLocationArrow } from 'react-icons/fa';
import Image from 'next/image';

const RecentProjects = () => {
    return (
        <div className='py-20 mt-10' id="projects">
            <h1 className="heading">
                A small selection of {' '}
                <span className="text-purple">Recent Projects</span>
            </h1>
            <div className='flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10'>
                {projects.map(({ id, title, des, img, link }) => (
                    <div key={id} className='sm:h-[41rem] sm:w-[570px] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center w-[80vw]'>
                        <PinContainer title={link} href={link}>
                            <div className='relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h[30vh] lg:h-[30vh] mb-10'>
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                <img
                                    src={img}
                                    alt={title}
                                    className="z-10 absolute bottom-0"
                                />
                            </div>
                            <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                                {title}
                            </h1>
                            <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                                {des}
                            </p>
                            
                            {/* Technology Stack for Basic HTML/CSS Project */}
                            {id === 1 && (
                                <div className="flex items-center gap-2 mt-4 mb-2">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600">
                                        <Image src="/html5.svg" alt="JavaScript" width={20} height={20} />
                                    </div>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600">
                                        <Image src="/css3.svg" alt="JavaScript" width={20} height={20} />
                                    </div>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F7DF1E] border border-gray-600">
                                        <Image src="/js.svg" alt="JavaScript" width={20} height={20} />
                                    </div>
                                </div>
                            )}

                            {/* Technology Stack for Zentry */}
                            {id === 2 && (
                                <div className="flex items-center gap-2 mt-4 mb-2">
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600">
                                        <Image src="/re.svg" alt="React" width={20} height={20} />
                                    </div>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600">
                                        <Image src="/tail.svg" alt="TailwindCSS" width={20} height={20} />
                                    </div>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-600">
                                        <Image src="/gsap.svg" alt="GSAP" width={20} height={20} />
                                    </div>
                                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#F7DF1E] border border-gray-600">
                                        <Image src="/js.svg" alt="JavaScript" width={20} height={20} />
                                    </div>
                                </div>
                            )}
                            
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex justify-center items-center gap-4">
                                    <a href={link} className="flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</a>
                                    <FaLocationArrow className="ms-1" color="#CBACF9" />
                                    {id === 2 && (
                                        <>
                                            <span className="text-gray-400">|</span>
                                            <a href="/projects/zentry" className="flex lg:text-xl md:text-xs text-sm text-purple">Case Study</a>
                                            <FaLocationArrow className="ms-1" color="#CBACF9" />
                                        </>
                                    )}
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;
