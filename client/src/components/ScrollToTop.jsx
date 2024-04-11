import React ,{useState,useEffect} from 'react'
import {FaAngleDoubleUp} from 'react-icons/fa'

const ScrollToTop = () => {
    const [showScroll,setShowScroll]=useState(false);

    useEffect(() => {
        window.addEventListener('scroll',() => {
            if(window.scrollY >300){
                setShowScroll(true);
            }else{
                setShowScroll(false);
            }
        })
        
    },[])

    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behaviour:"smooth",
        });
      }


  return (
    <div>
        {showScroll && <FaAngleDoubleUp className="scrollbutton  topstyle" onClick={scrollTop}/>}
    </div>
  )
}

export default ScrollToTop