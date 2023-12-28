import { Col, Row } from 'react-bootstrap';
import './App.css';
import Navigationbar from './components/Navigationbar';


function App() {
  return (
    <>
      <Row>
        <Col>
          <div style={{backgroundColor:'black'}} className='d-flex'>
            <div style={{backgroundColor:'black'}} className='container   text-light rounded w-25 p-2 ms-1 flex-column'>
              <div className='container bg-dark text-light rounded p-2'>
                <h5><i class="fa-brands fa-spotify text-success"></i> Spotify</h5>
                <h5><i class="fa-solid fa-house"></i> Home</h5>
                <h5><i class="fa-solid fa-magnifying-glass"></i> Search</h5>
              </div>
              <div className='container bg-dark text-light rounded p-3 mt-2 '>
                <h5>Your Library  <i style={{float:"right"}} class="fa-solid fa-plus"></i></h5>
              </div>
              <div className='container bg-dark text-light rounded p-3 mt-2 mb-2 '>
                <h5 className='fw-bolder'>Create your first playlist</h5>
                <h6>It's easy, we will help you</h6>
                <button style={{borderRadius:'25px'}} className='btn btn-light mt-1 fw-bolder'>Create playlist</button>
              </div>
      
              <div className='container bg-dark text-light rounded p-3 mt- '>
                <h5 className='fw-bolder'>Let's find some podcasts to follow</h5>
                <h6>we will keep you updated on new episodes</h6>
                <button style={{borderRadius:'25px'}} className='btn btn-light mt-1 fw-bolder'>Browse podcasts</button>
              </div>
      
              <div style={{fontSize:'10px'}} className='d-flex mt-5'>
                <p className='ms-2' >Legal</p>
                <p className='ms-4'>Privacy center</p>
                <p className='ms-4'>Privacy policy</p>
                <p className='ms-4'>Cookies</p>
              </div>
              <div style={{fontSize:'10px'}} className='d-flex mt-1'>
                <p className='ms-2' >About Ads</p>
                <p className='ms-4'>Accessibility</p>
              </div>
              <p style={{fontSize:'10px'}} className='ms-2'>Cookies</p>
              <button style={{borderRadius:'25px'}} className='btn btn-light mt-1 fw-bolder'><i class="fa-solid fa-globe"></i> English</button>
      
            </div>
            <Navigationbar/>
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
