import React, { useState, useEffect, useCallback } from 'react';

import '../styles/Carousel.scss' ;

import carolinaImage from '../assets/carolina.jpg';
import tokioImage from '../assets/Japon.jpg';
import peruImage from '../assets/Peru.jpg';

const Carousel = React.memo(() => {
    const [postIndex, setPostIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const slides = [
        { title: 'Puerto Rico: Vibrant Caribbean Charm', image: carolinaImage },
        { title: 'Japan: Tradition Meets Tomorrow', image: tokioImage },
        { title: 'Perú: Land of Ancient Wonders', image: peruImage }
    ];

    const advanceSlide = useCallback(() => {
        setPostIndex(prevIndex => (prevIndex + 1) % slides.length); 
        setProgress(0);
    }, [slides.length]);

    useEffect(() => {
        let frame;
        let start;

        const animateProgress = (timestamp) => {
            if (!start) start = timestamp;
            const runtime = timestamp - start;
            const relativeProgress = Math.min(runtime / 10000, 1);

            setProgress(relativeProgress * 100);

            if (relativeProgress < 1) {
                frame = requestAnimationFrame(animateProgress);
            } else {
                advanceSlide();
                start = null; 
                frame = requestAnimationFrame(animateProgress);
            }
        };

        frame = requestAnimationFrame(animateProgress);
        return () => {
            cancelAnimationFrame(frame);
        };
    }, [advanceSlide]);

    return (
        <header className="Header carousel">
            <div className="progress-bar progress-bar--primary hide-on-desktop">
                <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
            </div>
            <div className="main-post-wrapper">
                <div className="slides">
                    {slides.map((slide, index) => (
                        <article
                            key={slide.title}  
                            className={`main-post ${postIndex === index ? 'main-post--active' : 'main-post--not-active'}`}
                        >
                            <div className="main-post__image">
                                <img src={slide.image} alt={slide.title} />
                            </div>
                            <div className="main-post__content">
                                <h1 className="main-post__title">{slide.title}</h1>
                                <p className="main-post__link">
                                    <span className="main-post__link-text">Discover More Below ↓</span>
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </header>
    );
});

export default Carousel;
