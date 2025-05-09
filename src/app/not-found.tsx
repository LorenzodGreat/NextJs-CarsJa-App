'use client'

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-gray-800 px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-6 text-center">
        Oops! The page you&lsquo;re looking for doesn&lsquo;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
      >
        Go Home
      </Link>
    </div>
  )
}
