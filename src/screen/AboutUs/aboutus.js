import React, { useEffect } from 'react';

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
        <main>
            <section>







                
            </section>












        </main>
    )
}


export default AboutUs