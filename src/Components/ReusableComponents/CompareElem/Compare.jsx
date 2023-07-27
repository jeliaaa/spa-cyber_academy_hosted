import React from 'react'
import './Compare.scss'
const Compare = () => {
    return (
        <div className="compare_container">
            <div className='compare_wrapper'>
                <div className='filter_btns'>
                    <button className='compare_button' >rooms <i className='fa-regular fa-plus'></i></button>
                    <button className='compare_button' >suites <i className='fa-regular fa-plus'></i></button>
                    <button className='compare_button' >signature suites <i className='fa-regular fa-plus'></i></button>
                </div>

                <p>Select up to 4 rooms to compare</p>
                <button className='compare_btn'>compare now</button>
            </div>
        </div>

    )
}

export default Compare