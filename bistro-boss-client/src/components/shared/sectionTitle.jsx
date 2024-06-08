

const SectionTitle = ({ subHeading, Heading, textColor }) => {
    return (
        <div className="mx-auto text-center md:w-4/12 mb-4">
            <h2 className="font-semibold text-sm italic text-yellow-500 mb-2">---{subHeading}---</h2>

            <h2 className={`font-semibold text-2xl uppercase ${textColor} border-y-4 py-4`}>{Heading}</h2>

        </div>
    );
};

export default SectionTitle;