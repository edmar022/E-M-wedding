import React from 'react'
import dressCode from '../images/dress_code.png'
import dressCodeNinong from '../images/dress_code_ninong.png'
import dressCodeNinang from '../images/dress_code_ninang.png'

const DressCode = () => {
  return (
    <div className='my-4' id='dressCode' >
        <h2 className='story'>Dress Code</h2>
        <p className="fs-6 col-12 col-lg-9 m-auto text-center px-5">Dress in formal attire to celebrate this special day in style.</p>
        <div className='d-flex justify-content-center'>
            <img src={dressCode} alt="dress_code" style={{ maxWidth: '40%', minWidth: '300px', height: 'auto' }}/>
        </div>
        <div>
        <h2 className='story'>Ninong & Ninang</h2>
           <div className="container-fluid d-flex justify-content-center">
            <div className="row d-flex col-6">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <img src={dressCodeNinong} alt="dress_code" style={{ maxWidth: '25%', minWidth: '80px', height: 'auto'}}/>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                <p className=' text-center fs-6'>
                    <b>Ninong</b><br/>
                    Traditional Barong  <br/>
                    Tagalog and Black Pants
                </p>
                </div>
            </div>
            <div className="row d-flex col-6">
                <div className="col-12 d-flex align-items-center justify-content-center">
                    <img src={dressCodeNinang} alt="dress_code" style={{ maxWidth: '25%', minWidth: '80px', height: 'auto' }}/>
                </div>
                <div className="col-12 d-flex align-items-center justify-content-center">
                <p className=' text-center fs-6'>
                    <b>Ninang</b><br/>
                    Champagne Long Gown <br/>
                    Any Style of your Preference
                </p>
                </div>
            </div>
            </div>

        </div>
    </div>
  )
}

export default DressCode
