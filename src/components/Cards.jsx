import React from 'react'
import Card from 'react-bootstrap/Card';
import Footer from './Footer';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Cards() {
  return (
    <div>
      <Row>
        <Col>
          <div className=' w-100 p-3 d-flex justify-content-between '>
              <h3 className='fw-bolder'>Spotify Original & Exclusive Podcasts</h3>
              <p className='mt-2' style={{fontSize:'15px'}}>show all</p>
          </div>
        </Col>
      </Row>


      <div>
          <Row>
           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
            <Card className='bg-dark' style={{ width: '18rem' }}>
              <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/1ymvFxRf8M4wChKd1LC9mW?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Card>
           </Col>
           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/2vhxApfLLtI8yCd7hqPokR?utm_source=generator" width="100%" height="152"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
           </Col>

           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
              <iframe  style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/5MIQC4i9ggv1AaQaXMI5Nv?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
            </Col>

            <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/show/6DlJqHbRUzXEoS2q1EVV5k?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
            </Col>
          </Row>
        </div>

       <Row>
         <Col>
           <div className=' w-100 p-3 d-flex justify-content-between'>
              <h3 className='fw-bolder j'>Try something else</h3>
              <p className='mt-2' style={{fontSize:'15px'}}>show all</p>
           </div>
         </Col>
       </Row>


      <div>
          <Row>
           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
            <Card className='bg-dark' style={{ width: '18rem' }}>
              <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXkMnNwaapIj?utm_source=generator" width="100%" height="152"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Card>
           </Col>
           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZNJXX2UeBij?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
           </Col>

           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUfTFmNBRM?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
            </Col>

            <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZF1DWVo4cdnikh7Z?utm_source=generator" width="100%" height="152"allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            <div className=' w-100 p-3 d-flex justify-content-between'>
              <h3 className='fw-bolder '>Featured charts</h3>
              <p className='mt-2' style={{fontSize:'15px'}}>show all</p>
            </div>
          </Col>
        </Row>


      <div>
          <Row>
           <Col className='mb-2' md={6} sm={12} lg={4} xl={3}>
            <Card className='bg-dark' style={{ width: '18rem' }}>
             <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator" width="100%" height="152"  allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </Card>
           </Col>
           <Col className='mb-2'  md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbMWDif5SCBJq?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
           </Col>

           <Col className='mb-2'  md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLZ52XmnySJg?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
            </Col>

            <Col className='mb-2'  md={6} sm={12} lg={4} xl={3}>
             <Card className='bg-dark' style={{ width: '18rem' }}>
               <iframe style={{borderRadius:"12px"}} src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLiRSasKsNU9?utm_source=generator" width="100%" height="152" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
             </Card>
            </Col>
          </Row>
        </div>

     <Footer/>
    </div>
  )
}

export default Cards


       

