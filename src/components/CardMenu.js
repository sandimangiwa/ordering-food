import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {toRupiah} from '../utils/helper';
const CardMenu=({menu})=>{
    return(
    <Card className="mb-3 border-0 shadow">
      <Card.Img variant="top" src={process.env.NODE_ENV === 'production' ? process.env.production.REACT_APP_API_URL+menu.image : process.env.REACT_APP_API_URL+menu.image} />
      <Card.Body>
        <Card.Title>{menu.name}</Card.Title>
        <Card.Text>{toRupiah(menu.price)} </Card.Text>
        <div className="d-grid">
          <Button variant="primary" className='' ><i className="bi bi-cart-plus me-2"></i>Masukan Keranjang</Button>
        </div>
      </Card.Body>
    </Card>
)}
export default CardMenu