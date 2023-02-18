import Alert from 'react-bootstrap/Alert';
const ListOrder=()=>{
    return(
        <div>
            <h6>List Pesanan</h6>
            <hr  className='mb-4 bg-primary'/>
            <Alert variant="secondary">
                Belum ada Pesanan!
            </Alert>
        </div>
    )
}

export default ListOrder;