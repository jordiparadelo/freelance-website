import { ProjectPage } from '@/components/pages';
import React from 'react'
import { PROJECTS } from '@/lib/constants';



const Projects = () => {
  return (
    <ProjectPage project={PROJECTS[0]}/>
  )
}

export default Projects;