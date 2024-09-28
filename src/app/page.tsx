// pages/index.js
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Navbar */}
      <header className="bg-gray-300 shadow-md py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          {/* Logo and name */}
          <div className="flex gap-2 items-center">
            <Link href={'/'}>
              <div className="flex gap-2 items-center cursor-pointer">
                <Image src='/logo.png' alt='logo' width={30} height={30} />
                <span className="text-xl lg:block hidden font-bold text-green-600">
                  WOrecorder
                </span>
              </div>
            </Link>
          </div>

          {/* Sign In Button */}
          <div className="flex items-center">
            <Link href="/sign-in">
              <Button variant="outline" className="text-green-600 border-green-600 hover:bg-green-100">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Seamlessly Manage Your WhatsApp Orders
        </h1>
        <p className="text-lg text-gray-600 mb-10">
          WOrecorder helps you stay on top of your orders with ease and efficiency.
          Start now and make order management simple.
        </p>
        <Link href="/sign-in">
          <Button size="lg" className="bg-green-500 text-white hover:bg-green-600">
            Get Started
          </Button>
        </Link>
      </div>

      {/* Features Section */}
      <div className="bg-gray-300 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Feature 1 */}
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <Image src="/order-tracking.jpeg" alt="Order Tracking" width={200} height={200} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Order Tracking
            </h3>
            <p className="text-gray-600">
              Keep track of all your orders in one place, with automatic updates.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <Image src="/features/customer-management.svg" alt="Customer Management" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Customer Management
            </h3>
            <p className="text-gray-600">
              Manage your customer details with ease, including order history and preferences.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 border rounded-lg shadow-lg text-center">
            <Image src="/features/notifications.svg" alt="Notifications" width={80} height={80} className="mx-auto mb-4" />
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Real-time Notifications
            </h3>
            <p className="text-gray-600">
              Get notified in real-time for new orders and important updates.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm">&copy; 2024 WOrecorder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
