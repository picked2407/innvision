import Image from "next/image";

/* eslint-disable react/no-unescaped-entities */
const Home = () => {
    return (
        <section id="home">
            <div className="blob1"></div>
            <div className="blob2"></div>
            <div className="container py-20">
                <div className="flex flex-col items-center z-20 md:flex-row">
                    <div className="text-center mb-12 md:text-left md:w-1/2 md:pr-10">
                        <h1 className="title">
                        InnVision: Illuminating Digital Brilliance, Crafting Tomorrow's Web Today.
                        </h1>
                        <p className="leading-relaxed mb-10">
                        We're more than a web development agency – we're innovators, creators, and your digital partner. Our passionate team brings your brand to life with cutting-edge tech and sleek design. Whether it's a modern website, e-commerce platform, or custom solution, we're here for you. Join us in building a captivating digital presence that propels your brand forward. InnVision - Where Possibilities Shine, Excellence Defined.
                        </p>
                        <button className="btn"><a href="#features">Get started</a></button>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={"/img/hero4.png"}
                            width={500}
                            height={500}
                            alt="hero"
                        ></Image>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
