import React from 'react'
import AdminNavbar from '../_components/Navbar'
import { cookies } from 'next/headers'

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    cookies();
    return (
        <div className="flex min-h-screen size-full w-full flex-col ">
            <AdminNavbar />
            <main className="p-4 size-full md:gap-8 md:p-8 pb-20">
                {children}
            </main>
        </div>
    )
}
