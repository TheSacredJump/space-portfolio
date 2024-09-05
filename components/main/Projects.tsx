"use client"

import React from 'react'
import ProjectCard from '../subfolder/ProjectCard'

const Projects = () => {
  return (
    <div id="projects" className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
        <div className='h-full w-full flex flex-col lg:grid grid-cols-2 lg:grid-cols-3 gap-10 px-10'>
            <ProjectCard
                src="/Servery.png"
                title="Servery - In Progress"
                description="Servery is an all-in-one recipe and food app built with the MERN stack, which includes 
                MongoDB, Express, React Native, and Node.js. Servery offers personalized recipe recommendations through ML and a 
                vast social network of foodies and culinary influencers. This project is currently being built and is set to launch in January 2025!"
                demo=""
                code=""
            />
            <ProjectCard
                src="/LiveDocs.png"
                title="LiveDocs - Google Docs Clone"
                description="LiveDocs is a Google Docs clone builrd with React and Next.JS. LiveDocs integrates 
                Clerk for authentication, some ShadCn components for UI, and utilizes LiveBlocks for live, collaborative features.
                LiveDocs is protected by Sentry and offers full-fledged functionality from a vast array of markdown tools, live collaboration,
                 to mobile responsiveness."
                demo="https://live-docs-azure.vercel.app/"
                code="https://github.com/TheSacredJump/LiveDocs"
            />
            <ProjectCard
                src="/Horizon.png"
                title="Horizon - Banking Application"
                description="Horizon is a secure banking application built with React and Next.JS. 
                Horizon is a financial dashboard that allows users to securely connect their bank accounts see transaction history. 
                Horizon also supports real time transactions and money wiring using a secure, uniquely generated user shareable id.
                Horizon is integrated with Appwrite, Zod, Plaid API, Dwolla, and is protected with Sentry"
                demo="https://bankingapp-orpin.vercel.app/sign-in"
                code="https://github.com/TheSacredJump/bankingapp"
            />
            <ProjectCard
                src="/SumzAI.png"
                title="Sumz - AI Article Summarizer"
                description="Sumz is an AI article summarizer built with React, TailwindCSS, Redux, and Summize: an open-source api on Rapidapi
                that allows article and document summarization. Sumz is a simple to use application, with local storage, recent history, and 
                error handling."
                demo="https://animated-creponne-5435d4.netlify.app/"
                code="https://github.com/TheSacredJump/SumzAI"
            />
            <ProjectCard
                src="/StockFin.png"
                title="StockFin - AI Financial Advisor"
                description="StockFin is an AI financial advisor looking to help people who want to invest, get started.
                StockFin offers 24/7 generative AI support that utilizes real time market data to provide financial insight and advice.
                StockFin also offers a personalized budget tracker that takes into account a user's spending and saving goals and helps 
                build a personalized budget plan. The application offers AI advice on how to improve the budget and cut spending."
                demo="https://www.stockfin.net"
                code="https://github.com/jwaguirr/stockfin"
            />
            <ProjectCard
                src="/CardioCrew.png"
                title="CardioCrew - RiceApps Project"
                description="CardioCrew is a fitness tracker app for heart patients at the Texas Heart Institute. CardioCrew was built 
                with the MERN stack, which includes MongoDB, Express, React Native, and Node.JS. CardioCrew was presented live to the 
                Texas Heart Institute on the final demo showcase day."
                demo=""
                code="https://github.com/rice-apps/thi-walk30"
            />
            <ProjectCard
                src="/Research.png"
                title="Research - Computational Bio"
                description="Performed computational neuroscience research with the Jahanikia Neurolab. Worked on CovidVacMap: an interactive 
                project that could predict risk factors of COVID outbreaks by country based on the country's vaccinated population and government 
                regulations. Used Python and nerual networks to acheive at >90% accuarcy. Worked on NeuroTDA: a project that found similarties between 
                genes that were highly correlated to various neurodegenrative diseases, such as Parkinson's, Alzheimer's, etc. so that future drug development 
                could help treat multiple diseases at the same time. Presented this project at the 2023 OHBM International Conference in Montreal."
                demo="https://www.jneurolab.org/"
                code=""
            />

        </div>
    </div>
  )
}

export default Projects