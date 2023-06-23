import React from 'react'
import img2 from '../image/better.png'
import img3 from '../image/Undergraduate Courses Integrated Courses Postgraduate Courses More.png'
import img4 from '../image/Yellow Bright Business Idea Tutorial Youtube Thumbnail.png'

export default function Main() {
    return (
        <main>
            <section className='poster'>

                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={img2} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item ">
                            <img src={img3} className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src={img4} className="d-block w-100" alt="..." />
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className='card'> */}
                {/* <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <img src={img2} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={img3} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={img4} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-body-secondary">Last updated 3 mins ago</small>
                                </div>
                        </div>
                    </div>
                </div> */}


                <div className=' card'>
                    <div className=' cards'>
                        <div className='cards-img'>
                            <img src={img2} alt='con'/>


                        </div>

                        <div>
                            <h6>Dsa</h6>
                            <p>by Carrer Catalyst</p>
                        </div>

                    </div>

                </div>

            {/* </section> */}
        </main>

    )
}
