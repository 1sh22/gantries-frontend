import Image from "next/image"
import { Search, Home, MessageSquare, Users, FileText, BookOpen, Calendar, ChevronDown } from "lucide-react"
import { ReactNode } from 'react'

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4 border-b">
          <h1 className="text-xl font-semibold">Gantries <span className="text-purple-600">Dashboard</span></h1>
        </div>
        <div className="p-4">
          <div className="flex items-center space-x-4 mb-6">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-medium">Deepika</span>
          </div>
          <nav className="space-y-2">
            <NavItem icon={<Home className="w-5 h-5" />} label="Home" active />
            <NavItem icon={<MessageSquare className="w-5 h-5" />} label="Message" />
            <NavItem icon={<Users className="w-5 h-5" />} label="Friends" />
            <NavItem icon={<FileText className="w-5 h-5" />} label="Feed" />
            <NavItem icon={<BookOpen className="w-5 h-5" />} label="Stories" />
            <NavItem icon={<Calendar className="w-5 h-5" />} label="Events" />
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-4">
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Road Map */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">Your Personalised Road Map</h2>
              <div className="relative h-48">
                {/* Replace with actual road map implementation */}
                <div className="absolute top-0 left-0 w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center">
                  <span className="font-semibold">Stage 1</span>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-semibold">Stage 2</span>
                </div>
                <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center">
                  <span className="font-semibold">Stage 3</span>
                </div>
                <div className="absolute bottom-0 right-1/4 w-24 h-24 rounded-full bg-orange-200 flex items-center justify-center">
                  <span className="font-semibold">Stage 4</span>
                </div>
                <div className="absolute bottom-0 left-1/4 w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center">
                  <span className="font-semibold">Stage 5</span>
                </div>
                <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full bg-yellow-200 flex items-center justify-center">
                  <span className="font-semibold">Stage 6</span>
                </div>
              </div>
              <div className="text-right mt-2">
                <button className="text-purple-600 font-medium flex items-center justify-end w-full">
                  Expand <ChevronDown className="ml-1 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Progress */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">Your Progress</h2>
              <div className="flex justify-between">
                <ProgressCircle value={40} label="Completed Projects" />
                <ProgressCircle value={25} label="Connections made" />
              </div>
            </div>

            {/* Industrial Insights */}
            <div className="md:col-span-2 bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">Industrial Insights</h2>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
              </p>
              {/* Add more content for Industrial Insights */}
            </div>

            {/* New Events */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">New Events</h2>
              <ul className="space-y-2">
                <EventItem label="AI-ML Workshop" />
                <EventItem label="Cybersecurity Workshop" />
                <EventItem label="Image processing Workshop" />
              </ul>
            </div>

            {/* Communities */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-purple-600 mb-4">Communities</h2>
              <ul className="space-y-2">
                <CommunityItem label="JSSTU Student Community" />
                <CommunityItem label="Mysore Student Community" />
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function NavItem({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <a
      href="#"
      className={`flex items-center space-x-3 ${
        active ? "text-purple-600 bg-purple-50" : "text-gray-700 hover:bg-gray-100"
      } px-4 py-2 rounded-lg transition-colors duration-150`}
    >
      {icon}
      <span>{label}</span>
    </a>
  )
}

function ProgressCircle({ value, label }: { value: number; label: string }) {
  const circumference = 2 * Math.PI * 45
  const offset = circumference - (value / 100) * circumference

  return (
    <div className="flex flex-col items-center">
      <svg className="w-24 h-24" viewBox="0 0 100 100">
        <circle
          className="text-gray-200"
          strokeWidth="10"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
        <circle
          className="text-purple-600"
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          stroke="currentColor"
          fill="transparent"
          r="45"
          cx="50"
          cy="50"
        />
      </svg>
      <div className="mt-2 text-center">
        <div className="text-2xl font-semibold">{value}%</div>
        <div className="text-sm text-gray-500">{label}</div>
      </div>
    </div>
  )
}

function EventItem({ label }: { label: string }) {
  return (
    <li className="flex items-center space-x-2">
      <Calendar className="w-5 h-5 text-purple-600" />
      <span>{label}</span>
    </li>
  )
}

function CommunityItem({ label }: { label: string }) {
  return (
    <li className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
      <span>{label}</span>
    </li>
  )
}