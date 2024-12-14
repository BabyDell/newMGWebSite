import Image from "next/image";

export default function ContactUsForum() {
  return (
    <div className="w-full relative mt-20">
      <Image src="/img/mgHome.jpg" alt="home" fill className="object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-75" />

      <div className="relative max-w-7xl mx-auto  p-8 ">
        <h2 className="text-4xl font-bold mb-6 text-white text-center">
          Contact Us
        </h2>
        <form>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="placeholder:text-white shadow appearance-none border-b border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-transparent"
                placeholder="First Name"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="placeholder:text-white shadow appearance-none border-b border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-transparent"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="flex mb-4">
            <div className="w-1/2 pr-2">
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="placeholder:text-white shadow appearance-none border-b border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-transparent"
                placeholder="Phone Number"
              />
            </div>
            <div className="w-1/2 pl-2">
              <input
                type="email"
                id="emailAddress"
                name="emailAddress"
                className="placeholder:text-white shadow appearance-none border-b border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-transparent"
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-4">
            <textarea
              id="message"
              name="message"
              className="placeholder:text-white shadow appearance-none border-b border-gray-300 rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline  bg-transparent"
              placeholder="Message / Inquiry"
              rows={4}
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline m-auto"
            >   
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
