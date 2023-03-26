import React from 'react'
import Video from '../../video/mp4'

const HeroSection = () => {
  return (
    <HeroSection>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
    </HeroSection>
    
  )
};

export default HeroSection