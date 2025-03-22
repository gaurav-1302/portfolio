'use client'

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    ServerIcon,
    ShieldCheckIcon,
    CloudIcon,
    BriefcaseIcon,
    AcademicCapIcon,
    DocumentTextIcon
} from '@heroicons/react/20/solid';
import { CodeBracketIcon, CpuChipIcon } from '@heroicons/react/20/solid';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState('about');

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setActiveTab(sectionId.toLowerCase());
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-gray-800">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2"
                    >
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Gaurav Singh
                        </span>
                    </motion.div>

                    <ul className="hidden md:flex space-x-8">
                        {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                            <li key={item}>
                                <button
                                    className={`py-2 relative ${activeTab === item.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-white'}`}
                                    onClick={() => scrollToSection(item)}
                                >
                                    {item}
                                    {activeTab === item.toLowerCase() && (
                                        <motion.div
                                            layoutId="underline"
                                            className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400"
                                        />
                                    )}
                                </button>
                            </li>
                        ))}
                    </ul>

                    <button className="md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="md:w-1/2 mb-10 md:mb-0"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <span className="block">Hi, I'm Gaurav</span>
                        <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                            Full Stack Developer
                        </span>
                    </h1>
                    <p className="text-xl text-gray-300 mb-8">
                        Building secure applications with a focus on user experience. Security researcher with a passion for finding vulnerabilities.
                    </p>
                    <div className="flex gap-4">
                        <button onClick={() => scrollToSection('Projects')} className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition transform hover:scale-105">
                            View Projects
                        </button>
                        <button onClick={() => scrollToSection('Contact')} className="border border-gray-600 hover:border-blue-500 text-white font-medium py-3 px-6 rounded-lg transition transform hover:scale-105">
                            Contact Me
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:w-1/2 flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-20 animate-pulse"></div>
                        <div className="absolute inset-4 rounded-full bg-gray-900 z-10"></div>
                        <div className="absolute inset-0 z-20 flex items-center justify-center">
                            <span className="text-9xl font-bold text-blue-500 opacity-80">G</span>
                        </div>
                    </div>
                </motion.div>
            </header>

            {/* About Section */}
            <section id='About' className="bg-gray-900/50 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                About Me
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <AcademicCapIcon className="h-6 w-6 text-blue-400" />
                                    Education
                                </h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="font-medium text-lg">Bachelor of Technology (AIML Specialization)</p>
                                        <p className="text-gray-400">GLA University (2021-2025)</p>
                                        <p className="text-blue-400">GPA: 7.1</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-lg">Intermediate</p>
                                        <p className="text-gray-400">Sanskar Public School (2019-2021)</p>
                                        <p className="text-blue-400">GPA: 9.56</p>
                                    </div>
                                    <div>
                                        <p className="font-medium text-lg">High School</p>
                                        <p className="text-gray-400">Shreeram Model High School (- 2019)</p>
                                        <p className="text-blue-400">GPA: 9.16</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl">
                                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                                    <CpuChipIcon className="h-6 w-6 text-blue-400" />
                                    Technical Profile
                                </h3>
                                <p className="text-gray-300 mb-4">
                                    I'm a Full Stack Developer skilled in React, Node.js, and Firebase, with a strong focus on security.
                                    I've identified vulnerabilities for tech giants like Samsung and Apple, earning recognition in their Hall of Fame.
                                </p>
                                <p className="text-gray-300">
                                    Currently working as a Google Cloud Expert at Mercor, training AI agents for Google Cloud Platform to enhance cloud-based services.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Experience Section */}
            <section id='Experience' className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Work Experience
                            </span>
                        </h2>
                        <div className="relative">
                            {/* Timeline line */}
                            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-700 transform md:translate-x-px"></div>

                            {/* Experience Items */}
                            <div className="space-y-12">
                                {/* Item 1 */}
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col md:flex-row items-start"
                                    >
                                        <div className="flex items-center md:w-1/2 md:justify-end md:pr-12 mb-4 md:mb-0">
                                            <div className="z-10 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg md:max-w-md">
                                                <div className="flex items-center justify-between mb-2">
                                                    <h3 className="text-xl font-bold">Google Cloud Expert</h3>
                                                    <span className="bg-blue-900/50 text-blue-300 text-xs font-medium px-2 py-1 rounded">Current</span>
                                                </div>
                                                <p className="text-gray-400 mb-2">Mercor | 2025 - Present</p>
                                                <p className="text-gray-300">
                                                    Trained AI agents for Google Cloud Platform, enhancing cloud-based services with intelligent automation.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                                        <div className="md:w-1/2 md:pl-12"></div>
                                    </motion.div>
                                </div>

                                {/* Item 2 */}
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col md:flex-row items-start"
                                    >
                                        <div className="md:w-1/2 md:pr-12 mb-4 md:mb-0 md:text-right"></div>
                                        <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                                        <div className="flex items-center md:w-1/2 md:pl-12">
                                            <div className="z-10 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg md:max-w-md">
                                                <h3 className="text-xl font-bold mb-2">Jr. Software Developer</h3>
                                                <p className="text-gray-400 mb-2">Atirun Techs Pvt. Ltd | 2023 - 2024</p>
                                                <p className="text-gray-300">
                                                    Enhanced user experiences by developing front-end pages using React.js and React Native.
                                                    Designed and managed scalable backend infrastructure using Firebase and Cloud Functions, ensuring efficient data handling.
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Item 3 */}
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: 0.3 }}
                                        viewport={{ once: true }}
                                        className="flex flex-col md:flex-row items-start"
                                    >
                                        <div className="flex items-center md:w-1/2 md:justify-end md:pr-12 mb-4 md:mb-0">
                                            <div className="z-10 bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg md:max-w-md">
                                                <h3 className="text-xl font-bold mb-2">Security Researcher</h3>
                                                <p className="text-gray-400 mb-2">Open Source | 2021 - 2022</p>
                                                <p className="text-gray-300">
                                                    Identified and reported over 24 vulnerabilities in industry giants, including Samsung, Apple, and Oppo,
                                                    earning Hall of Fame recognition and bounties, significantly enhancing their security posture.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 rounded-full bg-blue-500 transform -translate-x-1.5 md:-translate-x-1.5 z-10"></div>
                                        <div className="md:w-1/2 md:pl-12"></div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Projects Section */}
            <section id='Projects' className="bg-gray-900/50 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Featured Projects
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                            {/* Project 3 */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
                            >
                                <div className="h-48 bg-gradient-to-r from-purple-800/30 to-pink-800/30 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-purple-400 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Shipping Aggregator</h3>
                                    <p className="text-gray-300 mb-4">
                                        Developed a comprehensive shipping aggregator platform using Firebase, ReactJS, and Google Cloud,
                                        streamlining the shipping process for businesses with real-time tracking.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded">React.js</span>
                                        <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded">Google Cloud</span>
                                        <span className="px-2 py-1 bg-purple-900/30 text-purple-300 text-xs rounded">Firebase</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <a href="https://umaxship.com/" target='_blank' className="text-purple-400 hover:text-purple-300 text-sm font-medium flex items-center">
                                            <span>View Project</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                        <a href="https://github.com/gaurav-1302/gophyfit-gym" target='_blank' className="text-gray-400 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project 1 */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
                            >
                                <div className="h-48 bg-gradient-to-r from-blue-800/30 to-purple-800/30 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-400 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Event Ticket Booking App</h3>
                                    <p className="text-gray-300 mb-4">
                                        Designed and developed a user-friendly mobile ticketing platform using React Native and Expo,
                                        ensuring cross-platform compatibility and a seamless user experience.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded">React Native</span>
                                        <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded">Expo</span>
                                        <span className="px-2 py-1 bg-blue-900/30 text-blue-300 text-xs rounded">Firebase</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <a href="https://github.com/gaurav-1302/bezzie" className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center">
                                            <span>View Project</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                        <a href="https://github.com/gaurav-1302/bezzie" className="text-gray-400 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Project 2 */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 shadow-xl"
                            >
                                <div className="h-48 bg-gradient-to-r from-green-800/30 to-blue-800/30 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-green-400 opacity-75" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold mb-2">Fitness App</h3>
                                    <p className="text-gray-300 mb-4">
                                        Designed and developed a cross-platform fitness tracking app using React Native,
                                        providing an intuitive user experience. Integrated wearable device APIs to fetch real-time fitness data.
                                    </p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded">React Native</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded">Google Fit API</span>
                                        <span className="px-2 py-1 bg-green-900/30 text-green-300 text-xs rounded">Firebase</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <a href="https://github.com/gaurav-1302/gophyfit-gym" target='_blank' className="text-green-400 hover:text-green-300 text-sm font-medium flex items-center">
                                            <span>View Project</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </a>
                                        <a href="https://github.com/gaurav-1302/gophyfit-gym" target='_blank' className="text-gray-400 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Skills Section */}
            <section id='Skills' className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Technical Skills
                            </span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Frontend Skills */}
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <CodeBracketIcon className="h-6 w-6 text-blue-400 mr-2" />
                                    <h3 className="text-xl font-bold">Frontend</h3>
                                </div>
                                <div className="space-y-3">
                                    {['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'React Native'].map((skill) => (
                                        <div key={skill} className="flex items-center">
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                                            </div>
                                            <span className="ml-3 min-w-[100px]">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Backend Skills */}
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <ServerIcon className="h-6 w-6 text-green-400 mr-2" />
                                    <h3 className="text-xl font-bold">Backend</h3>
                                </div>
                                <div className="space-y-3">
                                    {['Node.js', 'Express', 'Firebase', 'Serverless Functions', 'API Development', 'Python'].map((skill) => (
                                        <div key={skill} className="flex items-center">
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-green-500 to-blue-600 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                                            </div>
                                            <span className="ml-3 min-w-[100px]">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Security Skills */}
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <ShieldCheckIcon className="h-6 w-6 text-red-400 mr-2" />
                                    <h3 className="text-xl font-bold">Security</h3>
                                </div>
                                <div className="space-y-3">
                                    {['Vulnerability Detection', 'Security Analysis', 'Bug Bounty', 'Penetration Testing', 'Security Audits'].map((skill) => (
                                        <div key={skill} className="flex items-center">
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-red-500 to-purple-600 h-2.5 rounded-full" style={{ width: '88%' }}></div>
                                            </div>
                                            <span className="ml-3 min-w-[100px]">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Cloud Skills */}
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <CloudIcon className="h-6 w-6 text-blue-400 mr-2" />
                                    <h3 className="text-xl font-bold">Cloud & DevOps</h3>
                                </div>
                                <div className="space-y-3">
                                    {['Google Cloud Platform', 'Firebase', 'Git', 'GitHub', 'CI/CD', 'Linux'].map((skill) => (
                                        <div key={skill} className="flex items-center">
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                                            </div>
                                            <span className="ml-3 min-w-[100px]">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tools & Frameworks */}
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <BriefcaseIcon className="h-6 w-6 text-yellow-400 mr-2" />
                                    <h3 className="text-xl font-bold">Tools & Frameworks</h3>
                                </div>
                                <div className="space-y-3">
                                    {['Shadcn UI', 'Tailwind CSS', 'Framer Motion', 'Redux', 'Jest', 'Expo'].map((skill) => (
                                        <div key={skill} className="flex items-center">
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-yellow-500 to-red-600 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                                            </div>
                                            <span className="ml-3 min-w-[100px]">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Other Skills */}
                            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl">
                                <div className="flex items-center mb-4">
                                    <DocumentTextIcon className="h-6 w-6 text-purple-400 mr-2" />
                                    <h3 className="text-xl font-bold">Other Skills</h3>
                                </div>
                                <div className="space-y-3">
                                    {['UI/UX Fundamentals', 'Responsive Design', 'Java', 'RESTful APIs', 'Problem Solving', 'Team Collaboration'].map((skill) => (
                                        <div key={skill} className="flex items-center">
                                            <div className="w-full bg-gray-700 rounded-full h-2.5">
                                                <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-2.5 rounded-full" style={{ width: '89%' }}></div>
                                            </div>
                                            <span className="ml-3 min-w-[100px]">{skill}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Awards Section */}
            <section id='Awards' className="bg-gray-900/50 py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Awards & Recognition
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                {
                                    title: "Apple Inc. Hall of Fame",
                                    description: "Recognized by Apple Inc. in Hall of Fame for vulnerability discovery.",
                                    icon: <ShieldCheckIcon className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" />
                                },
                                {
                                    title: "Top Hacker Badge",
                                    description: "Awarded Top Hacker Badge on SideFX at HackerOne.",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                },
                                {
                                    title: "Ideathon 2023 Winner",
                                    description: "Winner of Ideathon 2023 organized by RIF.",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                    </svg>
                                },
                                {
                                    title: "Brewing Code Hackathon 2023",
                                    description: "Runner-up at the Brewing Code Hackathon 2023.",
                                    icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-400 group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                },
                            ].map((award, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.03 }}
                                    className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-xl group hover:bg-blue-900/20 transition-colors duration-300"
                                >
                                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
                                        <div className="p-4 rounded-full bg-gray-700/50 group-hover:bg-blue-800/30 transition-colors duration-300">
                                            {award.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-2 text-center md:text-left">{award.title}</h3>
                                            <p className="text-gray-300 text-center md:text-left">{award.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section id='Contact' className="py-20">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold mb-12 text-center">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Get In Touch
                            </span>
                        </h2>
                        <div className="grid md:grid-cols-1 gap-8">
                            <div>
                                <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl mb-8">
                                    <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-gray-700 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Email</h4>
                                                <a href="mailto:gaurav130202chaudhary@gmail.com" className="text-gray-300 hover:text-blue-400">gaurav130202chaudhary@gmail.com</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-gray-700 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Phone</h4>
                                                <a href="tel:+918755356404" className="text-gray-300 hover:text-blue-400">+91 87553-56404</a>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-gray-700 rounded-lg">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-medium">Location</h4>
                                                <p className="text-gray-300">Faridabad, India</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 shadow-xl">
                                    <h3 className="text-xl font-bold mb-6">Social Profiles</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        <a href="https://github.com/gaurav-1302" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                            </svg>
                                            <span>GitHub</span>
                                        </a>
                                        <a href="https://www.linkedin.com/in/gauravchadhry/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                                            </svg>
                                            <span>LinkedIn</span>
                                        </a>
                                        <a href="https://x.com/GAURAVS69433557" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 p-4 rounded-lg transition-colors duration-300">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                            </svg>
                                            <span>Twitter</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black/60 py-8 border-t border-gray-800">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
                                Gaurav Singh
                            </span>
                        </div>
                        <div className="text-gray-400 text-center md:text-right">
                            <p>© {new Date().getFullYear()} Gaurav Singh. All rights reserved.</p>
                            <p className="text-sm mt-1">Full Stack Developer & Security Researcher</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;