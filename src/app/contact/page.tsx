import AnimatedHeader from "../components/AnimatedHeader";
import { ContactForm } from "../components/ContactForm";
import { Phone, Mail, MapPin } from "lucide-react";
import GoogleMap from "../components/GoogleMaps";

export default function ContactPage() {

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedHeader
        imageSrc="/img/mgContact.jpg"
        altText="Contact Us"
        headerText="Get in Touch"
      />
      <main className="flex-grow">
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-amber-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-Playfair_Display mb-6">
                  Contact Information
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re here to help you with all your real estate needs. Feel
                  free to reach out to us anytime.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-indigo-600 mr-3" />
                    <span className="text-lg text-gray-700">
                      (404) 555-1234
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-indigo-600 mr-3" />
                    <span className="text-lg text-gray-700">
                      contact@realestate.com
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-6 w-6 text-indigo-600 mr-3" />
                    <span className="text-lg text-gray-700">
                      123 Real Estate St, Atlanta, GA 30301
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 font-Playfair_Display mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 font-Playfair_Display mb-6">
              Where I specialize
            </h2>
            <div className="aspect-w-16 aspect-h-9">
            <GoogleMap apiKey={process.env.GOOGLEMAPS_API_KEY} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

