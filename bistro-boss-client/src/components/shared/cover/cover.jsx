import { Parallax } from 'react-parallax';

const Cover = ({ img, title, subHead }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            strength={-200}
        >
            <div
                className="hero h-[700px] max-w-[1920px] mx-auto bg-cover bg-center w-full" >
                <div className="hero-overlay bg-opacity-60 h-[450px] max-w-[1320px]"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase text-sm">{subHead}</p>

                    </div>
                </div>
            </div>


        </Parallax >


    );
};

export default Cover;

