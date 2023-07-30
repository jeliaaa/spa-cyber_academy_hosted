import React, {useEffect} from 'react'
import Article from '../ReusableComponents/ArticleCard/Article'
import './aboutUs.scss'
const aboutUs = [0,1,2,3,4];
const AboutUs = () => {
  var Scroll = require('react-scroll');
  var scroll = Scroll.animateScroll;
  useEffect(() => {
    scroll.scrollToTop();
  }, [])
  return (
    <article className='aboutusmaincontainer'>
      <section className='aboutusfirstchildcontainer'>
        <aside>
          <video poster=' https://www.the-berkeley.co.uk/siteassets/about-the-hotel/about-the-hotel-landing-hero.jpg' controls>
            <source  src='https://www.the-berkeley.co.uk/siteassets/videos/the-berkeley_recut-video_540p.mp4' type="video/mp4" />
          </video>
        </aside>
      </section>
      <section className='aboutussecondchildcontainer'>
        <aside>
          <h2>ABOUT THE HOTEL</h2>
          <div>
            <p>The Berkeley has been treading its own path for more than 100 years. From here, midway between fashionable Knightsbridge and neighbourly Belgravia, we're still taking style, comfort and service to inspiring new levels. There's nowhere quite like it. And that's the way we love it.</p>
            <p>Stunning rooms by the brightest minds in the design world. Intuitive service that always seems one step ahead. From the moment you walk in, the hotel begins to work its magic. With many guests returning year after year, it's a spell that's hard to break.</p>
          </div>
        </aside>
      </section>
      <section className='aboutusthirdchildcontainer'>
        <aside>
          {aboutUs.map(() => {
            return(
              <Article />
            )
          })}
        </aside>
      </section>
    </article>
  )
}

export default AboutUs