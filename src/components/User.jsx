import React from 'react';


function User() {
  return (
    <>
      <h1 className='card-text text-center mt-4 text-body-secondary' style={{ textShadow: '5px 1px 2px hsla(240, 3%, 6%, 0.30)' }} >Questions Queries..</h1>

      <a href="#" className='text-decoration-none text-dark'>
        <div className="card col-md-10 mx-auto mt-5 shadow border border-gradient rounded-3 p-3 bg-light">
          <div className="d-flex align-items-center">
            <div className="me-3 fs-1 m-2" style={{ textShadow: '1px 1px 8px #f707b380' }}>🧠</div>
            <div className="flex-grow-1 text-center">
              <h4 className="card-title mb-3">Anatomy</h4>
              <input type="range"
                className="form-range mb-3"
                min="0"
                max="0"
                value="0"></input>
              <p className="card-text mb-0">0/50 Modules</p>
            </div>
          </div>
        </div>
      </a>

      <a href="#" className='text-decoration-none text-dark'>
        <div className="card col-md-10 mx-auto mt-5 shadow border border-gradient rounded-3 p-3 bg-light">
          <div className="d-flex align-items-center">
            <div className="me-3 fs-1 m-2" style={{ textShadow: '1px 1px 8px #e3f14b80' }}>🧬</div>
            <div className="flex-grow-1 text-center">
              <h4 className="card-title mb-3">Biochemistry</h4>
              <input type="range"
                className="form-range mb-3"
                min="0"
                max="0"
                value="0"></input>
              <p className="card-text mb-0">0/67 Modules</p>
            </div>
          </div>
        </div>
      </a>

      <a href="#" className='text-decoration-none text-dark'>
        <div className="card col-md-10 mx-auto mt-5 shadow border border-gradient rounded-3 p-3 bg-light">
          <div className="d-flex align-items-center">
            <div className="me-3 fs-1 m-2" style={{ textShadow: '1px 1px 8px rgba(59, 7, 247, 0.5)' }}>🩺</div>
            <div className="flex-grow-1 text-center">
              <h4 className="card-title mb-3">Physiology</h4>
              <input type="range"
                className="form-range mb-3"
                min="0"
                max="0"
                value="0"></input>
              <p className="card-text mb-0">0/55 Modules</p>
            </div>
          </div>
        </div>
      </a>


    </>
  );
}

export default User;
