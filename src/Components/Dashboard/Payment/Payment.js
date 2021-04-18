import Sidebar from '../Sidebar/Sidebar';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
  const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#f0f0ff" }}>
                <h5 className="text-styleA">Pay with Confidence</h5>
                <Elements stripe={stripePromise}>
                <CheckoutForm/>
                </Elements>
            </div>
        </section>
    );
};

export default Payment;