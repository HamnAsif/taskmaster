import Link from "next/link";
import Image from 'next/image';


export default function LandingPage() {
  return (
    < >
      <nav id ="home" className="flex flex-row justify-between items-center p-3 shadow">
        <div className="flex flex-row justify-start items-center space-x-4">
          <div>         
            <Image src="/logo.jpg" alt="Hero section" width={50} height={50} className="rounded-lg"/>
          </div>
          <h1 className="text-xl font-bold text-gray-800">TaskMaster</h1>
        </div>
        <div className="flex flex-row justify-end items-center space-x-8">
          <Link href="#home" className="text-gray-700 hover:text-blue-600 transition">Home</Link>
          <Link href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</Link>
          <Link href="#support" className="text-gray-700 hover:text-blue-600 transition">Support</Link>
          <Link href="#" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Get Started
          </Link>
        </div>
      </nav>
      <hr />
      <div className="px-10">
        <div className="w-full h-100 bg-blue-100 rounded my-10 flex flex-col justify-center items-center space-y-4">
            <h1 className="font-bold text-3xl">Organize Smarter, Acheive Faster</h1>
            <p className="text-gray-700">A powerful tool for managing tasks, tracking progress, and staying focused.</p>
            <div className= "flex flex-row space-x-6">
              <Link href="#" className="px-4 py-2 bg-white rounded border-2 border-gray-300 hover:border-2 hover:border-gray-500 transition">
                Get Started
              </Link>
              <Link href="#" className="px-4 py-2 bg-white rounded border-2 border-gray-300 hover:border-2 hover:border-gray-500 transition">
                Login
              </Link>
            </div> 
        </div>
      </div>
      <div id ="features" className="flex flex-col items-center px-10">
        <h1 className="text-2xl font-bold py-3">Boost Your Productivity with TaskMaster</h1>
        <p className="text-gray-700 text-center max-w-2xl">
          TaskMaster is designed to help you stay focused, organized, and on top of your tasks. Explore our key features below:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
          <div className="border border-blue-100 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2">
            <span className="text-2xl">🕒</span>
            <h2 className="font-semibold text-gray-800 text-base">Smart Focus Timer</h2>
            <p className="text-sm text-gray-600">
              Maximize your efficiency with our intelligent timer that adapts to your work patterns.
            </p>
          </div>
          <div className="border border-blue-100 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2">
            <span className="text-2xl">📝</span>
            <h2 className="font-semibold text-gray-800 text-base">Visual Task Board</h2>
            <p className="text-sm text-gray-600">
              Visualize your workflow with our intuitive task board, moving tasks from To Do to Done.
            </p>
          </div>
          <div className="border border-blue-100 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2">
            <span className="text-2xl">🔔</span>
            <h2 className="font-semibold text-gray-800 text-base">Reminders & Deadlines</h2>
            <p className="text-sm text-gray-600">
              Never miss an important task with timely reminders and clear deadlines.
            </p>
          </div>
          <div className="border border-blue-100 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition flex flex-col gap-2">
            <span className="text-2xl">🏷️</span>
            <h2 className="font-semibold text-gray-800 text-base">Priority Labels</h2>
            <p className="text-sm text-gray-600">
              Prioritize your tasks effectively with labels for low, medium, and high.
            </p>
          </div>
        </div>
      </div>
      <div id="support" className="mt-20 px-10">
        <h2 className="text-xl font-bold text-center">Support & FAQ</h2>
        <div className="mt-6 space-y-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">How do I reset my password?</h3>
            <p className="text-sm text-gray-600">Go to login → Forgot password → Follow instructions sent to your email.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Is TaskMaster free to use?</h3>
            <p className="text-sm text-gray-600">Yes, we offer a free plan with basic features. Premium features are available via subscription.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">Is my data safe?</h3>
            <p className="text-sm text-gray-600">Absolutely. We use industry-standard encryption and never share your personal data with third parties.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">How can I get help if I'm stuck?</h3>
            <p className="text-sm text-gray-600">You can use the live chat, email us at [awais.saeed@amroodlabs.com], or check this FAQ section.</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">How long does it take to receive a response from support?</h3>
            <p className="text-sm text-gray-600"> We typically respond within 24 hours on weekdays.</p>
          </div>
        </div>
      </div>

    </>
  );
}
