import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProducts, clearErrors } from './actions/product';
import { Container, Navbar, Nav, Button, Form, Offcanvas, Row, Col, Card } from 'react-bootstrap';
import { CustomPagination, Header, Products } from './components';

const categories = [
  "laptop-Laptop",
  "mobile-Mobile",
  "footwear-Footwear",
  "cloth-Cloth",
  "smartwatch-Smartwatch",
  "bottle-Bottle"
];

const priceRange = [
  "0-1000",
  "1001-5000",
  "5001-10000",
  "10001-20000",
  "20000+",
];

const rangeObj = {
  "0-1000": [0, 1000],
  "1001-5000": [1001, 5000],
  "5001-10000": [5001, 10000],
  "10001-20000": [10001, 20000],
  "20000+": [20001, 100000000]
};

function App() {
  const dispatch = useDispatch();
  const { loading, error, products, filteredProductsCount } = useSelector((state) => state.products);

  const [title, setTitle] = useState();
  const pageHandler = (p) => { setCurrentPage(p); };

  const [resultPerPage, setResultPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 100000000]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors());
    }
    window.scrollTo(0, 0);
    dispatch(getAllProducts(title, resultPerPage, currentPage, price, category));
  }, [dispatch, error, title, resultPerPage, currentPage, price, category]);

  const noPages =
    parseInt(filteredProductsCount / resultPerPage) +
    (filteredProductsCount % resultPerPage === 0 ? 0 : 1);
  // console.log({ noPages, filteredProductsCount, resultPerPage })

  return (
    <Container fluid className='p-0'>
      <Header setTitle={setTitle} pageHandler={pageHandler} />

      <Row className='m-0'>
        {/* Sidebar */}
        <Col lg={2} className='sidebar p-0'>
          <div className='py-3 text-center'>
            <h3 className='heading'>Filter</h3>
          </div>

          <Row>
            <Col>
              <div className='p-3'>
                <h4>Price</h4>
                {priceRange.map((pr) =>
                  <Form.Check key={pr} type='radio'
                    label={pr} name='price' value={pr}
                    onChange={(e) => {
                      setPrice(rangeObj[e.target.value]);
                      pageHandler(1);
                    }}
                  />
                )}
              </div>
            </Col>
            <Col>
              <div className='p-3'>
                <h4>Category</h4>
                {categories.map((cat) => {
                  const [a, b] = cat.split('-');
                  return (
                    <Form.Check key={cat} type='checkbox'
                      label={b}
                      value={a}
                      onChange={(e) => {
                        if (e.target.checked) setCategory((prev) => [...prev, e.target.value]);
                        else setCategory((prev) => [...prev.filter((v) => v !== e.target.value)]);
                        pageHandler(1);
                        // console.log({ e: e.target });
                      }}
                    />
                  )
                })}
              </div>
            </Col>
          </Row>
        </Col>

        <Col>
          <Products resultPerPage={resultPerPage} loading={loading} products={products} />

          {/* Result Per Page */}
          <div className="float-start d-flex align-items-center mt-3">
            <p className="p-bold m-0 me-3">Products per page</p>
            <Form.Group controlId="resultPerPage">
              <Form.Select
                value={resultPerPage}
                onChange={(e) => {
                  setResultPerPage(e.target.value);
                  pageHandler(1);
                }}
                aria-label="Default select example"
              >
                <option value={6}>6</option>
                <option value={9}>9</option>
                <option value={12}>12</option>
              </Form.Select>
            </Form.Group>
          </div>

          {/* Pagination  */}
          {noPages > 1 && <CustomPagination pages={noPages} pageHandler={pageHandler} curPage={currentPage} />}
        </Col>
      </Row>
    </Container>
  );
}

export default App;
