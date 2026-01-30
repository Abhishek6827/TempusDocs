
import Link from 'next/link';
import Image from 'next/image';
import { Book, ArrowRight, Layers, FileText, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
            <Image 
              src="/Footer.png" 
              alt="TempusMail Logo" 
              width={32} 
              height={32} 
              className="w-8 h-8 object-contain"
            />
            <span>TempusMail</span>
          </div>
          <Link 
            href="/docs/dashboard" 
            className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            Go to Docs
          </Link>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight mb-4">
              Premium Admin Panel <span className="text-blue-600">Documentation</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
              Comprehensive guide for developers and administrators to manage, deploy, and extend the TempusMail Premium Admin Panel.
            </p>
          <div className="flex justify-center gap-4">
              <Link
                href="/docs/dashboard"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                href="/docs/domain-management"
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              >
                Domain Management
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/docs/dashboard" className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-300">
                <Book className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Dashboard</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Overview of the admin dashboard, key metrics, and quick actions.
              </p>
            </Link>
            
            <Link href="/docs/domain-management" className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4 text-green-600 dark:text-green-300">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Domain Management</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Detailed guides on domain verification, lifecycle management, and DNS configuration.
              </p>
            </Link>

            <Link href="/docs/email-accounts" className="block bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4 text-purple-600 dark:text-purple-300">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email Accounts</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Manage email accounts, mailboxes, and user access.
              </p>
            </Link>
          </div>
        </div>
      </main>
      
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} TempusMail. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
