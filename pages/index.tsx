import type {NextPage} from 'next'
import HeroCard from "../components/home/HeroCard";
import Artists from "../components/home/Artists";
import Navbar from "../components/Navbar";
import Overview from "../components/home/Overview";
import Pricing from "../components/home/Pricing";
import FAQ from "../components/home/FAQ";
import Footer from "../components/Footer";
import CallToAction from "../components/home/CallToAction";
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

// New is a page that allows artists to schedule new releases
const New: NextPage = () => {
    // the index of the section currently in view
    const [inViewSection, setInViewSection] = useState<undefined | number>(0);

    const [overviewRef, overviewInView] = useInView();
    const [artistsRef, artistsInView] = useInView();
    const [pricingRef, pricingInView] = useInView();
    const [faqRef, faqInView] = useInView();

    useEffect(() => {
        [overviewInView, artistsInView, pricingInView, faqInView].reverse().forEach((val, index) => {
            if (!overviewInView && !artistsInView && !pricingInView && !faqInView) {
                setInViewSection(undefined)
            }

            if (val) {
                setInViewSection(3 - index)
            }
        })
    }, [overviewInView, artistsInView, pricingInView, faqInView])

    return (
        <div className="relative">
            <header className="fixed top-0 z-50 w-full">
                <Navbar inView={inViewSection}/>
            </header>
            <div className="px-4 sm:px-8 max-w-8xl mx-auto bg-neutral-900 pb-48">
                <div className="h-screen pt-28 pb-8">
                    <HeroCard/>
                </div>
                <div className="space-y-48 mt-24">
                    <div ref={overviewRef}>
                        <Overview/>
                    </div>
                    <div ref={artistsRef}>
                        <Artists/>
                    </div>
                    <div ref={pricingRef}>
                        <Pricing/>
                    </div>
                    <div ref={faqRef}>
                        <FAQ/>
                    </div>
                    <CallToAction/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default New;
