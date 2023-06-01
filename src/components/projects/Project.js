import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css'; // Import Swiper styles
import { project } from '../../data';

// Import Swiper modules
import SwiperCore, { Autoplay, Pagination } from 'swiper';

// Install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Project = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 7000 }}
      pagination={{ clickable: true }}
    >
      {project.map((item, index) => {
        const { projectImg, projectName, projectText, demoLink, githubLink } = item;
        return (
          <SwiperSlide key={index}>
            <div className="card relative group">
              <img className="card-img" src={projectImg} alt={projectName} />
              <div className="card-overlay absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="card-title font-bold text-7xl font-bold mb-2">{projectName}</h3>
                <p className="card-description font-bold text-2xl">{projectText}</p>
                <div className="card-buttons  flex mt-4">
                  <a
                    className="btn btn-demo mr-2 bg-white text-black font-bold py-2 px-4 rounded"
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="btn btn-demo mr-2 bg-white text-black font-bold py-2 px-4 rounded"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>

          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Project;

