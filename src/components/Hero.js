import React from 'react'

export const Hero = () => {
    return (
        <div>
            <div
                className="hero h-96 md:h-[600px] w-full py-20"
                style={{
                    backgroundImage: "url(/images/banner.avif)",
                }}>
                <div className=""></div>
                <div className="hero-content text-neutral-content text-brandColor text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Cook, Enjoy, Repeat!</h1>
                        <p className="mb-5">
                            Explore a curated selection of tasty recipes and make every meal a delight. Quick, easy, and delicious—find your new favorite recipe now!
                        </p>
                        <button className="btn text-brand-color hover:text-white hover:bg-blue-500 outline-none border-none">Get Started</button>
                    </div>
                </div>
            </div>
        </div >
    )
}
