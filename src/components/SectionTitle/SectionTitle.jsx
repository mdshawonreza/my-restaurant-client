
const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="text-center  md:w-4/12 mx-auto my-10">
            <p className="text-[#D99904] text-lg mb-2">--- {subHeading} ---</p>
            <h2 className="uppercase text-4xl font-semibold py-3 border-y-2">{heading}</h2>
        </div>
    );
};

export default SectionTitle;