import React, { useState } from 'react';
import entourage1 from '../images/entourage1.png';
import entourage2 from '../images/entourage2.png';
import entourage3 from '../images/entourage3.png';
import footer from '../images/footer.jpg'

const WeddingEntourage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  const handleImageClick = (imgSrc) => {
    setSelectedImg(imgSrc);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedImg(null);
  };

  return (
    <div id="entourage" className='mt-5'>
      <h1 className='story'>Wedding Entourage</h1>
      <p className='text-center'>Surrounded by love, guided by tradition—our wedding entourage, the cherished hearts who walk with us on this journey.</p>
      
      <div className='d-flex justify-content-center'>
        <img
          src={entourage1}
          alt="entourage1"
          className="img-fluid rounded gallery-img shadow p-3 mb-5 bg-white rounded"
          style={{ maxWidth: '40%',minWidth:'300px', height: 'auto', cursor: 'pointer' }}
          onClick={() => handleImageClick(entourage1)}
        />
      </div>
      
      <div className='d-flex justify-content-center '>
        <img
          src={entourage2}
          alt="entourage2"
          className="img-fluid rounded gallery-img shadow p-3 mb-5 bg-white rounded"
          style={{ maxWidth: '40%', minWidth:'300px', height: 'auto', cursor: 'pointer' }}
          onClick={() => handleImageClick(entourage2)}
        />
      </div>

      <div className='d-flex justify-content-center '>
        <img
          src={entourage2}
          alt="entourage3"
          className="img-fluid rounded gallery-img shadow p-3 mb-5 bg-white rounded"
          style={{ maxWidth: '40%',minWidth:'300px', height: 'auto', cursor: 'pointer' }}
          onClick={() => handleImageClick(entourage3)}
        />
      </div>
      <div className='footer'>
        <img src={footer} alt="footer" className="couple-image" />
          <h1 className='centered-text w-100'>We are looking forward to <br/> celebrating with you!</h1>   
      </div>
 
      {/* Modal */}
      {modalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal} style={overlayStyle}>
          <div className="modal-content" style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            <img src={selectedImg} alt="Enlarged" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          </div>
        </div>
      )}

     
    </div>
  );
};

// Basic inline styles for modal (you can move these to CSS)
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1050
};

const modalContentStyle = {
  maxWidth: '30%',
  minWidth: '500px',
  maxHeight: '90%',
};

export default WeddingEntourage;
