import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="z-20 w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Community</div>
                    <a href='https://www.youtube.com/channel/UCnGGIdlLUQji5_ZA56P3iTA' target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <FaYoutube />
                            <span className="text-[15px] ml-[6px]">Youtube</span>
                        </p>
                    </a>
                    <a href='https://github.com/TheSacredJump' target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">Github</span>    
                        </p>
                    </a>
                    <a href='https://discordapp.com/users/sathyap/' target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxDiscordLogo />
                            <span className="text-[15px] ml-[6px]">Discord</span>    
                        </p>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Social Media</div>
                    <a href='https://www.instagram.com/sathya_padmanabhan/' target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxInstagramLogo />
                            <span className="text-[15px] ml-[6px]">Instagram</span>    
                        </p>
                    </a>
                    <a href="https://x.com/Sathya_Padhu" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxTwitterLogo />
                            <span className="text-[15px] ml-[6px]">Twitter</span>    
                        </p>
                    </a>
                    <a href='https://www.linkedin.com/in/sathya-padmanabhan/' target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">Linkedin</span>    
                        </p>
                    </a>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px] mb-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">About & Contact</div>
                    <a href="mailto:padhu.sathya@gmail.com" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Email Me</span>    
                        </p>
                    </a>
                    <a href="/Sathya_p_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <p className="flex flex-row items-center my-[15px] cursor-pointer">
                            <span className="text-[15px] ml-[6px]">Resume</span>    
                        </p>
                    </a>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <span className="text-[15px] ml-[6px]">padhu.sathya@gmail.com</span>    
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer