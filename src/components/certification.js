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
        <div className="container">
            <div className="row gy-5 gx-5">
                <div className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <img src="..." class="d-block w-100" alt="..."></img>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        
        </div>
    )
}

export default certification
