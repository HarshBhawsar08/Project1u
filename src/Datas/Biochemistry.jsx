import React from 'react';
import { Link } from 'react-router-dom';

function Biochemistry() {
    const topics = [
        { id: 1, title: "Glycolysis and gluconeogenesis", rating: 4.5, img: './images/Gameto.jpeg', mcqs: 30 },
        { id: 2, title: "ETC and bioenergetics", rating: 4.5, img: './images/Embryonic.jpeg', mcqs: 18 },
        { id: 3, title: "Krebs Cycle", rating: 4.5, img: './images/Urogenital.png', mcqs: 18 },
        { id: 4, title: "Face, Nose & Palate, Eye, Ear", rating: 4.5, img: './images/mouth.jpeg', mcqs: 15 },

        
    ];

    return (
        <>
            <h1 className='head text-center mt-5'>Biochemistry Topic...</h1>
            <h5 className='para text-center mt-5' style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.4)' }}>CARBOHYDRATES</h5>

            {topics.map((topic, index) => (
                <Link
                    to={`/topic/${topic.id}`}
                    key={topic.id}
                    className='text-decoration-none text-dark'
                >
                    <div className="card col-md-10 mx-auto mt-3 shadow border border-gradient rounded-3 p-3 bg-light position-relative m-5 mt-2">

                        {/* Number inside the card on left */}
                        <div
                            className="position-absolute d-flex justify-content-center align-items-center"
                            style={{
                                left: '-15px',  // slightly outside the card
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                backgroundColor: '#9561f6ff',
                                color: '#fff',
                                fontWeight: 'bold',
                                fontSize: '18px',
                            }}
                        >
                            {index + 1}
                        </div>

                        <div className="row g-0 align-items-center">
                            {/* Image */}
                            <div className="col-md-3 text-center">
                                <img
                                    src={topic.img}
                                    alt={topic.title}
                                    className="img-fluid rounded-start"
                                    style={{
                                        width: '150px',
                                        height: '130px',
                                        objectFit: 'cover',
                                        borderRadius: '1px'
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="col-md-9">
                                <div className="card-body">
                                    <h4 className="card-title mb-5">{topic.title}</h4>
                                    <p className="card-text mb-0"> ⭐ {topic.rating} &nbsp; &nbsp; | {topic.mcqs}  MCQs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
}

export default Biochemistry;



