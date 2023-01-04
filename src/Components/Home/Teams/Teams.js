import React, { useEffect, useState } from 'react';
import Team from './Team';
import Slider from 'react-slick';
import  'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Teams = () => {
    const [teams,setTeams] = useState([]);

    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 2000,
        responsive:[
          {
            breakpoint: 960,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
              breakpoint: 680,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
          }
        ]
      }

    useEffect(()=>{
        fetch('https://pomato-server.onrender.com/teams')
        .then(res => res.json())
        .then(data =>{
          setTeams(data);
        })
      },[])
  return (
    <section id="teams" className="team">
    <div className="container py-5 carousel">
        <div className="section-header">
            <h2 className="text-styleA text-uppercase text-center">Meet Our Teams</h2>
        </div>
        <Slider {...settings}>
        {
            teams.map(team => <Team team={team}/>)
        }
        </Slider>
        </div>
</section>
);
};

export default Teams;