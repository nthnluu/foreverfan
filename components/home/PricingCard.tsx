import {CheckIcon} from "@heroicons/react/solid";
import {FC} from "react";

interface Props {
    name: string;
    description: string;
    href: string;
    priceMonthly: number;
    priceYearly: number;
    includedFeatures: string[];
}

const PricingCard: FC<Props> = ({name, description, href, priceMonthly, priceYearly, includedFeatures}) => {
    return <div className="bg-neutral-800 h-full rounded-xl shadow-sm divide-y divide-neutral-600">
        <div className="p-8">
            <h2 className="text-2xl leading-6 font-medium">{name}</h2>
            <p className="mt-2 text-neutral-400">{description}</p>
            <p className="mt-8">
                <span className="text-5xl font-bold">${priceMonthly}</span>{' '}
                <span className="text-lg font-medium text-neutral-400">/mo</span>
            </p>
            <a
                href={href}
                className="mt-8 block w-full bg-blue-600 border border-gray-800 rounded-md py-2 font-semibold text-white text-center hover:bg-blue-700"
            >
                Buy {name}
            </a>
        </div>
        <div className="pt-6 pb-8 px-6">
            <h3 className="font-medium tracking-wide uppercase">What&apos;s included</h3>
            <ul role="list" className="mt-6 space-y-4">
                {includedFeatures.map((feature) => (
                    <li key={feature} className="flex space-x-3 items-center">
                        <CheckIcon className="flex-shrink-0 h-5 w-5 text-green-400" aria-hidden="true"/>
                        <span className="text-neutral-400">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
}

export default PricingCard