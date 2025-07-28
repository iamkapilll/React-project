import logo from './logo.png'
import logo_dark from './logo_dark.svg'
import cross_icon from './cross_icon.svg'
import menu_icon from './menu_icon.svg'
import star_icon from './star_icon.svg'
import left_arrow from './left_arrow.svg'
import right_arrow from './right_arrow.svg'
import header_img from './header_img.jpg'
import brand_img from './brand_img.png'
import project_img_1 from './project_img_1.jpg'
import project_img_2 from './project_img_2.jpg'
import project_img_3 from './project_img_3.jpg'
import project_img_4 from './project_img_4.jpg'
import project_img_5 from './project_img_5.jpg'
import project_img_6 from './project_img_6.jpg'
import profile_img_1 from './profile_img_1.png'
import profile_img_2 from './profile_img_2.png'
import profile_img_3 from './profile_img_3.png'

export const assets = {
    logo,
    logo_dark,
    cross_icon,
    menu_icon,  
    star_icon,
    header_img,
    brand_img,
    project_img_1,
    project_img_2,
    project_img_3,
    project_img_4,
    left_arrow,
    right_arrow,
}

export const projectsData = [
    {
      title: "Skyline Haven",
      price: "$2,50,000",
      location: "California",
      image: project_img_1
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_2
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_3
    },
    {
      title: "Central Square",
      price: "$2,50,000",
      location: "Los Angeles",
      image: project_img_4
    },
    {
      title: "Vista Verde",
      price: "$2,50,000",
      location: "San Francisco",
      image: project_img_5
    },
    {
      title: "Serenity Suites",
      price: "$2,50,000",
      location: "Chicago",
      image: project_img_6
    },
    
  ];

  export const testimonialsData = [
    {
        name: "Donald Jackman",
        title: "Marketing Manager",
        image: profile_img_1,
        alt: "Portrait of Donald Jackman",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "Richard Nelson",
        title: "UI/UX Designer",
        image: profile_img_2,
        alt: "Portrait of Richard Nelson",
        rating: 4,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    },
    {
        name: "James Washington",
        title: "Co-Founder",
        image: profile_img_3,
        alt: "Portrait of James Washington",
        rating: 5,
        text: "From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
    }
];

export const PROGRAM_PROJECTS = [
  {
    id: 1,
    name: "Web Development Bootcamp",
    description:
      "A hands-on program covering HTML, CSS, JavaScript, and full-stack web development using MERN stack.",
    image: "https://mliv6plxtvjb.i.optimole.com/cb:dmZG.45163/w:1617/h:1080/q:mauto/f:best/https://codeworks.me/wp-content/uploads/2019/11/Codeworks-Coding-Bootcamp-London-scaled.jpg  ", // replace with actual image later
    link: "#",
  },
  {
    id: 2,
    name: "Architecture",
    description:
      "Learn user experience and interface design principles with tools like Figma and Adobe XD.",
    image: "https://www.aeccglobal.com.ph/images/2022/12/21/study-architecture-course.webp",
    link: "#",
  },
  {
    id: 3,
    name: "Data analysis",
    description:
      "Dive into data analysis, visualization, machine learning, and real-world datasets using Python libraries.",
    image: "https://cdn-bnoon.nitrocdn.com/cfUeuSvoLILQuGVcmoHbpjWXuRZqSowW/assets/images/optimized/rev-c0fda68/zudu.co.uk/wp-content/uploads/Current-technology-trends-in-engineering-2.jpg",
    link: "#",
  },
  {
    id: 4,
    name: "Mobile App Development",
    description:
      "Build cross-platform mobile applications using Flutter and Dart for Android and iOS.",
    image: "https://blog.emb.global/wp-content/uploads/2023/08/image-83-1.png",
    link: "#",
  },
  {
    id: 5,
    name: "Cybersecurity Essentials",
    description:
      "Understand the fundamentals of cybersecurity, ethical hacking, and securing systems against threats.",
    image: "https://eu-images.contentstack.com/v3/assets/blt69509c9116440be8/blt8ffb90a2f64bacfa/6776f4544b281ca5e2bc465a/cybersecurity_NicoElNino-AlamyStockPhoto.jpg",
    link: "#",
  },
  {
    id: 6,
    name: "AI & Machine Learning",
    description:
      "Explore artificial intelligence, machine learning models, and neural networks using TensorFlow and Scikit-Learn.",
    image: "https://www.vizrt.com/wp-content/uploads/ai-ml-new20article-vizrt-hdr-img-1920x1080-1.png",
    link: "#",
  },
];


export const COURSE_SERVICES = [
  {
    title: "Full-Stack Web Development",
    description:
      "Master the MERN stack with in-depth projects covering React, Node.js, Express, and MongoDB. Ideal for building complete web apps from scratch.",
    image: "https://blog.hrflow.ai/content/images/2020/04/Full-Stack-Developer.jpg", // Replace later
    alt: "Full stack dev",
  },
  {
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the principles of design, prototyping, and user-centered thinking. This course teaches tools like Figma and Adobe XD for real-world design needs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8zlUfAeKYVcTBWmCDRLO7BEXcCvOHCTvBCQ&s",
    alt: "UI/UX Design Fundamentals",
  },
  {
    title: "Python for Data Science",
    description:
      "Get hands-on with data analysis, data visualization, and machine learning using Python libraries like pandas, matplotlib, and scikit-learn.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_qbA_O1HdWyqq7NxnCzpmnaqTSgVl1_Nk5A&s",
    alt: "Python for Data Science",
  },
];

export const CONTACT_INFO = {
  text: "Have questions or need more information? Get in touch with us, and we’ll be happy to assist you.",
  phone: {
    label: "Phone",
    value: "(123) 456-7890",
  },
  email: {
    label: "Email",
    value: "info@kapils.com",
  },
  address: {
    label: "Address",
    value: "12344_ekantakuna_street-Lalitpur",
  },
};
