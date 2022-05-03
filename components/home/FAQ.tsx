// @ts-ignore
import Fade from 'react-reveal/Fade';


/* This example requires Tailwind CSS v2.0+ */
const faqs = [
    {
        id: 1,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 2,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 11,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 12,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 13,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]

export default function FAQ() {
    return (
        <div id="faq">
            <div>
                <Fade bottom>
                    <div className="lg:max-w-5xl lg:mx-auto lg:text-center">
                        <h2 className="text-5xl lg:text-7xl font-bold text-white ">Frequently asked questions</h2>
                        <p className="mt-4 text-neutral-300 text-xl lg:text-2xl">
                            Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing
                            sagittis vel nulla nec.
                            Urna, sed a lectus elementum blandit et.
                        </p>
                    </div>
                </Fade>

                <div className="mt-20">
                    <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-6">
                        {faqs.map((faq, index) => (
                            <Fade bottom key={faq.id} delay={index * 25}>
                                <div className="p-6 bg-neutral-800 rounded-xl">
                                    <dt className="font-semibold text-white text-xl">{faq.question}</dt>
                                    <dd className="mt-3 text-neutral-300 text-lg">{faq.answer}</dd>
                                </div>
                            </Fade>
                        ))}
                    </dl>
                </div>

            </div>
        </div>
    )
}
