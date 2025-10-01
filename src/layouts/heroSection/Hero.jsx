import Lottie from "lottie-react";
import styles from "./Hero.module.css";
import heroAnimation from "../../assets/animations/Connect_People.json"; // replace with your JSON
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section 
      className={styles.hero}
    >
      {/* Left Side - Text Content */}

      <div className={styles.content} >
        
        <span
          style={{
            textTransform:"uppercase",
            fontSize:"1.2rem",
          }}
        > We are #1 On the Market
        </span>

        <h1>Your Trusted Recruitment Partner in Africa & Beyond</h1>
  
        <p>
          We specialize in sourcing, screening, and placing top talent across industries to help your business thrive.
          </p>
        
        <div className={styles.actions}>
          <Link to="/services" className={"headerButton_blue"}>
            Our Services
          </Link>
          <Link to="/contact" className={"headerButtonWhite"}>
            Contact Us
          </Link>
        </div>
      </div>


      {/* Right Side - Lottie Animation */}
      <div className={styles.animation}>
        <Lottie 
          animationData={heroAnimation} 
          loop={true} 
          // style={{ width: 600, height: 400 }}
        />
      </div>

    </section>
  );
}