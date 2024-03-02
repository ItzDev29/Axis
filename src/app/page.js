'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import SlidingImages from '../components/SlidingImages';
import Contact from '../components/Contact';
import GoToTopButton from '../components/GoToTop/Go';
import Director from '../components/Director/Director';
import Count from '../components/Count/page';
import Line from '../components/Line/page';
import Speaker from '../components/Speakers/Speaker'

export default function App(){
  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 3000)
      }
    )()
  }, [])

  return (
    <main className={styles.main} >
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Count/>
      <Director/>
      <Line/>
      {/* <Description /> */}
      <Projects />
      <Speaker/>
      <SlidingImages />
      <GoToTopButton/>
      <Contact />
    </main>
  )
}
