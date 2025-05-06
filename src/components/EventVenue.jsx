import React from 'react'
import church from '../images/church-clip.jpg'
import eventLoc from '../images/eventLoc.jpg'

const EventVenue = () => {
  return (
    <div id='venue'>
        <h1 className='story text-center'>Event Venue</h1>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <img src={church} alt="Church" style={{ maxWidth: '60%', height: 'auto' }}/>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <p className=' text-center fs-5'>
                    <b>Wedding Ceremony at </b><br/>
                    Iglesia de la Sagrada Familia <br/>
                    Pasumbalas, San Isidro San Luis, Pampanga
                </p>
                </div>
            </div>
            </div>
            <div className="container-fluid">
            <div className="row flex-column-reverse flex-lg-row">
                
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <p className=' text-center fs-5'>
                    <b>Reception to follow at</b><br/>
                    Shepherd's Palace <br/>
                    Highway Brgy. Dalayap, Candaba Pampanga
                </p>
                </div>
                <div className="col-12 col-lg-6 d-flex align-items-center justify-content-center">
                <img src={eventLoc} alt="eventLoc" className="img-fluid" style={{ maxWidth: '60%', height: 'auto' }}/>
                </div>
            </div>
            
            </div>

            <div className='p-2'>
                <h3 className='story fs-1'>Map from Church to Reception</h3>
                <div

    >
      <div
        id="my-map-display"
        style={{ height: '100%', width: '100%', maxWidth: '100%' }}>
        <iframe
          title="Google Map Directions"
          style={{ height: '400px', width: '100%', border: 0 }}
          frameBorder="0"
          src="https://www.google.com/maps/embed/v1/directions?origin=Shepherd's+Palace+Highway+Brgy.+Dalayap,+Candaba+Pampanga&destination=Iglesia+de+la+Sagrada+Familia+san+luis&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
            </div>
            
    </div>
  )
}

export default EventVenue
