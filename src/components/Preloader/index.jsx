'use client';
import styles from './style.module.scss';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { slideUp } from './anim';

export default function Index() {
    const videoRef = useRef(null);

    return (
        <motion.div variants={slideUp} initial="initial" exit="exit" className={styles.introduction}>/

              <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{ objectFit: 'cover', width: 'full', height: 'full' }}
      >
        <source src="/video/Load.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </motion.div>
    )
}
