"use client";
import Image from "next/image";
import { useEffect } from "react";

/* eslint-disable react/no-unescaped-entities */
const Testimonial = () => {
    useEffect(() => {
        const userImg = document.getElementsByClassName("user-img");
        const userText = document.getElementsByClassName("user-text");

        let i = 0;
        const playTestimonial = () => {
            userImg[i].classList.add("active-img");
            userText[i].classList.add("active-text");

            if (i > 0) {
                userImg[i - 1].classList.remove("active-img");
                userText[i - 1].classList.remove("active-text");
            } else {
                userImg[userImg.length - 1].classList.remove("active-img");
                userText[userText.length - 1].classList.remove("active-text");
            }

            i = (i + 1) % userImg.length;
        };

        const interval = setInterval(playTestimonial, 3000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    return (
        <section id="testimonial">
            <div className="container py-20">
                <div className="text-center m-auto mb-20 md:w-1/2">
                    <h4 className="font-bold text-color-secondary mb-4">
                        User Review
                    </h4>
                    <h1 className="title">
                        What Client's Say About us
                    </h1>
                </div>
                <div className="mt-8">
                    <div className="flex items-center justify-center flex-wrap">
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img active-img"
                            src={"/img/user1.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user2.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user3.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user4.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                        <Image
                            className="w-20 h-20 rounded-full p-1 m-3 cursor-pointer user-img"
                            src={"/img/user5.jpg"}
                            width={50}
                            height={50}
                            alt="user1"
                        />
                    </div>
                    <div className="grid place-items-center text-center m-auto md:w-4/5 min-h-[40vh]">
                        <div className="user-text active-text">
                            <p className="md:text-2xl mb-6">
                            Incredible Results! Our website went from bland to grand thanks to Innvision. The team's expertise and creativity transformed our online presence. Highly recommended
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Markin Nesus
                            </h4>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                            TInnVision Rocks! Fast, efficient, and spot-on. The communication was smooth, and our website now stands out. Thanks, InnVision, for making our online presence shine
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Jhon Doe
                            </h4>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                            Choose InnVision! A top-notch experience. They grasped our vision, provided valuable insights, and created a website that truly reflects our brand. InnVision is the go-to agency
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Mark Nesus
                            </h4>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                            InnVision = Game-Changer! They took our website to the next level—user-friendly, visually stunning, and a traffic magnet. If you need web development, don't think twice, go with InnVision!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Markin Nesus
                            </h4>
                        </div>
                        <div className="user-text">
                            <p className="md:text-2xl mb-6">
                            InnVision Delivers Excellence! Our journey with InnVision was exceptional. From concept to execution, they demonstrated professionalism and brilliance. Our website now stands as a testament to their expertise. InnVision is the real deal!
                            </p>
                            <h4 className="font-bold text-color-secondary">
                                Pathan Nesus
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
