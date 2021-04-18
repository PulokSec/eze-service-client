import React from 'react';
import featured from '../../images/compose_music_ovo2.png'
import './Featured.css'
const Featured = () => {
  return (
    <section className="featured">
      <div className="container">
                <div className="row">
                    <div className="col-md-5 offset-md-1 my-5">
                        <h1 className="text-styleA">Professional Editing,</h1>
                        <h1 className="text-styleA">Mixing and Mastering</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.
                        </p>
                        <button className="btn button">Learn More</button>
                    </div>
                    <div className="col-md-5 py-5">
                        <img className="img-fluid" src={featured} alt=""/>
                    </div>
                </div>
            </div>
    </section>
  );
};

export default Featured;