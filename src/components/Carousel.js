import React, { useEffect, useState } from 'react';

const Carousel = () => {
    const [postIndex, setPostIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    setPostIndex((oldPostIndex) => oldPostIndex === 2 ? 0 : oldPostIndex + 1);
                    return 0;
                }
                return oldProgress + 1;
            });
        }, 100); // 180

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="carousel">
            <div className="progress-bar progress-bar--primary hide-on-desktop">
                <div className="progress-bar__fill" style={{ width: `${progress}%` }}></div>
            </div>
            <header className="main-post-wrapper">
                <div className="slides">
                    {[
                        { title: 'Puerto Rico', media: require('../assets/PR.mp4') },
                        { title: 'Discover Tokio', image: require('../assets/Tokio.jpg') },
                        { title: 'Perú', image: require('../assets/Peru.jpg') }
                    ].map((post, index) => (
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
};

export default Carousel;
