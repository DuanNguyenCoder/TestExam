import React from "react";
import {} from "./content.css";
// import image from "../../asset/img/logoNCC.png";
export const Content = (props) => {
  const { image } = props;
  return (
    <div className="content-para">
      <h2>Lorem ipsum dolor sit amet</h2>
      <div className="square">
        <img className="img-para" src={image} alt="" />
      </div>
      <p>
        How many times were you frustrated while looking out for a good
        collection of programming/algorithm /interview questions? What did you
        expect and what did you get? This portal has been created to provide
        well written, well thought and well explained solutions for selected
        questions. An IIT Roorkee alumnus and founder of GeeksforGeeks. He loves
        to solve programming problems in most efficient ways. Apart from
        GeeksforGeeks, he has worked with DE Shaw and Co. as a software
        developer and JIIT Noida as an assistant professor. It is a good
        platform to learn programming. It is an educational website. Prepare for
        the Recruitment drive of product based companies like Microsoft, Amazon,
        Adobe etc with a free online placement preparation course.
      </p>
    </div>
  );
};
