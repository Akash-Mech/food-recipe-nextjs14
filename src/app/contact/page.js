"use client"

import Image from "next/image";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
function Contact() {

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    const form = useRef();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const onSubmit = async (data, e) => {
        e.preventDefault()
        setTimeout(() => {
            setShowSuccessMessage(true);
            setTimeout(() => {
                setShowSuccessMessage(false);
                location.reload();
            }, 1000);
        }, 500);
        console.log(data)
    }

    return (
        <div className="">
            <div
                className="hero h-96 md:h-[400px] w-full"
                style={{
                    backgroundImage: "url(/images/banner.avif)",
                }}>
                <div className=""></div>
                <div className="hero-content text-neutral-content text-brandColor text-center">
                    <h1 className="text-6xl font-bold"
                    >Contact Us</h1>
                </div>
            </div>

            {showSuccessMessage && (
                <div className="text-center p-4 mb-4 border-4 w-fit  bg-white border-green-300 mx-auto rounded-md ">
                    Form Submitted successfully!
                </div>
            )}

            {showErrorMessage && (
                <div className="text-center p-4 mb-4 border-4 w-fit bg-white border-red-300 mx-auto ">
                    Something went wrong
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 ">
                <div className="items-center justify-center flex">
                    <div>
                        <div style={{ width: '100%' }}>
                            <iframe className="w-[300px] lg:w-[400px]" src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.9008963886!2d77.46613078340276!3d12.953945617059613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1721987190444!5m2!1sen!2sin" width="400" height="450" allowfullscreen loading=" lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                        <div className="text-center py-5 text-xl font-semibold">
                            <p> 47, ABC Complex, S J P Road,</p>
                            <p>Bengaluru-560002</p>
                        </div>

                    </div>
                </div>

                <div className="space-y-6 my-12 lg:w-2/3">
                    <form ref={form}
                        method="POST"
                        onSubmit={handleSubmit(onSubmit)}
                        className="space-y-6">
                        <div>
                            <label className="block  text-base font-medium mb-2" htmlFor="name">
                                Name<span className="text-red-500 text-lg">*</span>
                            </label>
                            <input
                                className="shadow hover:border-black/60 border rounded w-full py-3 px-3   focus:outline-none "
                                id="username"
                                type="text"
                                name="name"
                                {...register("name", {
                                    required: true,
                                    pattern: /^[A-Za-z\s.]+$/,
                                })}
                            />
                            {errors.name && (
                                <p className="text-[#ff0000]">Please Enter Valid Name</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium mb-2" htmlFor="name">
                                Email<span className="text-red-500 text-lg">*</span>
                            </label>
                            <input
                                className="shadow hover:border-black/60 border rounded w-full py-3 px-3   focus:outline-none "
                                id="email"
                                type="email"
                                name="email"
                                {...register("email", {
                                    required: true,
                                })}
                            />
                            {errors.email && (
                                <p className="text-[#ff0000]">Please Enter Valid Email</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-md font-medium mb-2" htmlFor="name">
                                Phone<span className="text-red-500 text-lg">*</span>
                            </label>
                            <input
                                className="shadow hover:border-black/60  border rounded w-full py-3 px-3 focus:outline-none [&::-webkit-inner-spin-button]:appearance-none"
                                id="phone"
                                type="tel"
                                maxLength={10}
                                {
                                ...register("phone", {
                                    required: true,
                                })
                                }
                            />
                            {
                                errors.phone && (
                                    <p className="text-[#ff0000]">Phone Number is Invalid</p>
                                )
                            }
                        </div>
                        <div>
                            <label className="block  text-md font-medium mb-2" htmlFor="name">
                                Message
                            </label>
                            <textarea
                                className="shadow hover:border-black/60 border rounded w-full py-3 px-3   focus:outline-none "
                                id="username"
                                type="textarea"
                                name="message"
                                {...register("message")}
                            />
                        </div>
                        <div className="py-8 ">
                            <button className="btn text-white bg-blue-500 outline-none border-none">Send Message</button>
                        </div>
                    </form>

                </div>
            </div >
        </div >
    );
}

export default Contact;

Contact.getLayout = function getLayout(page) {
    return <Layout>{page}</Layout>;
};
