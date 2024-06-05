import React, { useState, useEffect, useCallback } from 'react';

const Carousel = React.memo(() => {
    const [postIndex, setPostIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const slides = [
        { title: 'Puerto Rico: Vibrant Caribbean Charm', image: require('../assets/carolina.jpg') },
        { title: 'Japan: Tradition Meets Tomorrow', image: require('../assets/Tokio.jpg') },
        { title: 'Perú: Land of Ancient Wonders', image: require('../assets/Peru.jpg') }
    ];

    // Función para avanzar al siguiente slide o reiniciar
    const advanceSlide = useCallback(() => {
        setPostIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
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
        return () => cancelAnimationFrame(frame);
    }, [advanceSlide]);

    return (
        <div className="carousel">
            <div className="progress-bar progress-bar--primary hide-on-desktop">
                <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
            </div>
            <header className="main-post-wrapper">
                <div className="slides">
                    {slides.map((post, index) => (
                        <article
                            key={index}
                            className={`main-post ${postIndex === index ? 'main-post--active' : 'main-post--not-active'}`}
                        >
                            <div className="main-post__image">
                                {post.media ? (
                                    <video autoPlay loop muted>
                                        <source src={post.media} type="video/mp4" />
                                    </video>
                                ) : (
                                    <img src={post.image} alt={post.title} />
                                )}
                            </div>
                            <div className="main-post__content">
                                <h1 className="main-post__title">{post.title}</h1>
                                <a className="main-post__link" href="#">
                                    <span className="main-post__link-text">find out more</span>
                                    <svg
                                        className="main-post__link-icon main-post__link-icon--arrow"
                                        width="37"
                                        height="12"
                                        viewBox="0 0 37 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11"
                                            stroke="white"
                                        />
                                    </svg>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </header>
        </div>
    );
});

export default Carousel;
