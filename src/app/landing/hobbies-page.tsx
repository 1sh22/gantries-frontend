import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export default function Component() {
  const hobbies = [
    "Photography",
    "Sketching",
    "Gaming",
    "Singing",
    "Dancing",
    "Videography"
  ]

  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-md"></div>
          <span className="text-xl font-bold text-purple-800">eSamudaay</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-purple-800 hover:text-purple-600">Home</a></li>
            <li><a href="#" className="text-purple-800 hover:text-purple-600">Leaderboard</a></li>
            <li><a href="#" className="text-purple-800 hover:text-purple-600">ONDC Enterprises Solution</a></li>
            <li><a href="#" className="text-purple-800 hover:text-purple-600">About</a></li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-pink-100 opacity-50 rounded-lg"></div>
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Person writing"
              width={600}
              height={600}
              className="relative z-10"
            />
            <div className="absolute inset-0 bg-[url('/dots-pattern.svg')] opacity-50"></div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Setting up your Gantries account</h2>
            <div className="mb-4">
              <span className="text-sm font-medium text-gray-500">Step 1 of 3</span>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                <div className="bg-pink-500 h-2.5 rounded-full" style={{ width: '33.33%' }}></div>
              </div>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-4">Tell us about your hobbies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobbies.map((hobby, index) => (
                <Card key={index} className={`cursor-pointer ${index === 0 ? 'border-2 border-purple-600' : ''}`}>
                  <CardContent className="flex items-center justify-center p-4">
                    <span className="text-sm font-medium">{hobby}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Button 
              className="mt-6 bg-purple-600 hover:bg-purple-700 float-right"
            >
              Next
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}