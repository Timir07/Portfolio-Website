"use client"
import Link from 'next/link'
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id:"skills",
        content: (
            <ul className="list-disc pl-2">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JavaScript</li>
                <li>C++</li>
                <li>Python</li>
                <li>MongoDB</li>
                <li>MySQL</li>
                <li>Firebase</li>
                <li>Deep Learning</li>
            </ul>
        )    
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>UIET Panjab University Chandigarh -<div className="text-[#ADB7BE]">BE, Information Technology (2021-2025) <br />8.72 CGPA</div></li>
                <br />
                <li>Government Model Senior Secondary School Chandigarh -<div className="text-[#ADB7BE]">12th CBSE, Non-Medical (2021) <br />96.2%</div></li>
                <br />
                <li>DAV Senior Secondary Public School Panchkula - <div className="text-[#ADB7BE]">10th CBSE (2019) <br />95.2%</div></li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li><Link className="text-[#ADB7BE] hover:text-white hover:border-b" href={"https://www.coursera.org/account/accomplishments/certificate/KS6F7JCWFVJE"}>React Basics</Link></li>
                <li><Link className="text-[#ADB7BE] hover:text-white hover:border-b" href={"https://drive.google.com/file/d/1iva-_ennik_C09X5PUL_Zt_5YKfplvFn/view?usp=drive_link"}>Artificial Intelligence Intern</Link></li>
            </ul>
        )
    }
]

const AboutSection = () => {
  const [tab,setTab] = useState("skills")
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id)=>{
    startTransition(()=>{
        setTab(id)
    })
  }
  return (
    <section>
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">

            <Image src="/images/about-image.png" width={500} height={500}/>
     
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold mb-4">About Me</h2>
                <p className="text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Soluta possimus atque et ad ipsam nemo quo deserunt quam 
                    deleniti optio sed debitis, quaerat natus sunt laborum 
                    mollitia adipisci? Aspernatur, perspiciatis.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={()=>handleTabChange("skills")} active={tab === "skills"}>
                        Skills
                    </TabButton>
                    <TabButton selectTab={()=>handleTabChange("education")} active={tab === "education"}>
                        Education
                    </TabButton>
                    <TabButton selectTab={()=>handleTabChange("certifications")} active={tab === "certifications"}>
                        Certifications
                    </TabButton>
                </div>
                <div className="mt-8">{TAB_DATA.find((t)=>t.id === tab).content}</div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection