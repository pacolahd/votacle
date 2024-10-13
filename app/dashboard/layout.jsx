"use client"; // This line makes this component a Client Component

// app/dashboard/layout.js
import Link from 'next/link';
 
export default function DashboardLayout({ children }) {
  return (
    <div className="">
      {/* Sidebar */}
      {/* <aside className="w-64 p-4 bg-purple-700">
        <h2 className="text-lg font-bold mb-4">Dashboard</h2>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="block p-2 hover:bg-purple-600 rounded">
              Welcome
              </Link>
            </li>
            <li>
              <Link href="/dashboard/elections" className="block p-2 hover:bg-purple-600 rounded">
               Elections
              </Link>
            </li>
            <li>
              <Link href="/dashboard/myelections" className="block p-2 hover:bg-purple-600 rounded">
               My Elections 
              </Link>
            </li>
            <li>
              <Link href="/dashboard/profile" className="block p-2 hover:bg-purple-600 rounded">
                Profile 
              </Link>
            </li>
          </ul>
        </nav>
      </aside> */}

      {/* Main Content Area */}
      <main className="">
        {children}
      </main>
    </div>
  );
}
