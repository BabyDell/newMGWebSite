import { ChevronsRight } from "lucide-react";
import AnimatedHeader from "../components/AnimatedHeader";
import Link from "next/link";
import HomeAffordabilityCalculator from "../components/HomeAffordabilityCalculator";

export default function HomeAffordabilityCalculatorPage() {
  return (
    <div>
      <AnimatedHeader
        imageSrc="/img/mgCoffee.jpg"
        altText="Home Affordability Calculator"
        headerText="Home Affordability Calculator"
      />
      <section className="bg-black px-10 pt-5 pb-10">
        <div className="w-full max-w-4xl m-auto">
          <div className="font-Montserrat flex">
            <Link
              className="text-stone-300 hover:text-white transition-colors"
              href="/"
            >
              Home
            </Link>
            <ChevronsRight className="mx-2 w-2 text-stone-300" />{" "}
            <span className="text-white">Home Affordability Calculator</span>
          </div>
          <div className="pt-5 space-y-6 text-gray-300">
            <p className="text-xl leading-relaxed font-serif">
              Use our Home Affordability Calculator to estimate your monthly
              mortgage payment based on the purchase price, down payment,
              mortgage term, taxes, and interest rate. This tool will help you
              understand how much home you can afford and plan your budget
              accordingly.
            </p>
            <HomeAffordabilityCalculator />
            <p className="text-xl leading-relaxed font-serif mt-8">
              Remember, this calculator provides an estimate and doesn&apos;t include
              other potential costs such as insurance, HOA fees, or maintenance.
              For a more accurate assessment of your home buying power, consider
              getting pre-approved for a mortgage or speaking with a financial
              advisor.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
