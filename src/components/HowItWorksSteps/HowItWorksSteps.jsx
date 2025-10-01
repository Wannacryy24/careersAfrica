// HowItWorksSteps.jsx
import React from 'react';
import styles from './HowItWorksSteps.module.css';

export default function HowItWorksSteps({ steps, heading, subtext }) {
  return (
    <section className={styles.section}>
      {/* Heading + Subtext (if provided) */}
      {heading && <h2 className={styles.heading}>{heading}</h2>}
      {subtext && <p className={styles.subtext}>{subtext}</p>}

      <div className={styles.grid}>
        {steps.map((step, index) => {
          const Icon = step.icon; // ✅ grab the component reference
          return (
            <div key={step.id} className={styles.card}>

              {/* Icon */}
              <div className={styles.icon}>
                <Icon className="text-3xl text-blue-500" /> {/* ✅ render it */}
              </div>

              {/* Text */}
              <div className={styles.text}>
                
                <h2>Step {index + 1}:</h2>
                
                <h2>{step.title}</h2>
                
                <p>{step.description}</p>

              </div>

            </div>

          );

        })}

      </div>

    </section>
  );
}
