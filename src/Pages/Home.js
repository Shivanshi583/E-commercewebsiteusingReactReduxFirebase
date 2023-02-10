import React ,{useState,useEffect} from 'react';
import Helmet from '../Components/Helmet/Helmet';
import {Container,Row,Col} from "reactstrap";
import heroImg from '../Assets/Images/heroImg.png';
import Clock  from '../Components/UI/Clock';
import "../styles/home.css";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import Services from '../Services/Services';
import ProductList from '../Components/UI/ProductList';
import products from '../Assets/Data/Products';
import counterImg from '../Assets/Images/counter-timer-img.png';

const Home = () => {

  const [trendingProducts,setTrendingProducts] = useState([]);
  const [bestSalesProducts,setBestSalesProducts] = useState([]);
  const [mobileProducts,setMobileProducts] =useState([]);
  const [wirelessProducts,setWirelessProducts] = useState([]);
  const [popularProducts,setPopularProducts] = useState([]);
  const year =new Date().getFullYear();
  useEffect(()=>{
  const filteredTrendingProducts = products.
    filter(item=>
       item.category =="chair");
   
  const filteredBestSalesProducts = products.
   filter(item=>
     item.category=="sofa");

  const filteredMobileProducts = products.
    filter(item=>
      item.category=='mobile'
    );
    const filteredWirelessProducts = products.
    filter(item=>
      item.category=='wireless'
    );

   const filteredPopularProducts =products.
   filter(item=>
    item.category=='watch'
    );
 setTrendingProducts(filteredTrendingProducts);
 setBestSalesProducts(filteredBestSalesProducts);
 setMobileProducts(filteredMobileProducts);
 setWirelessProducts(filteredWirelessProducts);
 setPopularProducts(filteredPopularProducts);
 
  },[]);

  return (<Helmet title={"Home"}>

    {/* Wallpaper SEction */}
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
        <div className='hero__content'>
          <p className="hero__subtitle">
            Trending product in {year}</p>
            <h2>Make Your Interior More Minimalistic & Modern</h2>
            <p>Lorem ipsum dolor sit amet. Et incidunt voluptas eos Quis nostrum ea cumque dolore At impedit iste ut reiciendis quas 
               voluptatibus consequatur aut sint voluptatem.

       </p>
       <motion.button  whileTap={{scale:1.2}} className="shop__btn"><Link className="tag" to="/shop">SHOP NOW</Link></motion.button>
        </div>
        </Col>
        <Col lg="6" md="6">

        <div className='hero__img'>
          <img src={heroImg} alt="homeimg"/>
        </div>
        </Col>
        
      </Row>
    </Container>



    </section>

    {/* Services */} 
     <Services/>  

     {/*Trending Products*/ }
    <section className='trending_products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductList  data={trendingProducts}/>
        </Row>
      </Container>
    </section>

    {/* Best Sales */}

    <section className='best__sales'>
    <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Best Sales</h2>
          </Col>

          <ProductList data={bestSalesProducts}/>
        </Row>
      </Container>

    </section>
       
      {/* Clock Timer Section */}
    <section className='timer__count'>
      <Container>
        <Row>
          <Col lg='6' md='12' className='count__down-col'>
            <div className='clock__top-content'>
              <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
              <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
            </div>
         <Clock/>
         < motion.button 
          whileTap={{scale:1.2}} 
          className='shop__btn store__btn'>
          <Link to='/shop'>Visit Store</Link>
          </motion.button>

          </Col>
          <Col lg='6' md='12' className='text-end counter__img'>
          <img src={counterImg} alt="timerImage"/>
            
         </Col>
        </Row>
      </Container>
    </section>
     
        {/* New Arrivals */}
     <section className='new__arrivals'>
      <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>New Arrivals</h2>
          </Col>
          <ProductList data={mobileProducts}/>
          <ProductList data={wirelessProducts}/>
        </Row>
      </Container>
     </section>

     <section className='popular__category'>
     <Container>
        <Row>
          <Col lg='12' className='text-center mb-5'>
            <h2 className='section__title'>Popular in Category</h2>
          </Col>
          <ProductList data={popularProducts}/>
         
        </Row>
      </Container>
     </section>
    </Helmet>
  );

};

export default Home
