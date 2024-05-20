import React from 'react';
import Navbar from './Navbar';
const processSteps = [
    [
        { id: 1, number: 'Helping Hearts Find Each Other:', description: 'We are dedicated to uniting compatible individuals and fostering lifelong families based on Islamic values, love, trust, and understanding.' },
        { id: 2, number: 'Empowering Love:', description: 'We strive to empower individuals to find and nurture meaningful connections that lead to fulfilling marriages, strong and loving families.' },
        { id: 3, number: 'Creating Lasting Love Stories:', description: 'Our mission is to craft enduring love stories by connecting Muslims who share common values and aspirations.' },
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

const Mission = () => {
    return (
        <>
            <Navbar />
            <section className='ourprocess_bg mission_bg relative overflow-hidden mt-[10px]'>
                <div className="custom_container" id="our-process">
                <div className="sm:max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] mx-auto" id="our-process">
                    <h2 className="section_head">
                        MISSION STATEMENT</h2>
                    <div className="h-[5px] w-[150px] mb-[10px] md:mb-[20px] bg-[#7a1a4a] rounded-md"></div>
                    <div className=" gap-6 xl:gap-10 2xl:gap-14 py-[20px] justify-between flex flex-col ">
                        {processSteps.map((steps, idx) => (
                            <StepList key={idx} steps={steps} />
                        ))}
                    </div>
                </div>
                </div>
            </section >
        </>
    );
};

export default Mission;
