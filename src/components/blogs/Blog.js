import React from 'react'
import { blogs } from '../../data'

const Blog = () => {
  return (
    <section id='blogs' className='section bg-tertiary'>
      <div className='container mx-auto'>
        <div className='flex flex-col  items-center text-center'>
          <h3 className='section-title before:content-blogs relative before:absolute before:opacity-40 
          before:-top-[1rem] before:-left-28 before:hidden before:lg:block text-6xl'>
            My Insights
          </h3>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => {
          const { blogImg, blogName, blogText } = blog;
          return (
            <div className="bg-secondary p-6 rounded-3xl" key={index}>
              <div className="card relative group">
                <img className="card-img" src={blogImg} alt={blogName} />
                <div className="card-content">
                  <h3 className="card-title">{blogName}</h3>
                  <p className="card-text">{blogText}</p>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Blog