export default function Introduction() {
    const sections = [{
        title: "Bring those ideas to life",
        description: "FigJam and Figma live side-by-side, so all design work, from ideation to execution, can be found in one place.",
    },
        {
            title: "Create. Iterate. Repeat.",
            description: "Build an iterative design flow with live collaboration that keeps you in the loop whether you’re working in the office or remotely.",
        },
        {
            title: "Test and get buy-in",
            description: "Share, present, and gather feedback on interactive prototypes with smart animation and dynamic overlays that feel like the real thing.",
        }]
    return <div>
        <div className="grid grid-cols-2">
            <div>
                {sections.map((section, index) => <div key={section.title}
                                                       className={"relative " + (index === 0 ? "pb-[50rem] pt-24" : "py-[50rem]")}>
                    <div className="sticky top-0 ">
                        <div className="text-4xl font-bold">
                            {section.title}
                        </div>
                        <p className="text-2xl mt-2">
                            {section.description}
                        </p>
                    </div>
                </div>)}
            </div>

        </div>
    </div>
}