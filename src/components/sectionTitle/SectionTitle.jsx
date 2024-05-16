

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 text-center mx-auto my-10">
            <p className="text-[#D99904] mb-3">---{subHeading}---</p>
            <h3 className="text-3xl uppercase border-y-4 py-4 font-semibold">{heading}</h3>
        </div>
    );
};

export default SectionTitle;