import React, { useEffect } from 'react';
import './Home.css';
import image from './assets/main-1.4RTJvEXl_1ovGl4.webp'
import image2 from './assets/sub-2.wF2xkr-7_ZrTQmy.webp'
import image3 from './assets/con-1.X5r3kSpf_ZOJrK8.webp'
import divider from './assets/—Pngtree—ink dividing line rectangle splash_3945577.png'
import partydarty from './assets/sub-1.A_hiu50l_1GJyrv.webp'



function Home() {
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
    <div className="Home">
      <section className='fade-in-element'>
        <header className="Home-Header">
          <div className="Logo-Shit">
            <div>
              <h1>JENOVAH Entertainment</h1>
            </div>
          </div>
        </header>

      </section>
     
      <main className="Home-Body">
        <div className="Header-Divider">
          <div className="Header-Divider-Content fade-in-element">
            <div>
              <h1>Jenovah Entertainment</h1>
            </div>
            <div>
              <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque massa nisl. Etiam ut consequat nisi. Donec rhoncus, nulla vel porttitor placerat, odio quam mattis dolor, tempor pellentesque mi arcu vitae arcu. Aliquam in massa at sem sodales tristique eget et elit. Nam quis imperdiet metus. Donec in finibus turpis. Fusce eu enim felis. Aenean at auctor augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dictum ante. Fusce non sapien enim. Proin ac faucibus tellus, vel venenatis orci.</h3>
            </div>
          </div>
        </div>
        {/* Add more sections as needed */}
        {/* <section className="fade-in-element">
          <h2>About Us</h2>
          <p>Welcome to JENOVAH Entertainment. We are dedicated to providing the best entertainment experience.</p>
        </section>
        <section className="fade-in-element">
          <h2>Our Services</h2>
          <p>We offer a wide range of services including music production, event management, and more.</p>
        </section> */}


          <section className='fade-in-element service-section'>
            <div className="service-Header">
              <h1>Our Services</h1>
            </div>
            <div name="serviceList-head">
              <div className="serviceList">
                <div className="service1">
                  <div className="image-holder" style={{ backgroundImage: `url(${image})` }}>
                    <h2 className="see-more">See More</h2>
                  </div>
                  <h3>PhotoBooths</h3>
                </div>
                <div className="service2">
                  <div className="image-holder" style={{ backgroundImage: `url(${image2})` }}>
                    <h2 className="see-more">See More</h2>
                  </div>
                  <h3>Wedding Events</h3>
                </div>
                <div className="service3">
                  <div className="image-holder" style={{ backgroundImage: `url(${image3})` }}>
                    <h2 className="see-more">See More</h2>
                  </div>
                  <h3>Private Events</h3>
                </div>
              </div>
            </div>
          </section>



          



         {/*Features Section  */}
          <section className="fade-in-element">



            
            <div className="feature-head">
              <div className="Booth">

                <div className="title">
                  <h1>360 Camera Booth</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque massa nisl. Etiam ut consequat nisi. Donec rhoncus, nulla vel porttitor placerat, odio quam mattis dolor, tempor pellentesque mi arcu vitae arcu.</p>
                </div>

                <div className='content'>
                  <video  muted autoPlay Loop className='video-source'>
                    <source src="https://cdn-bz.fotoshare.co/b/39691/-NnpeWloW66ySEps00pp/2024-01-10_202343610.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                  </video>

                </div>


              </div>
            </div>
            <div className="feature-head">
              <div className="Booth">

                <div className='content-party'>
                  <img src={partydarty}></img>
                </div>
                <div className="title">
                  <h1>Custom Selfie Booth</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque massa nisl. Etiam ut consequat nisi. Donec rhoncus, nulla vel porttitor placerat, odio quam mattis dolor, tempor pellentesque mi arcu vitae arcu.</p>
                </div>

                


              </div>
            </div>






          </section>



          <section className="fade-in-element">
            <div className='book-me-now'>
              <div className="Logo-Shit-book">
              <div>
                <h1>JENOVAH Entertainment</h1>
                <p>Book now to capture wonderful Memories</p>
              </div>
              <div className="book-here">
                <a>Book Here</a>
              </div>
            </div>

            </div>
          </section>


          


      </main>
    </div>
  );
}

export default Home;