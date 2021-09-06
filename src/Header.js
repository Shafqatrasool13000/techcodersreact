import React from 'react'

const Header = () => {
    return (
        <>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active"> 
    <img src="./images/slide 1.jpg" height="500vh" class="d-block w-100" alt="..."/> 
    <div class="carousel-caption d-none d-md-block">
          <h2>Welcome to TechCoders</h2>
          <p>Technology development and Coding.</p>
          <button class="btn btn-primary me-2">Technology</button>
          <button class="btn btn-danger me-2">Development</button>
          <button class="btn btn-success">Coding</button>
        </div>
    </div>
    <div className="carousel-item">
    <img src="./images/thumb 2.jpg" height="500vh" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
          <h2>Welcome to TechCoders</h2>
          <p>Technology development and Coding.</p>
          <button class="btn btn-primary me-2">Technology</button>
          <button class="btn btn-danger me-2">Development</button>
          <button class="btn btn-success">Coding</button>
        </div>
    </div>
    <div className="carousel-item">
    <img src="./images/thumb 3.jpg" height="500vh" class="d-block w-100" alt="..."/>
    <div class="carousel-caption d-none d-md-block">
          <h2>Welcome to TechCoders</h2>
          <p>Technology development and Coding.</p>
          <button class="btn btn-primary me-2">Technology</button>
          <button class="btn btn-danger me-2">Development</button>
          <button class="btn btn-success">Coding</button>
        </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
    )
}

export default Header
