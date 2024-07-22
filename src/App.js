import './App.css';
import React,{useEffect, useState} from "react";
import ProjectSheet from './components/ProjectSheet';
function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const bodyStyle = {
    width: windowWidth > 1920 ? '1920px' : '100%',
    margin: windowWidth > 1920 ? '0 auto' : '0',
  };
  return (
    <div className=' overflow-hidden' style={bodyStyle}>
    <ProjectSheet/>
    </div>
  )
}

export default App;
