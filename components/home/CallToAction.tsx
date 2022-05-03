// @ts-ignore
import Fade from 'react-reveal/Fade';

export default function CallToAction() {
    return (

            <div className="rounded-2xl shadow-2xl shadow-blue-600/30 h-96 bg-blue-700 flex items-center p-12">
                <Fade bottom cascade>
                <div className="max-w-2xl mx-auto text-center">
                    <h1 className="text-6xl font-bold">
                        Ready to get started?
                    </h1>
                    <p className="text-2xl mt-4">
                        For more information on our beta release timeline, please contact the ForeverFan team by email
                        here.
                    </p>
                </div>
                </Fade>
            </div>
    )
}
