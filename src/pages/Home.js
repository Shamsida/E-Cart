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
        src="https://rforrabbit.com/cdn/shop/files/buy_3_Option.jpg?v=1690613472&width=1880"
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
        src="https://rforrabbit.com/cdn/shop/files/Payday_1920X600_1.jpg?v=1688130679&width=1880"
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
        src="https://rforrabbit.com/cdn/shop/files/Diaper_1920x600-1_1.jpg?v=1689312260&width=1880"
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
        <div style={{display :"inline-grid", gridTemplateColumns:'auto auto auto', columnGap:'45px' ,marginTop:'20px', marginLeft:150}}>
          <Card className='bata' style={{ width: '20rem',height: '30rem'}}>
            <Card.Img className='img' variant="top" onClick={()=> navigate('toys')}
              src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-toys-banner-bg.jpg" />
              <div className="overlay"></div>
              <div className="babykus"> <span>Toys</span></div>
            </Card>

            <Card className='bata' style={{ width: '20rem', height: '30rem' }}>
            <Card.Img variant="top" onClick={()=> navigate('dress')}
              src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-clothes-banner-bg.jpg" />
              <div className="overlay"></div>
              <div className="babyku"> <span>Dress</span></div>
            </Card>
            
            <Card className='bata' style={{ width: '20rem',height: '30rem' }}>
            <Card.Img variant="top"  onClick={()=> navigate('babycare')}
              src="https://websitedemos.net/baby-store-04/wp-content/uploads/sites/750/2020/12/baby-store-nutrition-banner-bg.jpg" />
              <div className="overlay"></div>
              <div className="babyku"> <span>Babycare</span></div>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Home;

