/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const SavingMoney = () => {
    return (
        <section id="saving-money">
            <div className="container py-20 relative">
                <div className="blob1"></div>
                <div className="blob2"></div>
                <div className="flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-12 md:w-1/2 md:flex justify-start items-center">
                        <Image
                            src={"/img/hero3.png"}
                            width={500}
                            height={500}
                            alt="saving-money"
                        />
                    </div>
                    <div className="text-center md:text-left md:w-1/2 md:ml-20">
                        <h4 className="font-bold text-color-secondary mb-4">
                        Our Commitment to Quality and Affordability
                        </h4>
                        <h1 className="title mb-4">
                        InnVision: Crafting Tomorrow's Digital Presence.
                        </h1>
                        <p className="leading-relaxed mb-10">
                        Experience Excellence with InnVision's Web Solutions: Where Innovation Meets Impeccable Design, Timely Delivery, and Affordable Rates for a Digital Presence that Sets You Apart.
                        </p>
                        <button className="btn">Read More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SavingMoney;
