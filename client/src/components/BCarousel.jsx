import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function BCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  

  return (

    <div>
    
    <div>
    <h3 className='font' style={{color:"white"}}>
    <b>Some of the Top Companies Visiting Anually are listed below</b>
    </h3>
    <Carousel  activeIndex={index} onSelect={handleSelect} variant="dark">
      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block "
          src="https://mms.businesswire.com/media/20210709005090/en/890318/22/New_Tech_M_Logo_High-res_highres.jpg"
          alt="Tech Mahindra"
        />
        
      </div>
        <Carousel.Caption>
          <h3>Tech Mahindra</h3>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/01/jio-1643013409.jpg"
          alt="Second slide"
        />
      </div>

        <Carousel.Caption>
          <h3>Jio</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://images.moneycontrol.com/static-mcnews/2018/10/Bajaj-Finserv-Logo.jpg?impolicy=website&width=1600&height=900"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Bajaj Finserv</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://static.businessworld.in/article/article_extra_large_image/1577080748_tt0Wlk_tata_power.jpg"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Tata Power</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://d34k7i5akwhqbd.cloudfront.net/allspark/static/images/indeed-share-image-9581a8.png"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Indeed</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://www.gala-global.org/sites/default/files/Microsoft_Corporation_27.jpg"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Microsoft</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://mma.prnewswire.com/media/565452/o_redbadge_digital_master.jpg?p=facebook"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Oracle</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://thenftimes.com/wp-content/uploads/2022/11/New-PhonePe-Logo-1.png"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>PhonePe</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://www.freshersvoice.com/wp-content/uploads/2022/11/IBM-Off-Campus-2023.png?ezimgfmt=rs:396x193/rscb1/ngcb1/notWebP"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>International Buisness Machines</h3>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
      <div className='caimag'>
        <img
          className="d-block"
          src="https://images3.alphacoders.com/807/807602.jpg"
          alt="Third slide"
        />
      </div>
        <Carousel.Caption>
          <h3>Hewlett-Packard</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      
      
    </Carousel>
    </div>
    </div>
  );
}

export default BCarousel