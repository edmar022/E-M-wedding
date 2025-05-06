import React, { useEffect } from 'react'
import background from '../images/gallery_background.jpg'

const OutStory = () => {
  return (
    <div className='text-center py-5 px-3' id='ourStory' 
    style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
      <h1 className='story'>Our Story</h1>
      <div className="divider"><span>✦</span></div>
      <div className="col-12 col-lg-9 m-auto">
        <p>Here’s a little story about us. We’ve been together for almost nine years—a journey filled with ups and downs, and moments of being apart. 
            But in the end, we both realized something simple yet powerful: we need each other. We help heal each other's scars, 
            and life just makes more sense when we’re together.
        <br/>
        We first met at the airport. He was a company driver, and I was an employee. It all started with a simple eye contact—one of those fleeting moments 
        that somehow lingers. From there, we began talking through text messages, and as time went on, our feelings naturally grew.
        <br/>
        Our relationship became official on October 18, 2015. And while it hasn’t always been easy, we’ve learned that love isn’t about being perfect—it’s 
        about choosing each other through every season. Over the years, we’ve come to realize that we simply can’t imagine life without one another.
        <br/>
        On March 24, 2024, we got engaged. Now, we’re planning our wedding, excited for everything that’s ahead. This is the beginning of our 
        forever—and we can't wait to live every moment of it, together.
            </p>
      </div>
     
    </div>
  )
}

export default OutStory
