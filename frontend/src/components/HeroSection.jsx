import React from 'react';

function HeroSection() {
  return (
    <div className='section'>
        <div className='col'>
            <h1 className='title'>What We Are About</h1>
            <p className='info'>At Culinary Compass, we believe that exploring the world of flavors should be an exciting journey for every cooking enthusiast. Our platform is more than just a recipe finder – it's a culinary companion on your quest for delightful, homemade meals. So start exploring now</p>
            <button className='btn'>
                explore now
            </button>
        </div>
        <div className='col'>
            col 2
        </div>
    </div>
  )
}

export default HeroSection;