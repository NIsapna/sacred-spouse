import React from 'react';
import Navbar from './Navbar';
const processSteps1 = [
    {
        number: 'User Profile:',
        description: 'Sign-up for our service by creating a user profile.',
    },
    {
        number: 'Application:',
        description: 'Fill-out an application. Tell us about you and your potential match.',
    },
    {
        number: 'Background Check:',
        description: ' Our background check covers criminal history in order to avoid matching you with someone who might pose a potential risk to you.',
    },
];
const processSteps2 = [
    {
        number: 'Video Introductions:',
        description: 'Tell us more about yourself through video recorded responses.',
    },
    {
        number: 'Pre-Marital Counseling:',
        description: 'Watch the mandatory video by Shiekh Mostafa on finding a suitable partner.',
    },
    {
        number: 'Matched Profiles:',
        description: 'Choose from 3 carefully selected matched profiles.',
    },
];
const OurProcess = () => {
    return (
        <section className='ourprocess_bg pt-[50px]'>
            <Navbar />
            <div className="w-[90%] px-[20px] mx-auto 2xl:py-100px] md:py-[70px] py-[50px] " id="our-process">
                <h2 className="whitespace-nowrap text-left font-[genkaimincho] font-[600] text-[30px] lg:text-[50px] text-black uppercase pb-[5px] ">Our Process</h2>
                <div className="h-[5px] w-[150px] mb-[10px] md:mb-[20px] bg-[#7a1a4a] rounded-md"></div>
                <div className="lg:grid lg:grid-cols-2 xl:gap-10 2xl:gap-14 py-[10px] md:py-[20px] justify-between flex flex-col">
                    <div className="">
                        <ol className="list-inside list-none space-y-6">
                            {processSteps1.map((step, index) => (
                                <li key={step.number} className="">
                                    <span className='font-bold  text-[24px] 2xl:text-[30px] pr-2'>{index + 1}. </span>
                                    <span className={`mr-2 font-bold text-[20px] xl:text-[24px] 2xl:text-[30px] text-left font-[segoe-ui] text-black whitespace-nowrap`}>
                                        {step.number}
                                    </span>
                                    <span className='text-[18px] xl:text-[22px] 2xl:text-[30px]'>{step.description}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                    <div className="">
                        <ol className="list-inside list-none space-y-6 ">
                            {processSteps2.map((step, index) => (
                                <li key={step.number} className="max-w-[90%]">
                                    <span className='font-bold  text-[24px] 2xl:text-[30px] pr-2'>{index + 4}. </span>
                                    <span className={`mr-2 font-bold text-[20px] xl:text-[24px] 2xl:text-[30px] text-left font-[segoe-ui] text-black whitespace-nowrap`}>
                                        {step.number}
                                    </span>
                                    <span className='text-[18px] xl:text-[22px] 2xl:text-[30px]'>{step.description}</span>
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurProcess;
