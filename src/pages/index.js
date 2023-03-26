import React,{useState} from 'react';
import Sidebar from '../component/Sidebar'
import Navbar from '../component/Navbar';
const Home = () => {
  const [isOpen,setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Sidebar isOpen={isOpen} toggle={toggle}/>
    <Navbar toggle={toggle}/>
    <HeroSection />
    </>
  )
}

export default Home