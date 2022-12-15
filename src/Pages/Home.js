import React ,{useState,useEffect} from 'react';
import Helmet from '../Components/Helmet/Helmet';
import {Container,Row,Col} from "reactstrap";
import heroImg from '../Assets/Images/heroImg.png';
import "../styles/home.css";
import {Link} from "react-router-dom";
import {motion} from 'framer-motion';
import Services from '../Services/Services';
import ProductList from '../Components/UI/ProductList';
import products from '../Assets/Data/Products';

const Home = () => {

  const [data,setData] = useState(products);

  const year =new Date().getFullYear();
  useEffect(()=>{
    const filteredProducts = products.filter(item=> item.category
      =="chair");
   setData(filteredProducts);
 
  },[]);

  return (<Helmet title={"Home"}>
    <section className='hero__section'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
        <div className='hero__content'>
          <p className="hero__subtitle">
            Trending product in {year}</p>
            <h2>Make Your Interior More Minimalistic & Modern</h2>
            <p>Lorem ipsum dolor sit amet. Et incidunt voluptas eos Quis nostrum ea cumque dolore At impedit iste ut reiciendis quas qui voluptatibus consequatur aut sint voluptatem.

       </p>
       <motion.button  whileTap={{scale:1.2}} className="shop__btn"><Link className="tag" to="shop">SHOP NOW</Link></motion.button>
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

    <Services/>
    <section className='trending_products'>
      <Container>
        <Row>
          <Col lg='12' className='text-center'>
            <h2 className='section__title'>Trending Products</h2>
          </Col>
          <ProductList  data={data}/>
        </Row>
      </Container>
    </section>
    </Helmet>
  );

};

export default Home
