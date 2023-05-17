import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom"; 
import './Home.css';


function Home() {
  const navigate = useNavigate();
  return (
    <div >
    <Carousel className='slide'>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://popees.com/pub/media/slideshow/cache/2000x500/Web-Banner_Long_Newborn.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://popees.com/pub/media/slideshow/cache/2000x500/Web-Banner_Long_Powder_2.jpg"
        alt="Second slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://rforrabbit.com/pub/media/feather_soft_diaper_1723x507.jpg"
        alt="Third slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://cdnext.fynd.com/catalog/brandstore/Mothercare/318-2023_04_11-MC_Banner_NewCollectionNursery_1920x650_05.04.23_2x_100.jpg"
        alt="Fourth slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://cdnext.fynd.com/catalog/brandstore/Mothercare/318-2023_04_11-MC_WebBanner_Pushchair_amp_Strollers_1920x650_05.04.23_2x_100.jpg"
        alt="Fifth slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://rforrabbit.com/pub/media/sale1_1723x507.jpg"
        alt="Sixsth slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img 
        className="d-block w-100"
        src="https://rforrabbit.com/pub/media/mothersday_1723x507.jpg"
        alt="Seventh slide"
      />
      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    </Carousel>

    <div className='items'>
      <h3 style={{marginTop:'10px', marginLeft:550}}>Shop By Category</h3>
        <div style={{display :"inline-grid", gridTemplateColumns:'auto auto auto', columnGap:'45px' ,marginTop:'20px', height:'20rem', marginLeft:150}}>
          <Card style={{ width: '20rem',height: '30rem'}}>
            <Card.Img variant="top" onClick={()=> navigate('/toys')}
              src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-toys-banner-bg.jpg" />
            </Card>
            <Card style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" onClick={()=> navigate('/dress')}
              src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-clothes-banner-bg.jpg" />
            </Card>
            <Card style={{ width: '20rem',height: '30rem' }}>
            <Card.Img variant="top" onClick={()=> navigate('/babycare')}
              src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-nutrition-banner-bg.jpg" />
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Home;

