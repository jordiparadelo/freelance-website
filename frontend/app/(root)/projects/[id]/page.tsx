import React from 'react'

// export async function generateStaticParams() {
//     const projects = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) => res.json())
   
//     return projects.map((project: {id: string}) => ({
//       slug: project.id,
//     }))
//   }

const ProjectPage = async ({params}: {params: {id: string}}) => {
    const {id} = params

    // const project = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())

  return (
    id &&
        <h1>{id}</h1>

  )
}

export default ProjectPage