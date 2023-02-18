import Nav from 'react-bootstrap/Nav';
const ListCategories=({categories})=>{
    return(
        <Nav variant="pills" defaultActiveKey="0" >
             <Nav.Item >
                <Nav.Link eventKey={0} >Semua</Nav.Link>
            </Nav.Item>
            {categories&&categories.map(item=>(
                <Nav.Item key={item.id}>
                    <Nav.Link eventKey={item.id} >{item.name}</Nav.Link>
                </Nav.Item>
            ))}
        </Nav>
    )
}
export default ListCategories