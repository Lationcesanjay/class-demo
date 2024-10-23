// import React, { useState,useRef } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-solid-svg-icons';
// import "../CssFile/style.css";
// import defaultProfile from "../assets/nature.jpg";  

// export const HomePage = () => {
//   const [profilePic, setProfilePic] = useState(defaultProfile);  
//   const fileInputRef = useRef(null);
//      const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setProfilePic(reader.result);  
//       };
//       reader.readAsDataURL(file);  
//     }
//   };
//   const IocnClick = () => {
//     if (fileInputRef.current) {
//       fileInputRef.current.click();  
//     }
//   };
//   return (
//     <div className="resume">
//       <div>
//         <h1>Sanjay</h1>
//         <h2>Web Developer</h2>
//         <p>Email: email@example.com</p>
//         <p>Phone: (123) 456-7890</p>
//       </div>
//       <div className="img-con">
//         <img src={profilePic} alt="Profile" className="profile-pic" />
//         <div className="edit-icon1">
//           <FontAwesomeIcon icon={faEdit} onClick={IocnClick} />
//         </div>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleFileChange}
//           ref={fileInputRef}  
//           style={{ display: 'none' }}  
//         />
//       </div>
  
//       <div>
//         <h3>Experience</h3>
//         <ul>
//           <li>
//             <strong>MERN Stack Web Developer</strong> at Sensation Technology
//             (2024 - Present)
//             <p>Responsibilities and achievements...</p>
//           </li>
//           <li>
//             <strong>Previous Job Title</strong> at Previous Company (2018 - 2020)
//             <p>Responsibilities and achievements...</p>
//           </li>
//         </ul>
//       </div>
//       <div>
//         <h3>Education</h3>
//         <ul>
//           <li>
//             <strong>Diploma</strong> in Computer Engg. at Seth Jai Prakash Polytechnic (2024)
//           </li>
//         </ul>
//         <h3>Skills</h3>
//         <ul>
//           <li>HTML</li>
//           <li>CSS</li>
//           <li>JavaScript</li>
//           <li>React JS</li>
//         </ul>
//       </div>
//     </div>
//   );
//   };

// HomePage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Css/homepage.css'; // Import CSS file

export const HomePage = () => {
  return (
    <div className="homepage">
  <h1 className="title">
    Welcome to My Homepage!
  </h1>

  <p className="description">
    Enjoy to Learn Full-Stack Web Developer.
  </p>

  <button className="cta-button">
    Get Started
  </button>
</div>

  );
};
 

