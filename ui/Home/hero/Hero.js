'use client';
import React from "react";
import styles from './Hero.module.css';
import ImageSlider from "./ImageSlider/ImageSlider";

const Hero = () => {
    return (
        <section className={styles.container}>
            <ImageSlider />
        </section>
    );
};

export default Hero;