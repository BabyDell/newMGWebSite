import Image from "next/image";
import AnimatedHeader from "../components/AnimatedHeader";
import { ZoomImage } from "../components/ZoomImage";

export default function Buyers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedHeader
        imageSrc="/img/mgHome2.jpg"
        altText="Buyers"
        headerText="Buyers"
      />
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8">
        <Image
          src="/img/mgHome2.jpg"
          alt="Buyers"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-black opacity-85" />

        <div className="relative inset-0 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl ">
                For Buyers
              </h1>
              <h2 className="text-2xl font-bold text-indigo-400 font-Playfair_Display">
                High Quality Buyer Services
              </h2>
              <blockquote className="text-xl italic font-semibold text-white border-l-4 border-indigo-400 pl-4">
                &quot;By providing top-notch, all-encompassing services, I can
                help you save both time and money, while making the entire
                experience more enjoyable and stress-free.&quot;
              </blockquote>
            </div>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-6 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed font-serif">
                  Whether you&apos;re searching for your first home, your dream
                  property, or an investment opportunity, I&apos;m dedicated to
                  delivering exceptional buyer services. Purchasing a home is a
                  major financial commitment, and you deserve access to the
                  latest market insights and expert advice—both of which I&apos;m
                  here to offer.
                </p>
                <p className="text-lg leading-relaxed">
                  Buying a home is an exciting journey, but it can also be
                  overwhelming, time-consuming, and costly if you&apos;re not
                  familiar with the process or don&apos;t have the right information
                  and resources at your disposal.
                </p>
                <p className="text-lg leading-relaxed">
                  One of my core strengths is advocating for buyers in the
                  Atlanta area throughout the home-buying process. My
                  all-inclusive, top-tier services are designed to save you time
                  and money while making the experience smoother, more
                  enjoyable, and far less stressful.
                </p>
                <p className="text-lg leading-relaxed">
                  For most people, buying a home is the largest financial
                  investment they&apos;ll ever make. So whether you&apos;re purchasing
                  your first home, a forever home, or an investment property,
                  why not leverage my expertise as a local market professional
                  to ensure you&apos;re making informed decisions every step of the
                  way?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
            <div className="space-y-2 mx-auto text-center lg:text-start">
              <h1 className="text-2xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-4xl ">
                Would You Like To
              </h1>
              <h2 className="text-5xl font-bold text-indigo-400 font-Playfair_Display tracking-wider pb-5">
                Learn More <span className="block" />
                About The <span className="block" />
                Process?
              </h2>
              <h3 className="text-3xl italic font-semibold text-white tracking-wide font-serif w-[30rem]">
                This detailed home buying guide will address a few of the key
                questions that most buyers have.
              </h3>
            </div>
            <div className="space-y-2 w-full  m-auto">
              <div className="w-full max-w-lg m-auto h-48">
                <ZoomImage
                  src="/img/buyers/mgFinance.jpg"
                  alt="Buyers"
                  text="Financial Obligations"
                  link="/financial-obligations"
                />
              </div>
              <div className="w-full max-w-lg  m-auto  h-48">
                <ZoomImage
                  src="/img/buyers/mgSuccess.jpg"
                  alt="Buyers"
                  text="A Road Map Of The Entire Process"
                  link="/buyers"
                />
              </div>
              <div className="w-full max-w-lg  m-auto  h-48">
                <ZoomImage
                  src="/img/buyers/mgHandshake.jpg"
                  alt="Buyers"
                  text="Why You Should Hire A Real Estate Proffesional"
                  link="/why-you-should-hire-a-real-estate-professional"
                />
              </div>
              <div className="w-full max-w-lg  m-auto  h-48">
                <ZoomImage
                  src="/img/buyers/mgHomeAfford.jpg"
                  alt="Buyers"
                  text="Home Affordability Calculator"
                  link="/home-affordability-calculator"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
