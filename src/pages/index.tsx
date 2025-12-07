import React, { useState, useEffect } from 'react';
import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const phrases = [
    "By Umer Iqbal",
    "Empowering Robotics with AI",
    "NVIDIA Isaac™ Platform",
    "Next-Gen Robotic Solutions"
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    }, 3000); // Change phrase every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          The AI-Robot Brain (NVIDIA Isaac™)
        </Heading>
        <p className="hero__subtitle">
          {phrases[currentPhraseIndex]}
        </p>
        <div className={styles.buttons}>
          <Link
            className={styles.primaryButton}
            to="/docs/intro">
            Read Book
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`The AI-Robot Brain (NVIDIA Isaac™)`}
      description="Documentation for The AI-Robot Brain (NVIDIA Isaac™) by Umer Iqbal.">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
