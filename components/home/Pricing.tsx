/* This example requires Tailwind CSS v2.0+ */
import {CheckIcon} from '@heroicons/react/solid'
import PricingCard from "./PricingCard";
// @ts-ignore
import Fade from 'react-reveal/Fade';


const tiers = [
    {
        name: 'Hobby',
        href: '#',
        priceMonthly: 12,
        description: 'All the basics for starting a new business',
        includedFeatures: ['Potenti felis, in cras at at ligula nunc.', 'Orci neque eget pellentesque.'],
    },
    {
        name: 'Freelancer',
        href: '#',
        priceMonthly: 24,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
        ],
    },
    {
        name: 'Startup',
        href: '#',
        priceMonthly: 32,
        description: 'All the basics for starting a new business',
        includedFeatures: [
            'Potenti felis, in cras at at ligula nunc. ',
            'Orci neque eget pellentesque.',
            'Donec mauris sit in eu tincidunt etiam.',
            'Faucibus volutpat magna.',
        ],
    }
]

export default function Pricing() {
    return (
        <div id="pricing">
            <div>
                <Fade bottom>
                    <div className="sm:flex sm:flex-col sm:align-center max-w-6xl mx-auto">
                        <h1 className="text-5xl lg:text-7xl font-bold sm:text-center">Simple, flexible pricing plans
                            that grow
                            with you</h1>
                        <p className="mt-5 text-xl lg:text-2xl text-neutral-400 sm:text-center">
                            Start building for free, then add a site plan to go live. Account plans unlock additional
                            features.
                        </p>
                        <div className="relative self-center mt-6 bg-neutral-800 rounded-lg p-0.5 flex sm:mt-8">
                            <button
                                type="button"
                                className="relative w-1/2 bg-white bg-neutral-600 rounded-md shadow-sm py-3 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-12"
                            >
                                Monthly billing
                            </button>
                            <button
                                type="button"
                                className="ml-0.5 relative w-1/2 border border-transparent rounded-md py-3 text-sm font-medium whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:z-10 sm:w-auto sm:px-12"
                            >
                                Yearly billing
                            </button>
                        </div>
                    </div>
                    <div
                        className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
                        {tiers.map((tier, index) => <Fade key={tier.name} delay={index * 50} bottom>
                            <PricingCard name={tier.name} description={tier.description}
                                         href={tier.href} priceMonthly={tier.priceMonthly}
                                         priceYearly={tier.priceMonthly}
                                         includedFeatures={tier.includedFeatures}/>
                        </Fade>)}
                    </div>
                </Fade>
            </div>
        </div>
    )
}
