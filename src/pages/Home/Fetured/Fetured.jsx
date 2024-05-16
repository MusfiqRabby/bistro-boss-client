import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import featureImg from "../../../assets/home/featured.jpg";
import './Fetured.css'

const Fetured = () => {
    return (
        <div className="fetured-item text-white bg-fixed pt-8 my-20">
            <SectionTitle 
            subHeading="Check it Out"
            heading="Featured Itme"
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-500 bg-opacity-60 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featureImg} alt="" />
                    </div>
                <div className="md:ml-10">
                <p>Aug 20, 2029</p>
                <p className="uppercase">Where can i get some! </p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique libero beatae reprehenderit, aliquid, modi in, blanditiis nobis nulla illum veritatis fugiat esse quasi soluta? Sit, perferendis ea delectus ad nihil ullam fugit iste saepe, labore illum libero error blanditiis?</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Fetured;