// @ts-ignore
import Fade from 'react-reveal/Fade';

const items = [
    {
        heading: "Build your fanbase",
        body: "Every new ForeverFan automatically follows your artist profile and adds your back catalog to their library."
    },
    {
        heading: "Enhance your releases",
        body: "ForeverFans automatically pre-save all future releases, generating consistent career growth."
    },
    {
        heading: "Accelerate your career",
        body: "The ForeverFan system maximizes fan retention from ephemeral settings like concerts, social media, and beyond."
    },
]

export default function Overview() {
    return <div id="overview">
        <div className="max-w-8xl mx-auto space-y-24 lg:space-y-48">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div>
                    <Fade left>
                        <img src="/sample1.png"/>
                    </Fade>
                </div>
                <div className="space-y-12 lg:pl-24 max-w-3xl">
                    <Fade bottom>
                        <h1 className="text-6xl font-bold">
                            Pre-save your future releases with one click
                        </h1>
                        {items.map(item => <div key={item.heading}>
                            <h2 className="text-xl font-bold">
                                {item.heading}
                            </h2>
                            <p className="text-lg mt-1 font-light text-neutral-400">
                                {item.body}
                            </p>
                        </div>)}
                    </Fade>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="space-y-12 lg:pl-24 max-w-3xl">
                    <Fade bottom>
                        <h1 className="text-6xl font-bold">
                            Pre-save your future releases with one click
                        </h1>
                        {items.map(item => <div key={item.heading}>
                            <h2 className="text-xl font-bold">
                                {item.heading}
                            </h2>
                            <p className="text-lg mt-1 font-light text-neutral-400">
                                {item.body}
                            </p>
                        </div>)}
                    </Fade>
                </div>
                <div>
                    <Fade right>
                        <img src="/sample.png"/>
                    </Fade>
                </div>
            </div>
        </div>
    </div>
}