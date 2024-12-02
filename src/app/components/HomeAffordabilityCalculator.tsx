"use client";

import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export default function HomeAffordabilityCalculator() {
  const [purchasePrice, setPurchasePrice] = useState<number | "">(500000);
  const [mortgageTerm, setMortgageTerm] = useState(30);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [annualTaxesPercent, setAnnualTaxesPercent] = useState(1);
  const [interestRate, setInterestRate] = useState(3.5);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    calculateMonthlyPayment();
  }, [
    purchasePrice,
    mortgageTerm,
    downPaymentPercent,
    annualTaxesPercent,
    interestRate,
  ]);

  const calculateMonthlyPayment = () => {
    if (purchasePrice === "") {
      setMonthlyPayment(0);
      return;
    }

    const principal = purchasePrice * (1 - downPaymentPercent / 100);
    const monthlyInterestRate = interestRate / 100 / 12;
    const numberOfPayments = mortgageTerm * 12;

    const monthlyMortgagePayment =
      (principal *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    const monthlyTaxes = (purchasePrice * (annualTaxesPercent / 100)) / 12;

    const totalMonthlyPayment = monthlyMortgagePayment + monthlyTaxes;
    setMonthlyPayment(Math.round(totalMonthlyPayment));
  };

  const roundToNearest = (value: number, nearest: number) => {
    return Math.round(value / nearest) * nearest;
  };

  const handlePurchasePriceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setPurchasePrice(value === "" ? "" : Number(value));
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Home Affordability Calculator
      </h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Purchase Price:{" "}
            {purchasePrice === ""
              ? "$0"
              : `$${Number(purchasePrice).toLocaleString()}`}
          </label>
          <Input
            type="number"
            value={purchasePrice}
            onChange={handlePurchasePriceChange}
            className="w-full text-black"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Mortgage Term (years)
          </label>
          <Select onValueChange={(value) => setMortgageTerm(Number(value))}>
            <SelectTrigger className="text-black">
              <SelectValue placeholder="Select term" />
            </SelectTrigger>
            <SelectContent>
              {[5, 10, 15, 20, 25, 30].map((term) => (
                <SelectItem
                  className="text-black placeholder:text-black"
                  key={term}
                  value={term.toString()}
                >
                  {term} years
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Down Payment: {downPaymentPercent}%
            {purchasePrice !== "" &&
              ` ($${roundToNearest(
                Number(purchasePrice) * (downPaymentPercent / 100),
                1000
              ).toLocaleString()})`}
          </label>
          <Slider
            min={0}
            max={80}
            step={1}
            value={[downPaymentPercent]}
            onValueChange={(value) => setDownPaymentPercent(value[0])}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Annual Taxes: {annualTaxesPercent}%
            {purchasePrice !== "" &&
              ` ($${roundToNearest(
                Number(purchasePrice) * (annualTaxesPercent / 100),
                500
              ).toLocaleString()})`}
          </label>
          <Slider
            min={0}
            max={20}
            step={0.1}
            value={[annualTaxesPercent]}
            onValueChange={(value) => setAnnualTaxesPercent(value[0])}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">
            Interest Rate: {interestRate}%
          </label>
          <Slider
            min={0}
            max={10}
            step={0.1}
            value={[interestRate]}
            onValueChange={(value) => setInterestRate(value[0])}
          />
        </div>

        <div className="mt-8 text-black">
          <h3 className="text-xl font-semibold text-center">
            Estimated Monthly Payment
          </h3>
          <p className="text-3xl font-bold text-center mt-2">
            ${monthlyPayment.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
