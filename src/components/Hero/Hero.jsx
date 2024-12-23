/* eslint-disable no-unused-vars */
import React from 'react'
import heroImg from '/assets/hero/heroImage.png'
import styles from './Hero.module.css';
function Hero(){
    return(
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I’m Simran</h1>
            <p className={styles.description}>I’m a Software Engineer and Web Developer who turns ideas into modern, user-friendly websites and apps that stand out</p>
            <a href="mailto:simrankasare5@gmail.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={heroImg} alt='hero image for me' className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>

    </section>)
}

export default Hero