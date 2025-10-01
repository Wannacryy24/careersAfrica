import styles from "./Stats.module.css";
import { FaUserTie, FaIndustry, FaShieldAlt, FaStopwatch } from "react-icons/fa";
import targetIcon from "../../assets/icons/target.png"; 

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Stats() {
  // Hook to detect when the stats section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.3,    // when 30% of section is visible
  });

  return (
    <section className={styles.statsSection} ref={ref}>
      <div className={styles.container}>
        {/* Left Side - Heading + Subtext */}
        <div className={styles.left}>
          <div className={styles.headingWrapper}>
            <h1 className={styles.heading}>
              We have great achievements to show
            </h1>
            <img
              src={targetIcon}
              alt="Achievements icon"
              className={styles.headingIcon}
            />
          </div>
          <p className={styles.subtext}>
            We take pride in delivering measurable results — from faster hiring
            times to long-term candidate success. Here’s a quick look at our
            impact.
          </p>
        </div>

        {/* Right Side - Stats Cards */}
        <div className={styles.right}>
          <div className={styles.card}>
            <FaUserTie className={styles.icon} />
            <div>
              <h3>
                {inView && <CountUp end={500} duration={5} />}+
              </h3>
              <p>Successful Placements Across Industries</p>
            </div>
          </div>

          <div className={styles.card}>
            <FaIndustry className={styles.icon} />
            <div>
              <h3>
                {inView && <CountUp end={10} duration={3} />}+
              </h3>
              <p>Industries Served</p>
            </div>
          </div>

          <div className={styles.card}>
            <FaShieldAlt className={styles.icon} />
            <div>
              <h3>
                {inView && <CountUp end={98} duration={5} />}%
              </h3>
              <p>Candidate Retention Beyond 3 Months</p>
            </div>
          </div>

          <div className={styles.card}>
            <FaStopwatch className={styles.icon} />
            <div>
              <h3>
                {inView && <CountUp end={14} duration={3} />} Days
              </h3>
              <p>Average Time-to-Hire</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
