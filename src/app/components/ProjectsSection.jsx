"use client"
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const projectsData = [
    {
        id: 1,
        title: "Disney Clone Website",
        description: "Designed a clone of Disney + Hotstar website using ReactJs and Firebase for authentication and database",
        image: "/images/projects/p1.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/Disney-Clone",
        previewUrl: "https://disney-clone-development.web.app/",
    },
    {
        id: 2,
        title: "Video Mania Website",
        description: "Shaped a video watching website using ReactJs along with Chakra Ui library",
        image: "/images/projects/p2.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/Video-Mania",
        previewUrl: "https://video-mania.vercel.app/",
    },
    {
        id: 3,
        title: "Service Website",
        description: "Created Service provider demo website using Reactjs",
        image: "/images/projects/p3.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/React-one",
        previewUrl: "https://react-one-kappa.vercel.app/",
    },
    {
        id: 4,
        title: "Todo-List Application",
        description: "Designed a Todo-application using MERN Stack technology",
        image: "/images/projects/p4.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/TodoList",
        previewUrl: "https://github.com/Timir07/TodoList/blob/master/README.md",
    },
    {
        id: 5,
        title: "Blog Website",
        description: "Created a Website using Frontend Technology along with Nodejs, Express stack and SQL database so that you can create a blog to share your story with world",
        image: "/images/projects/p5.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/Blog-Website",
        previewUrl: "https://github.com/Timir07/Blog-Website/blob/master/README.md",
    },
    {
        id: 6,
        title: "Drum Kit",
        description: "Designed a fun KeyBoard Drum Website Using HTML, CSS and JavaScript which Turns keyboard keys to drum sounds",
        image: "/images/projects/p6.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/Drumkit",
        previewUrl: "https://timir07.github.io/Drumkit/",
    },
    {
        id: 7,
        title: "Daily Goals",
        description: "Developed a Daily Goals Website which uses the local storage of browser",
        image: "/images/projects/p7.png",
        tag: ["All","Web"],
        gitUrl: "https://github.com/Timir07/Daily-Goals",
        previewUrl: "https://timir07.github.io/Daily-Goals/",
    },
    {
        id: 8,
        title: "Brain Tumor Segmentation with U-NET",
        description: "U-Net involves using a convolutional neural network architecture to identify and delineate tumor regions within medical brain images",
        image: "/images/projects/p8.png",
        tag: ["All","AI"],
        gitUrl: "https://colab.research.google.com/drive/1uSZMwjPAFhr7g3TQc15iRPPRoyjhDsn3?usp=sharing",
        previewUrl: "https://colab.research.google.com/drive/1AK9jXK3Q5zUwm-uMN_ll5KBflY8wlkDT?usp=sharing",
    },
    {
        id: 9,
        title: "Youtube Comment Sentiment Analysis",
        description: "Currently learning and discovering NLP models like bert, gpt, vader to analysis the polarity of sentiments on youtube comments in a team of four members",
        image: "/images/projects/p9.png",
        tag: ["All","AI"],
        gitUrl: "https://colab.research.google.com/drive/1E0tgqzNu2O6iBxSM5WGxB3UsuoGkcQqp?usp=sharing",
        previewUrl: "https://colab.research.google.com/drive/1udNt-rxbhYLgyDwn-4xhTsSCWmzXWnCC?usp=sharing",
    },
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All")
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleTagChange = (newTag) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) =>
        project.tag.includes(tag)
    );

  const cardVariants = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

  return (
    <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
        <div className="flex flex-row justify-center items-center gap-2 py-6">
            <ProjectTag 
             onClick={handleTagChange}
             name="All"
             isSelected={tag === "All"}
            />
            <ProjectTag
             onClick={handleTagChange}
             name="Web"
             isSelected={tag === "Web"}
            />
            <ProjectTag
             onClick={handleTagChange}
             name="AI"
             isSelected={tag === "AI"}
            />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
            {filteredProjects.map((project, index) => (
            <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}/>
            </motion.li>))}
        </ul>
    </section>
  )
}

export default ProjectsSection