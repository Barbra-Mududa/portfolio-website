import React from 'react'
import { skills} from '../../data'

const Skills = () => {
  return (
    <section className='bg-tertiary py-12'>
        <div className='cotainer mx-auto'>
            <div id='icons' className='grid grid-cols-5 md:grid-flow-row'>
                {skills.map((skill, index) => {
                    return(
                      <div className='flex justify-center items-center'>
                       <img src={skill.image} alt=''/> 
                      </div> 
                    )
                })}
            </div>
        </div>
    </section>
  )
}

export default Skills