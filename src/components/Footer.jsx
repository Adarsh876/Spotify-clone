import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Footer() {
  return (
    <div className='mt-5 d-flex ms-5'>
      <div className='mt-5  w-100'>
        <Container>
          <Row>
            <Col  md={6} sm={12} lg={4} xl={3}><h6 className='fw-bolder flex-column'>Company</h6>
            <p>About</p>
            <p>Jobs</p>
            <p>For the records</p>
            </Col>
            <Col m md={6} sm={12} lg={4} xl={3}><h6 className='fw-bolder flex-column'>Community</h6>
            <p>For Artists</p>
            <p>Developers</p>
            <p>Advertising</p>
            <p>Investors</p>
            <p>Vendors</p>
            </Col>
            <Col  md={6} sm={12} lg={4} xl={3}><h6 className='fw-bolder flex-column '>Useful links</h6>
            <p>Support</p>
            <p>Free Mobile App</p>
            </Col>
            <Col >
            <div className='d-flex mt-5'>
             <i class="fa-brands fa-whatsapp fa-beat fa-2x text-success"></i>
             <i class="fa-brands fa-twitter fa-beat fa-2x ms-5 text-primary"></i>
             <i class="fa-brands fa-instagram fa-beat fa-2x ms-5 text-danger"></i>
             </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Footer