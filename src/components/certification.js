import React from 'react'

const certification = () => {
    return (
        <div>

        <div className="container mt-5">
            <div className="row mt-5">
                <h2 className="text-center ">Certifications</h2>
                <hr/>
            </div>
        </div>
        <div className="container bg-light">
            <div className="row gy-5 gx-5">
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                                <img src="./images/coursera-3.png" className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>First slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>
                        </div>
                        <div className="carousel-item">
                        <img src="./images/coursera-3.png" className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Second slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>

                        </div>
                        <div className="carousel-item">
                        <img src="./images/coursera-3.png" className="d-block w-100" alt="..."></img>
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Third slide label</h5>
                                        <p>Some representative placeholder content for the first slide.</p>
                                    </div>

                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hiddne="true"></span>
                            <span className="visually-hidden"></span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden"></span>

                        </button>

                    </div>
                </div>
            </div>

        </div>
        
        </div>
    )
}

export default certification
