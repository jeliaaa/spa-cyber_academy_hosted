import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
        <section className="footer_left">
            <div className="link_cols_wrapper">
            <div className="links_col">
                <h3>Suites</h3>
                <ul>
                    <li>ALEXALEX</li>
                    <li>ALEXALEX</li>
                    <li>ALEXALEX</li>
                    <li>ALEXALEX</li>
                    <li>ALEXALEX</li>
                    <li>ALEXALEX</li>
                    <li>ALEXALEX</li>
                </ul>
                <h3>Gifts</h3>
                <ul>
                    <li>ACHIACHI</li>
                    <li>ACHIACHI</li>
                </ul>
            </div>
            <div className="links_col">
                <h3>About</h3>
                <ul>
                    <li>TINITINI</li>
                    <li>TINITINI</li>
                    <li>TINITINI</li>
                    <li>TINITINI</li>
                </ul>
                <h3>Hotel</h3>
                    <ul>
                        <li>NIKONIKO</li>
                        <li>NIKONIKO</li>
                        <li>NIKONIKO</li>
                        <li>NIKONIKO</li>
                        <li>NIKONIKO</li>
                        <li>NIKONIKO</li>
                    </ul>
            </div>
            </div>
            <div className="contacts">
                <h2>FOLLOW US</h2>

            </div>
        </section>
        <div className="vertical"></div>
        <section className="footer_right">
            <div className="footer_right_content">
            <h2>SIGNUP</h2>
            <input type="email" name="email" placeholder='Email' />
            <h2>FIND US</h2>
            <img src="https://picsum.photos/300/300" alt="..." />
            <select name="as" id="as" value={1}>
            <option value='1'>
            FACTS
            </option>
            <option value='2'>
            FACTS
            </option>
            </select>   
            
            </div>
            
        </section>
    </footer>
  )
}

export default Footer