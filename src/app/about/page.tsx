import Image from "next/image";
import AnimatedHeader from "../components/AnimatedHeader";

export default function ResponsiveLayout() {
  return (
    <div className="">
      <AnimatedHeader
        imageSrc="/img/mgHome.jpg"
        headerText="Get To Know Me"
        altText="Meet Maria"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16 py-16">
          {/* First section: Image-Text */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="w-full">
              <Image
                src="/img/headshot.jpg"
                alt="First section image"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 p-4 font-Playfair_Display">
                Coachella Valley and <span className="block"/>Greater Palm Springs 
              </h2>
              <p className="p-4 font-serif tracking-wide text-xl">
                Maria Gutierrez has lived in the Coachella Valley for over 20
                years and has taken an interest in the ever-growing real estate
                industry. She went to the Valley&apos;s Community College to obtain
                an AA in Business Administration which goes hand in hand with
                becoming a successful real estate agent. Having a background as
                a tax preparer has allowed her to build trusting relationships
                within the community which fuels her passion for helping those
                in need. During Maria&apos;s off time, she enjoys gardening and
                taking long walks for self-care of her body, mind, and soul.
                Being the persevering and motivated person that she is, she can
                assure you that she is ready to take on the role of being your
                agent and delivering exceptional real estate services in your
                home-buying or selling journey.
              </p>
            </div>
          </div>

          {/* Second section: Text-Image */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 md:order-1 order-2">
             
              <p className="mt-5 text-xl font-serif tracking-wide">
                Maria attributes her success to her effective working
                relationships with her clients. Her first priority is always
                open, honest communication about her client&apos;s particular needs
                and lifestyle. Finding the right property, or selling a home has
                its rewards, but for Maria, a life-long relationship with a
                client brings her genuine personal satisfaction.
              </p>
              <p className="mt-5 text-xl font-serif tracking-wide">
                Above all, Maria is deeply committed to enhancing her clients&apos;
                lives by helping them find homes that bring joy and fulfillment.
                She has a keen understanding of the value of real estate as an
                investment, and her intuitive approach allows her to maximize
                returns for her clients. When listing a home, Maria carefully
                assesses market conditions and advises her clients to be
                strategic and patient in order to achieve the best possible
                results.
              </p>
            </div>
            <div className="w-full md:order-2 order-1 hidden md:block">
              <Image
                src="/img/headshot.jpg"
                alt="Second section image"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

