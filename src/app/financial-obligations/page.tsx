import { ChevronsRight } from 'lucide-react';
import AnimatedHeader from "../components/AnimatedHeader";
import Link from "next/link";

export default function FinancialObligations() {
  return (
    <div>
      <AnimatedHeader
        imageSrc="/img/mgCoffee.jpg"
        altText="Financial Obligations"
        headerText="Financial Obligations"
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
            <span className="text-white">Financial Obligations</span>
          </div>
          <div className="pt-5 space-y-6 text-gray-300">
            <p className="text-xl leading-relaxed font-serif">
              Before you begin browsing properties or reaching out to real
              estate agents, it's essential to first get your financial house in
              order. This involves addressing any outstanding debts, improving
              your credit score, and building a robust savings account to secure
              a down payment—ideally, 20% of the home's purchase price.
              Prioritize this step to ensure you are financially prepared.
            </p>
            <p className="text-xl leading-relaxed font-serif">
              If a 20% down payment isn't feasible, most lenders will accept as
              little as 5%. However, be aware that if your down payment is less
              than 20%, you'll likely be required to pay for private mortgage
              insurance (PMI).
            </p>
            <p className="text-xl leading-relaxed font-serif">
              Once your finances are in shape, it's time to start preparing for the home-buying process. The first concrete step is to get pre-approved for a mortgage by a bank or lender.
            </p>
            <p className="text-xl leading-relaxed font-serif">
              It's important to understand the distinction between pre-qualification and pre-approval:    
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xl leading-relaxed font-serif">
              <li>Pre-Qualification: Offers a general estimate of how much you can afford based on basic financial information.</li>
              <li>Pre-Approval: Provides a more definitive answer, specifying how much a lender is willing to guarantee you for a home loan.</li>
            </ul>
            <p className="text-xl leading-relaxed font-serif">
              Having a pre-approval letter in hand when attending open houses signals to sellers that you are a serious and financially capable buyer. Additionally, knowing your approved loan amount helps you stick to your budget throughout the process.
            </p>
            <p className="text-xl leading-relaxed font-serif">
              When planning your home purchase, be sure to factor in additional costs beyond the sale price, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-xl leading-relaxed font-serif">
              <li>Home inspections</li>
              <li>Necessary repairs</li>
              <li>Closing costs</li>
              <li>Contingency fees</li>
              <li>Other associated expenses</li>
            </ul>
            <p className="text-xl leading-relaxed font-serif">
              By preparing ahead of time and understanding all financial aspects, you'll be in a stronger position to navigate the home-buying process confidently.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

