import React from 'react';
import Navbar from './Navbar';
const processSteps = [
    [
        { id: 1, number: 'User Profile:', description: 'Sign-up for our service by creating a user profile.' },
        { id: 2, number: 'Application:', description: 'Fill-out an application. Tell us about you and your potential match.' },
        { id: 3, number: 'Background Check:', description: 'Our background check covers criminal history in order to avoid matching you with someone who might pose a potential risk to you.' },
    ],
    [
        { id: 4, number: 'Video Introductions:', description: 'Tell us more about yourself through video recorded responses.' },
        { id: 5, number: 'Pre-Marital Counseling:', description: 'Watch the mandatory video by Shiekh Mostafa on finding a suitable partner.' },
        { id: 6, number: 'Matched Profiles:', description: 'Choose from 3 carefully selected matched profiles.' },
    ]
];

const StepList = ({ steps }) => (
    <ol className="list-inside list-none space-y-6">
        {steps.map((step, index) => (
            <li key={step.number} className="list_style">
                <span className="list_heading">
                    {step.id}.&nbsp;{step.number}
                </span>
                {step.description}
            </li>
        ))}
    </ol>
);

const OurProcess = () => {
    return (
        <>
            <Navbar />
            <section className='ourprocess_bg relative overflow-hidden mt-[10px]'>
                <div className="custom_container" id="our-process">
                    <h2 className="section_head">Our Process</h2>
                    <div className="h-[5px] w-[150px] mb-[10px] md:mb-[20px] bg-[#7a1a4a] rounded-md"></div>
                    <div className="lg:grid lg:grid-cols-2 gap-6 xl:gap-10 2xl:gap-14 py-[10px] md:py-[20px] justify-between flex flex-col">
                        {processSteps.map((steps, idx) => (
                            <StepList key={idx} steps={steps} />
                        ))}
                    </div>
                </div>
            </section >
        </>
    );
};

export default OurProcess;
