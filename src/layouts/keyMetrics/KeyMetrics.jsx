import styles from "./KeyMetrics.module.css";

// Example images (replace with your own in assets/images)
import nairobiImg from "../../assets/images/nairobi.png";
import lagosImg from "../../assets/images/nairobi.png";
import capeTownImg from "../../assets/images/nairobi.png";

export default function KeyMetrics() {
  return (
    <section className={styles.metricsSection}>
      <div className={styles.container}>
        {/* Left Side - City Images */}
        <div className={styles.left}>
          <div className={styles.cityCard}>
            <img src={nairobiImg} alt="Nairobi" />
            <span className={styles.cityLabel}>Nairobi</span>
          </div>

          <div className={styles.cityCard}>
            <img src={lagosImg} alt="Lagos" />
            <span className={styles.cityLabel}>Lagos</span>
          </div>

          <div className={styles.cityCard}>
            <img src={capeTownImg} alt="Cape Town" />
            <span className={styles.cityLabel}>Cape Town</span>
          </div>
        </div>

        {/* Right Side - Metrics */}
        <div className={styles.right}>
          <h2 className={styles.heading}>Our Key Recruitment Metrics</h2>

          <div className={styles.metricCard}>
            <h3>500+</h3>
            <p>Successful Placements Across Africa</p>
          </div>

          <div className={styles.metricCard}>
            <h3>10+</h3>
            <p>Industries Served — IT, Banking, E-commerce & more</p>
          </div>

          <div className={styles.metricCard}>
            <h3>98%</h3>
            <p>Candidate Retention Beyond 3 Months</p>
          </div>

          <div className={styles.metricCard}>
            <h3>14 Days</h3>
            <p>Average Time-to-Hire</p>
          </div>
        </div>
      </div>
    </section>
  );
}
