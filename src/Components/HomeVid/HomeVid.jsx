import React from 'react'
import { Link } from 'react-scroll'
import './HomeVid.scss'
const HomeVid = () => {
    return (
        <div className='homevid_container'>
            <video width={'100%'} src="https://www.the-berkeley.co.uk/siteassets/homepage/the-berkeley-website-v3.mov" autoPlay muted loop></video>
            <div className="scroll_button_container">
                <Link
                    to='HeroScrollElement'
                    smooth={true}
                    duration={100}
                    className="scroll-button"
                >
                    <i className='fa-solid fa-chevron-down fa-2xl'></i>
                </Link>
            </div>
        </div>
    )
}

export default HomeVid