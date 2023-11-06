import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'

const LoadingCard = () => {
  return (
    <Card>
      <div className='p-3' >
        <div className='skeleton' style={{ width: '100%', height: '300px' }}></div>
      </div>
      <Card.Body className='pt-0'>
        <Card.Title className='skeleton skeleton-text skeleton-text-title' />
        <Card.Text className='skeleton skeleton-text' />
        <p className='skeleton skeleton-text m-0'></p>
      </Card.Body>
    </Card>
  )
};

const ProductCard = ({ product_img, title, description, price }) => {
  return (
    <Card>
      <div className='card-img-box'>
        <Card.Img variant="top" src={product_img} className='card-img' />
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text className='mb-1'>{description}</Card.Text>
        <p className='text-orangered'>₹{price}</p>
      </Card.Body>
    </Card>
  );
};

const Products = ({ resultPerPage, loading, products = [] }) => {
  return (
    <>
      <div className='py-3 text-center'>
        <h2 className='heading'>Products</h2>
      </div>
      <div>
        <Row xs={1} sm={2} md={3} className="g-4">
          {loading ? Array.from({ length: resultPerPage }).map((_, idx) =>
            <Col key={idx}>
              <LoadingCard key={idx} />
            </Col>
          ) : products.length === 0 ? <h3>No Products</h3> : products.map((product) => (
            <Col key={product._id}>
              <ProductCard {...product} />
            </Col>
          ))}
        </Row>
      </div >
    </>
  )
};

export default Products