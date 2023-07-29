import React from 'react'
import './aboutUs.scss'
const AboutUs = () => {
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
          <div className='aboutuscard'>
            <div className='aboutuscardtop'>
              <img src="https://www.the-berkeley.co.uk/siteassets/about-the-hotel/awards-teaser-new.jpg?w=850&h=800&scale=both&mode=crop" alt="Photo1" />
              <div>
                <p>Get the judges' verdicts on everything from our service to room design.</p>
                <span>FIND OUT MORE <i class="fa-solid fa-chevron-right"></i></span>
              </div>
            </div>
            <div className='aboutuscardbottom'>
              <h3>AWARDS</h3> <i class="fa-solid fa-chevron-right hide"></i>
            </div>
          </div>
          <div className='aboutuscard'>
            <div className='aboutuscardtop'>
              <img src="https://www.the-berkeley.co.uk/siteassets/about-the-hotel/history-teaser.jpg?w=850&h=800&scale=both&mode=crop" alt="Photo2" />
              <div>
                <p>Step back in time to find out where it all started. </p>
                <span>FIND OUT MORE <i class="fa-solid fa-chevron-right"></i></span>
              </div>
            </div>
            <div className='aboutuscardbottom'>
              <h3>HISTORY & HERITAGE</h3> <i class="fa-solid fa-chevron-right hide"></i>
            </div>
          </div>
          <div className='aboutuscard'>
            <div className='aboutuscardtop'>
              <img src="https://www.the-berkeley.co.uk/siteassets/about-the-hotel/design--features/honeycomb-teaser.jpg?w=850&h=800&scale=both&mode=crop" alt="Photo3" />
              <div>
                <p>Discover how The Berkeley's rooms read like a who's who in contemporary design. </p>
                <span>FIND OUT MORE <i class="fa-solid fa-chevron-right"></i></span>
              </div>
            </div>
            <div className='aboutuscardbottom'>
              <h3>DESIGN & FEATURES </h3> <i class="fa-solid fa-chevron-right hide"></i>
            </div>
          </div>
          <div className='aboutuscard'>
            <div className='aboutuscardtop'>
              <img src="https://www.the-berkeley.co.uk/siteassets/about-the-hotel/families-teaser.jpg?w=850&h=800&scale=both&mode=crop" alt="Photo4" />
              <div>
                <p>Find out what you - and your mini VIPs - have to look forward to. </p>
                <span>FIND OUT MORE <i class="fa-solid fa-chevron-right"></i></span>
              </div>
            </div>
            <div className='aboutuscardbottom'>
              <h3>SPECIALLY FOR FAMILIES </h3> <i class="fa-solid fa-chevron-right hide"></i>
            </div>
          </div>
          <div className='aboutuscard'>
            <div className='aboutuscardtop'>
              <img src="https://www.the-berkeley.co.uk/siteassets/about-the-hotel/our-people/our-people-teaser-shot.jpg?w=850&h=800&scale=both&mode=crop" alt="Photo5" />
              <div>
                <p>Read stories of day-to-day life behind the scenes at The Berkeley.  </p>
                <span>FIND OUT MORE <i class="fa-solid fa-chevron-right"></i></span>
              </div>
            </div>
            <div className='aboutuscardbottom'>
              <h3>OUR PEOPLE </h3> <i class="fa-solid fa-chevron-right hide"></i>
            </div>
          </div>
        </aside>
      </section>
    </article>
  )
}

export default AboutUs