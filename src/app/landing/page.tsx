"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const [step, setStep] = useState(1);

  const roles = [
    { name: 'Marketing', icon: '/placeholder.svg' },
    { name: 'Development', icon: '/placeholder.svg' },
    { name: 'Designing', icon: '/placeholder.svg' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-800 rounded-md"></div>
          <span className="text-xl font-bold text-purple-800">Changepay</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-600 hover:text-purple-800">Home</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-800">Leaderboard</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-800">ONDC Enterprises Solution</a></li>
            <li><a href="#" className="text-gray-600 hover:text-purple-800">About</a></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-50 rounded-lg"></div>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Graduate"
              width={400}
              height={400}
              className="relative z-10"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            {step === 1 ? (
              <>
                <h1 className="text-4xl font-bold text-purple-800 mb-4">Welcome Riya!</h1>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                  Let's kickstart your journey to the best placement package possible!
                </h2>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet consectetur adipiscing eli mattis
                  sit phasellus mollis sit aliquam sit nullam neque ultrices.
                </p>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Setting up your Gantries account</h2>
                <div className="mb-4">
                  <span className="text-sm font-medium text-gray-500">Step {step} of 3</span>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                    <div className="bg-purple-800 h-2.5 rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
                  </div>
                </div>
                <h3 className="text-xl font-medium text-gray-700 mb-4">What is your dream role?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {roles.map((role, index) => (
                    <Card key={index} className="cursor-pointer hover:border-purple-800">
                      <CardContent className="flex flex-col items-center justify-center p-4">
                        <Image src={role.icon} alt={role.name} width={48} height={48} className="mb-2" />
                        <span className="text-sm font-medium">{role.name}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </>
            )}
            <Button 
              onClick={() => setStep(prev => Math.min(prev + 1, 3))} 
              className="mt-6 bg-purple-800 hover:bg-purple-700"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
