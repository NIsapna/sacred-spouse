import React from 'react';
import Navbar from './Navbar';
const processSteps = [
    [
        { id: 1, number: 'Integrity: ', description: 'We operate with the highest level of integrity, ensuring honesty, transparency, and ethical conduct in all our matchmaking services.' },
        { id: 2, number: 'Empathy:', description: "We approach every client with understanding and compassion, recognizing that every individual's journey to love is unique." },
        { id: 3, number: 'Qualitys:', description: 'We are committed to providing high-quality services that prioritize the long-term happiness and compatibility of our clients.' },
    ],
    [
        { id: 1, number: 'Diversity: ', description: 'We celebrate and respect the diversity of our clients, embracing various cultural backgrounds, and life experiences.' },
        { id: 2, number: 'Trust:', description: 'We prioritize the trust our clients place in us and work tirelessly to uphold and maintain that trust throughout their journey with us.' },
        { id: 3, number: 'Client-Centered:', description: 'Our focus is always on the best interests of our clients, and we tailor our services to meet their specific needs and preferences.' },
    ],
];

const StepList = ({ steps }) => (
    <ol className="list-inside list-none space-y-6">
        {steps.map((step, index) => (
            <li key={step.number} className="list_style">
                <span className="list_heading">
                    {step.number}
                </span>

                {step.description}
            </li>
        ))}
    </ol>
);

const CoreValue = () => {
    return (
        <>
            <Navbar />
            <section className='ourprocess_bg core_bg  relative overflow-hidden mt-[10px]'>
                <div className="custom_container" id="our-process">
                    <h2 className="section_head ">
                        CORE VALUES </h2>
                    <div className="h-[5px] w-[150px] mb-[20px] bg-[#7a1a4a] rounded-md"></div>
                    <div className="lg:grid lg:grid-cols-2 gap-6 xl:gap-10 2xl:gap-14 py-[20px] justify-between flex flex-col ">
                        {processSteps.map((steps, idx) => (
                            <StepList key={idx} steps={steps} />
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
};

export default CoreValue;
