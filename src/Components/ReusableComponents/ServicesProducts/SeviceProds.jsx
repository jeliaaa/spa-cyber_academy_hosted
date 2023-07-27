import React from 'react'
import Article from '../ArticleCard/Article'

const SeviceProds = () => {
    const prods = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
    return (
        <div className='products' style={{ display: 'flex', flexWrap: 'wrap', gap:'30px', padding:'20px' }}>
            {prods.map((id) => {
                return (
                    <Article key={id} />
                )
            })}
        </div>

    )
}

export default SeviceProds