import React, { use } from 'react';

const Steps = ({ stepsPromise }) => {

    const steps = use(stepsPromise);
    console.log(steps);


    return (
        <section className="py-20 bg-gray-50">

            {/* Header */}
            <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-[#101727]">Get Started In 3 Steps</h2>
                <p className="mt-3 text-[#627382] max-w-2xl mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
                {
                    steps.map(step => <div key={step.stepNumber} className="bg-white rounded-xl shadow-md p-6 text-center flex flex-col items-center space-y-4">
                        {/* Step Number */}
                        <div className=''>
                            <p className=' font-bold bg-linear-to-t from-[#4F39F6] to-[#9514FA] text-white p-2 rounded-full h-10 w-10 items-center'>{step.stepNumber}</p>
                        </div>
                        <div>
                            <img src={step.icon} alt="" />
                        </div>

                        {/* Title + Description */}
                        <div>
                            <h3 className="text-xl font-semibold text-[#101727]">{step.title}</h3>
                            <p className="text-[#627382] mt-2">{step.description}</p>
                        </div>
                    </div>)
                }
            </div>

        </section>
    );
};

export default Steps;

