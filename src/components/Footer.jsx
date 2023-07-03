import React from "react";
import My from "../assets/madhu.png";
import {  SiLinkedin, SiGithub, SiRadar } from "react-icons/si";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={My} alt="Founder" />

        <h2>Madhuri Lenka</h2>
        <p>The Best View Comes After The Hardest Climb</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          {/* <a
            href="https://stackoverflow.com/users/21259779/rsan"
            target={"blank"}
          >
            <SiStackoverflow />
          </a> */}
          <a
            href="https://www.linkedin.com/in/madhuri-lenka-913424187"
            target={"blank"}
          >
            <SiLinkedin />
          </a>
          <a href="https://github.com/Madhurilenka" target={"blank"}>
            <SiGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <SiRadar />
      </a>
    </footer>
  );
};

export default Footer;
