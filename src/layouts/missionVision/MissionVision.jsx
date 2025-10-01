import styles from "./MissionVision.module.css";

export default function MissionVision() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        {/* Vision */}
        <div className={styles.block}>
          <h2 className={styles.bgText}>Our Vision</h2>
          <h3 className={styles.title}>Our Vision</h3>
          <p className={styles.text}>
            To become a leading global recruitment partner by seamlessly connecting businesses
            with diverse, high-quality talent worldwide.
          </p>
          <p className={styles.text}>
            We aim to foster client success, champion diversity and inclusion, and build transparent,
            long-term relationships that empower a thriving, inclusive global workforce.
          </p>
        </div>
        
        <div
          className={styles.poleType}
        ></div>

        {/* Mission */}
        <div className={styles.block}>
          <h2 className={styles.bgText}>Our Mission</h2>
          <h3 className={styles.title}>Our Mission</h3>
          <p className={styles.text}>
            Our mission is to simplify hiring for businesses and open new opportunities for talent.
          </p>
          <p className={styles.text}>
            We provide end-to-end recruitment solutions — from sourcing and assessment to employer
            branding and onboarding — so organizations can focus on growth while we connect them with
            the right people.
          </p>
          <p className={styles.text}>
            Through integrity, innovation, and a commitment to excellence, we help companies build
            high-performing teams and help candidates achieve meaningful careers.
          </p>
        </div>
      </div>
    </section>
  );
}
