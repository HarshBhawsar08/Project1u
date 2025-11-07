import React from 'react';
import { Link } from 'react-router-dom';

function User() {
  return (
    <>
      <h1
        className='card-text text-center mt-4 text-body-secondary fw-light'
        style={{
          fontFamily: "'Times New Roman', serif",    
          color: '#d72638',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}
      >
        Questions Queries..
      </h1>

      <div className="container">
        <Link to="/anatomy" className='text-decoration-none text-dark d-block'>
          <div className="card col-md-11 mx-auto mt-5 shadow border border-gradient rounded-3 p-3 bg-light">
            <div className="d-flex align-items-center flex-wrap">
              <div className="me-3 fs-1 m-2" style={{ textShadow: '1px 1px 8px #f707b380' }}>🧠</div>
              <div className="flex-grow-1 text-center">
                <h4 className="card-title mb-3">Anatomy</h4>
                <input type="range" className="form-range mb-3" min="0" max="0" value="0" />
                <p className="card-text mb-0">0/50 Modules</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/biochemistry" className='text-decoration-none text-dark d-block'>
          <div className="card col-md-11 mx-auto mt-4 shadow border border-gradient rounded-3 p-3 bg-light">
            <div className="d-flex align-items-center flex-wrap">
              <div className="me-3 fs-1 m-2" style={{ textShadow: '1px 1px 8px #e3f14b80' }}>🧬</div>
              <div className="flex-grow-1 text-center">
                <h4 className="card-title mb-3">Biochemistry</h4>
                <input type="range" className="form-range mb-3" min="0" max="0" value="0" />
                <p className="card-text mb-0">0/67 Modules</p>
              </div>
            </div>
          </div>
        </Link>

        <Link to="/physiology" className='text-decoration-none text-dark d-block'>
          <div className="card col-md-11 mx-auto mt-4 shadow border border-gradient rounded-3 p-3 bg-light">
            <div className="d-flex align-items-center flex-wrap">
              <div className="me-3 fs-1 m-2" style={{ textShadow: '1px 1px 8px rgba(59, 7, 247, 0.5)' }}>🩺</div>
              <div className="flex-grow-1 text-center">
                <h4 className="card-title mb-3">Physiology</h4>
                <input type="range" className="form-range mb-3" min="0" max="0" value="0" />
                <p className="card-text mb-0">0/55 Modules</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}

export default User;
