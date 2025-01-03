import Image from "next/image";
import AnimatedHeader from "@/components/AnimatedHeader";
import { ZoomImage } from "@/components/ZoomImage";

export default function Buyers() {
  return (
    <div className="min-h-screen bg-gray-50">
      <AnimatedHeader
        imageSrc="/img/mgCoffee.jpg"
        altText="Sellers"
        headerText="Sellers"
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
                For Sellers
              </h1>
              <h2 className="text-2xl font-bold text-indigo-400 font-Playfair_Display">
                Complete Listings Services
              </h2>
              <blockquote className="text-xl italic font-semibold text-white border-l-4 border-indigo-400 pl-4">
                &quot;Regardless of your reasons for selling, my proven
                marketing strategies will guarantee that you receive the highest
                possible price for your home.&quot;
              </blockquote>
            </div>
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
              <div className="p-6 space-y-6 text-gray-700">
                <p className="text-lg leading-relaxed font-serif">
                  Selling a home is a decision influenced by many factors, and
                  whatever your reason for selling, my proven marketing
                  strategies are designed to help you achieve the highest
                  possible price for your property. I am committed to providing
                  professional, ethical, and confidential service, keeping you
                  informed throughout the entire process. For most families,
                  their home is their largest financial asset, and selling it is
                  a significant decision that requires careful planning and
                  effort. That&apos;s why it&apos;s crucial to work with an
                  experienced real estate professional who can manage the
                  details and ensure a successful sale for the best possible
                  price.
                </p>
                <p className="text-lg leading-relaxed font-serif">
                  With years of experience helping Atlanta homeowners sell their
                  properties, I am well-equipped to handle every step of the
                  process—from effective marketing and staging to ensuring a
                  smooth closing.
                </p>
                <p className="text-lg leading-relaxed font-serif">
                  Delivering a comprehensive, high-quality listing service is my
                  top priority. When you&apos;re ready to sell, reach out to me,
                  and let&apos;s start the journey toward getting your home
                  sold!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black w-full py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="w-full h-96 relative mb-10">
            <Image
              src="/img/mgCoffee.jpg"
              alt="Buyers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-75" />
            <div className="absolute inset-0 flex items-center justify-center text-white text-3xl md:text-5xl tracking-wider font-Playfair_Display ">
              Home Valuation
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ">
            <div className="p-6 space-y-6 text-gray-300">
              <p className="text-xl leading-relaxed font-serif">
                I recognize that selling your home is a significant life
                decision, and in today&apos;s dynamic market, it requires a
                comprehensive and strategic approach. That&apos;s why I am
                committed to managing the entire process on your behalf,
                providing you with a seamless and stress-free experience. My
                advanced marketing strategies are designed to maximize exposure
                and ensure that your home sells for the highest possible price
                in the shortest time frame.
              </p>
              <p className="text-xl leading-relaxed font-serif">
                To assist you in understanding your property&apos;s potential
                value, I offer an automated home valuation tool that uses a
                combination of proprietary data, public sales records, and
                current market trends. You can access this tool by clicking the
                link below. However, for a more precise evaluation of your
                home&apos;s worth and to discuss a tailored marketing strategy,
                I would be happy to schedule a personalized consultation at your
                convenience.
              </p>
            </div>
            <div className="space-y-2 w-full ">
              <div className="w-full max-w-lg h-48 m-auto">
                <ZoomImage
                  src="/img/mgFinance.jpg"
                  alt="Buyers"
                  text="Financial Obligations"
                  link="/buyers"
                />
              </div>
              <div className="w-full max-w-lg h-48 m-auto">
                <ZoomImage
                  src="/img/mgSuccess.jpg"
                  alt="Buyers"
                  text="A Road Map Of The Entire Process"
                  link="/buyers"
                />
              </div>
              <div className="w-full max-w-lg h-48 m-auto">
                <ZoomImage
                  src="/img/mgHandshake.jpg"
                  alt="Buyers"
                  text="Why You Should Hire A Real Estate Proffesional"
                  link="/why-you-should-hire-a-real-estate-professional"
                />
              </div>
              <div className="w-full max-w-lg h-48 m-auto">
                <ZoomImage
                  src="/img/mgHomeAfford.jpg"
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
