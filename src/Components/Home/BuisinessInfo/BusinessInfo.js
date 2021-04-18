import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhoneAlt} from '@fortawesome/free-solid-svg-icons'
const InfoData = [
  {
    title: 'Opening Hours',
    description: 'We are open 24/7',
    icon: faClock,
    background_color: 'primary'
  },
  {
    title: 'Visit Our Location',
    description: 'Brooklyn 99',
    icon: faMapMarkerAlt,
    background_color: 'dark'
  },
  {
    title: 'Call Us Now',
    description: '+1555256655',
    icon: faPhoneAlt,
    background_color: 'primary'
  }
]
const BusinessInfo = () => {
  return (
    <section className="d-flex justify-content-center mb-4">
     <div className="w-75 row">
     {
        InfoData.map( info => <InfoCard info={info}/>)
      }
     </div>
    </section>
  );
};

export default BusinessInfo;