//  icons
import {
  FiGithub,
  FiLinkedin,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFigma
} from 'react-icons/fi';

// companies icons
// import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
// import UpworkBrandIcon from './assets/img/brands/upwork.png';
// import FiverBrandIcon from './assets/img/brands/fiverr.png';
// import BehanceBrandIcon from './assets/img/brands/behance.png';
// import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects imagespng
import Project1 from './assets/img/projects/first-portfolio.png';
import Project2 from './assets/img/projects/safiri.png';
import Project3 from './assets/img/projects/enigmatic.png';
import Project4 from './assets/img/projects/vikali.png';
import Project5 from './assets/img/projects/movieforum.png';
import Project6 from './assets/img/projects/sw-eet-living.png';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/ruby.png';
// import SkillImg6 from './assets/img/skills/rails.png';
import SkillImg7 from './assets/img/skills/mysql.png';
import SkillImg8 from './assets/img/skills/nodejs.png';
import SkillImg9 from './assets/img/skills/git.png';
import SkillImg10 from './assets/img/skills/figma.png';
import SkillImg11 from './assets/img/skills/jira.png';


// blogs images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'services',
    href: 'services',
  },
  {
    name: 'testimonials',
    href: 'testimonials',
  },
  {
    name: 'contact',
    href: 'contact',
  },
];

// social
export const social = [
  {
    icon: <FiMail />,
    href: '',
  },
  {
    icon: <FiFigma />,
    href: 'https://www.figma.com/files/drafts?fuid=1202324557437039500',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/Barbra-Mududa',
  },
  {
    icon: <FiLinkedin/>,
    href: 'https://www.linkedin.com/in/barbra-mududa-30a36124b/',
  },
];

// companies
// export const brands = [
//   {
//     img: FreelancerBrandIcon,
//     href: '',
//   },
//   {
//     img: UpworkBrandIcon,
//     href: '',
//   },
//   {
//     img: FiverBrandIcon,
//     href: '',
//   },
//   {
//     img: BehanceBrandIcon,
//     href: '',
//   },
//   {
//     img: DribbbleBrandIcon,
//     href: '',
//   },
// ];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'About-Me',
    category: 'From impactful projects to successful collaborations, this showcase embodies the culmination of my skills and serves as a testament to my commitment to excellence in every endeavor.',
  },
  {
    id: '2',
    image: Project2,
    name: 'Safiri-Kenya',
    category: 'Embark on unforgettable adventures through exhilarating  trails, immersive camping experiences, and breathtaking Kenya Safaris that will ignite your spirit.',
  },
  {
    id: '3',
    image: Project3,
    name: 'Enigmatic',
    category: 'Hiking events website that enables hikers explore the beauty of nature in Kenya. The hiker is able to pick a hike of choice and join the rest of the hiking community in its adventures.',
  },
  {
    id: '4',
    image: Project4,
    name: 'Vikali',
    category: 'Vikali seeks to create an online store for consumers so that it is simple to shop for your favorite items from the vast array of online shopping websites that are readily available on the internet.',
  },
  {
    id: '5',
    image: Project5,
    name: 'Movie-Forum',
    category: '>This is a simple web app that allows movie lovers around the world to come to our platform and checkout the latest and highest rated films.A user is able to view the latest titles and reviews by other users.',
  },
  {
    id: '6',
    image: Project6,
    name: 'Sweet-Living',
    category: 'Swee-Living website allows realtors and users around the world to buy,sell and rent real estate properties.A user is able to view the available real estate properties and contact the agent involved for purchase.',
  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  // {
  //   image: SkillImg6,
  // },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
  {
    image: SkillImg9,
  },
  {
    image: SkillImg10,
  },
  {
    image: SkillImg11,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at hello@youremail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Bucharest, Romania',
    description: 'Serving clients worldwide',
  },
];
