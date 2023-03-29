import React,{useState} from 'react'
import Video from "../../component/Video/video.mp4"
import { HeroContainer,HeroBg,VideoBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';
import {Button} from '../ButtonElement';
const HeroSection = () => {
    const[hover,setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }
  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Welcome To The Site</HeroH1>
            <HeroP>Coming Soon Stay Tuned</HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} 
                onMouseLeave={onHover}>
                    Get started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
    
  )
};

export default HeroSection 