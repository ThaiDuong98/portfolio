import { useEffect, useRef, useState } from 'react';
import "react-vertical-timeline-component/style.min.css";
import './App.css';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import HeaderPage from './components/header/Header';
import Projects from './components/projects/Projects';


function App() {
  const scrollRef = useRef(null);
  const [activeMenu, setActiveMenu] = useState(0)

  const handleClick = () => {
    scrollRef.current?.scrollIntoView({behavior: 'smooth', block: 'start'});
  };

  const observeActiveComponent = (active) => {
    console.log("active", active)
    setActiveMenu(active)
  }

  return (
    <div>
      <HeaderPage scrollRef={scrollRef} handleClick={handleClick} activeHeaderMenu={activeMenu} observeActiveComponent={observeActiveComponent}/>
      <About scrollRef={scrollRef} observeActiveComponent={observeActiveComponent}/>
      <Experience scrollRef={scrollRef} observeActiveComponent={observeActiveComponent}/>
      <Projects scrollRef={scrollRef} observeActiveComponent={observeActiveComponent}/>
    </div>
  );
}

export default App;
