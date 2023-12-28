import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Cards from './Cards';
import { Col, Row } from 'react-bootstrap';

function Navigationbar() {
  return (
    <div className='container bg-dark text-light rounded  mt-2 ms-1 flex-column'>
      <Row>
        <Col md={12} >
          <Navbar className='bg-dark '>
          <Container fluid>
            <Navbar.Brand className='ms-5 text-light' href="#"><i class="fa-solid fa-circle-chevron-left fa-2x"></i></Navbar.Brand>
            <Navbar.Brand className='ms-2' href="#"><i class="fa-solid fa-circle-chevron-right fa-2x text-light"></i></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
              </Nav>
              <Form className="d-flex">
                <Button variant="outline-success">Sign up</Button>
                <Button className='ms-2 btn-light' variant="outline-success">Log in</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
         </Navbar>
          <Cards/>
        </Col >
      </Row>

    </div>
      
  )
}

export default Navigationbar