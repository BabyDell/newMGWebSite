import { ChevronsRight } from "lucide-react";
import AnimatedHeader from "../components/AnimatedHeader";
import Link from "next/link";

export default function FinancialObligations() {
  return (
    <div>
      <AnimatedHeader
        imageSrc="/img/mgCoffee.jpg"
        altText="Why You Should Hire a Real Estate Professional"
        headerText="Why You Should Hire a Real Estate Professional"
      />
      <section className="bg-black px-10 pt-5 pb-10">
        <div className="w-[1000px] m-auto">
          <div className="font-Montserrat flex">
            <Link
              className="text-stone-300 hover:text-white transition-colors"
              href="/"
            >
              Home
            </Link>
            <ChevronsRight className="mx-2 w-2 text-stone-300" />{" "}
            <span className="text-white">
              Why You Should Hire a Real Estate Professional
            </span>
          </div>
          <div className="pt-5 space-y-6 text-gray-300">
            <p className="text-xl leading-relaxed font-serif">
              Few buyers attempt to purchase their first home without the
              assistance of a qualified real estate agent. Those who choose to
              go it alone often believe they can save on commission costs, but
              the true value of an agent lies in their ability to negotiate on
              your behalf. Skilled agents are uniquely positioned to secure the
              best possible terms for their clients.
            </p>
            <p className="text-xl leading-relaxed font-serif">
              In fact, studies show that homebuyers who do not work with an
              agent often end up paying as much as $10,000 more for a property
              compared to those who enlist the help of an experienced
              professional. While conducting thorough research can help you
              identify the right home, securing it at the most favorable price
              requires the expertise of a seasoned negotiator.
            </p>
            <p className="text-xl leading-relaxed font-serif">
              To ensure you get the best deal possible, contact Quiana today and
              let her guide you through the process with expert negotiation
              skills.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
