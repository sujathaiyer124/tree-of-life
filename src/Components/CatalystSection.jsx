import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import facebookIcon from './assets/facebook.png';
import twitterIcon from './assets/youtube.png';
import instagramIcon from './assets/insta.png';
import flower1 from './assets/img2.jpg';
import flower2 from './assets/img5.jpeg';
import flower3 from './assets/img6.jpeg';
import { ArrowDown } from 'lucide-react';
const CatalystSection = () => {
    const [scrollY, setScrollY] = useState(0);
    const [visibleIndex, setVisibleIndex] = useState(0);

    // Update scroll position for parallax effect
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Show bullet points one by one
    useEffect(() => {
        const timer = setInterval(() => {
            setVisibleIndex((prev) => (prev < bulletPoints.length - 1 ? prev + 1 : prev));
        }, 3000); // New bullet point every 3 seconds
        return () => clearInterval(timer);
    }, []);

    const getParallaxStyle = (speed) => ({
        transform: `translateY(${scrollY * speed}px)`,
    });

    const iconToFlower = [
        { socialIcon: facebookIcon, flowerImage: flower1, context: 'Privacy Issues' },
        { socialIcon: twitterIcon, flowerImage: flower2, context: 'Misinformation' },
        { socialIcon: instagramIcon, flowerImage: flower3, context: 'Addiction' },
    ];

    const bulletPoints = [
        'Social media” is a broken term, loaded with negative connotations.',
        'Empty, corrupted media and content have taken over our lives.',
        'We are more digitally connected than ever yet starved for genuine relationships.',
        'Instagram and TikTok have over 1 billion users each, perpetuating addiction.',
        'Replacement is more powerful than elimination, as proven by B.F. Skinner.',
        'Social media rewards superficial engagement over meaningful connection.',
        'Bloom is the replacement we need to rediscover what it means to connect.',
        'Though chaotic, there is beauty in our resilience and vision for a brighter future.',
    ];

    return (
        <div
            style={{
                position: 'relative',
                height: '200vh',
                backgroundColor: '#D8F3DC',
                color: '#fff',
                overflow: 'hidden',
            }}
        >
            {/* Foreground: Bold Statements */}
            <div
                className="foreground-text"
                style={{
                    position: 'sticky',
                    top: '10%',
                    textAlign: 'center',
                    zIndex: 3,
                }}
            >
                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#1B4332' }}
                >
                    Social media as we know it is broken.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1 }}
                    style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#1B4332' }}
                >
                    Bloom offers a healthier, thriving alternative.
                </motion.p>
            </div>

            {/* Layer 1: Abstract Animations */}
            <div className="icon-flower-layer" style={{ position: 'absolute', top: 0, width: '100%' }}>
                {iconToFlower.map((item, i) => (
                    <motion.div
                        key={i}
                        style={{
                            position: 'absolute',
                            left: `${10 + i * 30}%`,
                            top: `${10 + i * 20}%`,
                            textAlign: 'center',
                        }}
                    >
                        <motion.img
                            src={item.socialIcon}
                            alt={`social-icon-${i}`}
                            initial={{ opacity: 1, scale: 1 }}
                            animate={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 5, delay: i * 3 }}
                            style={{ width: '120px', height: '120px', marginBottom: '0.5rem' }}
                        />
                        <motion.img
                            src={item.flowerImage}
                            alt={`flower-${i}`}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 5, delay: i * 3 + 2 }}
                            style={{ width: '150px', height: '150px' }}
                        />
                    </motion.div>
                ))}
            </div>

            {/* Bullet Points */}
            <div
                className="bullet-points"
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 2,
                    fontSize: '30px',
                    textAlign: 'center',
                    color: '#1B4332',
                    lineHeight: '2rem',
                    padding:'30px'
                }}
            >
                {bulletPoints.slice(0, visibleIndex + 1).map((point, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        style={{ marginBottom: '1rem' }}
                    >
                        • {point}
                    </motion.div>
                ))}
            </div>
 
                {/* Problem-to-Solution Transition: Two Panels */}
                <div
                className="transition-section"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '60px 20px',
                    position: 'absolute',
                    bottom: '10%',
                    left: '10%',
                    right: '10%',
                    zIndex: 2,
                }}
            >
                {/* Panel 1: The Problem */}
                <div
                    className="problem-panel"
                    style={{
                        width: '48%',
                        padding: '20px',
                        background: '#2d3748',
                        borderRadius: '10px',
                        color: '#fff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    }}
                >
                    <h2 style={{ color: '#95D5B2' }}>Social Media Problems</h2>
                    <ul style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li>Doomscrolling</li>
                        <li>Superficial Engagement</li>
                        <li>Isolation</li>
                    </ul>
                    <p style={{ fontSize: '1.2rem' }}>
                        Social media, despite connecting us globally, has become a source of disconnection,
                        superficiality, and digital addiction.
                    </p>
                </div>

                {/* Panel 2: The Solution (Bloom) */}
                <div
                    className="solution-panel"
                    style={{
                        width: '48%',
                        padding: '20px',
                        background: '#0096FF',
                        borderRadius: '10px',
                        color: '#fff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                    }}
                >
                    <h2 style={ {color: '#95D5B2' }}>Bloom: The Solution</h2>
                    <ul  style={{ listStyle: 'none', paddingLeft: '0' }}>
                        <li>Human Flourishing</li>
                        <li>Connection</li>
                        <li>Purposeful Interaction</li>
                    </ul>
                    <p style={{ fontSize: '1.2rem' }}>
                        Bloom is a digital garden that offers a healthier, more meaningful way to connect
                        and grow. It thrives on authentic interactions that nurture the human spirit.
                    </p>
                </div>
            </div>
            {/* Visual Cue: Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 5 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                }}
            >
                <ArrowDown className="arrow-icon" style={{ fontSize: '2rem',color: 'black'  }} />
            </motion.div>

            <style jsx>{`
          @keyframes scroll-text {
            0% {
              transform: translateY(0);
            }
            100% {
              transform: translateY(-100%);
            }
          }
  
          .arrow-icon {
            animation: bounce 2s infinite;
          }
  
          @keyframes bounce {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
        </div>
    );
};

export default CatalystSection;
