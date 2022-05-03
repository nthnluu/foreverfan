import {Disclosure, Popover, Transition } from "@headlessui/react";
import {Fragment} from "react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";

export default function Navbar({inView}: { inView: number | undefined }) {
    function scrollToTop() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    function scrollIntoView(id: string) {
        const yOffset = -150;
        const element = document.querySelector(id);
        if (element != null) {
            const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
        }
    }

    return <>
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="py-6 bg-neutral-900">
                        <div className="px-4 sm:px-8 max-w-8xl mx-auto">
                            <div className="flex justify-between items-center">
                                <div className="flex items-center space-x-1">
                                    <button onClick={scrollToTop} className="flex items-center space-x-1">
                                        <img src="https://www.foreverfan.org/static/media/logoCircle.0bb81bdd.svg"
                                             className="h-16"/>
                                        <h1 className="text-3xl font-bold">
                                            ForeverFan
                                        </h1>
                                    </button>


                                    <div className="font-medium text-neutral-500 space-x-8 pl-8 hidden lg:block">
                                        <button onClick={() => scrollIntoView("#overview")}
                                                className={"transition-colors duration-200 " + (inView == 0 && "text-white")}>
                                            Our Product
                                        </button>
                                        <button onClick={() => scrollIntoView("#artists")}
                                                className={"transition-colors duration-200 " + (inView == 1 && "text-white")}>
                                            Artist Stories
                                        </button>
                                        <button onClick={() => scrollIntoView("#pricing")}
                                                className={"transition-colors duration-200 " + (inView == 2 && "text-white")}>
                                            Pricing
                                        </button>
                                        <button onClick={() => scrollIntoView("#faq")}
                                                className={"transition-colors duration-200 " + (inView == 3 && "text-white")}>
                                            FAQ
                                        </button>
                                    </div>
                                </div>

                                <div className="justify-between space-x-2 hidden lg:flex">
                                    <button
                                        className="border border-gray-300 shadow-sm text-md px-8 py-2 rounded-xl font-medium text-gray-300">
                                        Artist Login
                                    </button>
                                    <button className="bg-blue-600 text-white text-md px-8 py-2 shadow-lg shadow-blue-600/50 rounded-xl font-semibold hover-fade">
                                        Get started
                                    </button>
                                </div>

                                {/* Mobile menu button*/}
                                <div className="block lg:hidden">
                                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>



                            </div>
                        </div>
                    </div>
                    <Disclosure.Panel className="lg:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {/*{navigation.map((item) => (*/}
                            {/*    <Disclosure.Button*/}
                            {/*        key={item.name}*/}
                            {/*        as="a"*/}
                            {/*        href={item.href}*/}
                            {/*        className={classNames(*/}
                            {/*            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',*/}
                            {/*            'block px-3 py-2 rounded-md text-base font-medium'*/}
                            {/*        )}*/}
                            {/*        aria-current={item.current ? 'page' : undefined}*/}
                            {/*    >*/}
                            {/*        {item.name}*/}
                            {/*    </Disclosure.Button>*/}
                            {/*))}*/}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    </>

}