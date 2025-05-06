import React from 'react'
import TopNav from './TopNav'
import couple from '../images/couple.jpg'

const FrontPage = () => {
  return (
    <div className="image-container" id="home">
      <TopNav />
        <img src={couple} alt="Couple" className="couple-image" />

        {/* Yellow overlay */}
        <div className="image-overlay"></div>

        {/* Centered text */}
        <div className='centered-text w-100'>
          <h1 className="center-text-main"><br/>Edwin & Mary Rose</h1>
          <div class="divider-main">
  <span>♡</span> 
</div>
          <p className='centered-text-sub'>are getting married <br/>
          06.08.2025
          </p>
        </div>
        
    </div>  
  )
}

export default FrontPage
