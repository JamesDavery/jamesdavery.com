import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} James D. Avery. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="/" className="text-gray-500 hover:text-white text-sm transition-colors">
            Resume
          </Link>
          <Link href="/apps" className="text-gray-500 hover:text-white text-sm transition-colors">
            Apps
          </Link>
          <Link href="/production" className="text-gray-500 hover:text-white text-sm transition-colors">
            Production
          </Link>
          <Link href="/beats" className="text-gray-500 hover:text-white text-sm transition-colors">
            Beats
          </Link>
          <Link href="/downloads" className="text-gray-500 hover:text-white text-sm transition-colors">
            Downloads
          </Link>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
