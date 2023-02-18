import React,{useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavbarHeader from "./components/NavbarHeader";
import ListCategories from "./components/ListCategories";
import ListOrder from './components/ListOrder';
import CardMenu from './components/CardMenu';
import baseURL from './utils/baseURL';

const App = ()=> {
  const [menus,setMenus] = useState([])
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    const fetchProducts = async ()=>{
      try{
        const {data} =await baseURL.get('products')
        setMenus(data)
      }catch(err){
        console.log(err)
      }
    }
    
    const fetchCategories = async ()=>{
      try{
        const {data} =await baseURL.get('categories')
        setCategories(data)
      }catch(err){
        console.log(err)
      }
    }
    fetchProducts()
    fetchCategories()
  }, [])
  return (
    <div >
      <header>
        <NavbarHeader />
      </header>
      <Container style={{marginTop:"6em"}}>
        <Row>
          <Col>
            <div className='mb-3'>
              <ListCategories categories={categories} />
            </div>
            <Row>
              {menus && menus.map(menu=>(
                <Col key={menu.id} md={4}>
                  <CardMenu menu={menu} />
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={3}>
            <ListOrder/>
          </Col>
        </Row>
      </Container>
      

    </div>
  );
}

export default App;
