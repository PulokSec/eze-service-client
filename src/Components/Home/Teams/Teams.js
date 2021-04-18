import React, { useEffect, useState } from 'react';
import Team from './Team';

const Teams = () => {
    const [teams,setTeams] = useState([]);

    useEffect(()=>{
        fetch('https://protected-fjord-22180.herokuapp.com/teams')
        .then(res => res.json())
        .then(data =>{
          setTeams(data);
        })
      },[])
  return (
    <section id="teams" className="team">
    <div className="container py-5">
        <div className="section-header">
            <h2 className="text-styleA text-uppercase text-center">Meet Our Teams</h2>
        </div>
        <div className="card-deck mt-5 pt-5">
             {
                 teams.map(team => <Team team={team}/>)
             }
         </div>
    </div>
</section>
);
};

export default Teams;