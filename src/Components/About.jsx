/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/w2.jpg";

const imageAltText = " About background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Hello, I'm Tuaha Zaheen, an Electrical Engineering undergraduate student at Bahria University Islamabad, with a fervent passion for leveraging technology to create positive impacts. As I pursue my studies, I am driven by the belief in utilizing cutting-edge technologies to address complex challenges and foster innovation. My journey in the field of Electrical Engineering is propelled by a desire to embrace the evolving landscape of technology and to champion student leadership within the tech community. With a focus on harnessing technology to make a meaningful difference, I am committed to exploring novel solutions that hold the potential to transform industries and enrich lives. Currently, I am honored to serve as a Microsoft Learn Student Ambassador, while also leading initiatives at Google Developers-GDSC & IEEE at BUIC. These roles have not only allowed me to refine my leadership and organizational skills but have also provided invaluable insights into project management and the significance of effective team collaboration. Driven by a relentless pursuit of excellence, I am excited about the possibilities that lie ahead and eager to contribute to the advancement of technology for the betterment of society.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Engineering Solutions",
  "Digital Marketing",
  "Resume Writing",
  "Content Creation",
  "Graphic Design",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am deeply passionate about exploring new avenues for problem-solving, driven by a relentless desire to drive innovation forward. With a foundation in Electrical Engineering, I am dedicated to discovering novel solutions that empower accessibility and inclusivity in technology, prioritizing user-centric approaches in all my endeavors..";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
