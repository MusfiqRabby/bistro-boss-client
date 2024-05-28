import { loadStripe } from "@stripe/stripe-js";

import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";



// TODO: add publishedble 
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)



const Payment = () => {
    return (
        <div>
          <SectionTitle heading="Payment" subHeading="Please pay to eat" /> 
        
        <div>
            <Elements stripe={stripePromise}>
            <CheckOutForm/>
            </Elements>
        </div>

        </div>
    );
};

export default Payment;