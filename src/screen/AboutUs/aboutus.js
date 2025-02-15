import React, { useEffect } from 'react';
import img1 from './assets/image.png'
import './aboutus.css';

function AboutUs() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                }
            });
            },
            {
            threshold: 0.1, // Adjust this value as needed
            }
        );

        const elements = document.querySelectorAll('.fade-in-element');
        elements.forEach((element) => {
            observer.observe(element);
        });

        return () => {
            elements.forEach((element) => {
            observer.unobserve(element);
            });
        };
        }, []);



    return (
        <main className="Main">
            <section className='fade-in-element'>
                <div className="Header-Imager">
                    <div className='Header-Bodyer'>
                        
                    </div>
                </div>
            </section>


            {/* Content Section */}
            <div className="Gotchabit">

            <div className="Iam">
                <div className="Message-1">
                    <img src={img1} />;
                </div>

                <div className="Message-2">
                    {/* This will be with the words and shit ya feel me */}
                    <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
                </div>
            </div>





            </div>





        </main>
    )
}


export default AboutUs