import Link from 'next/link';
import { useState } from 'react';
import { FaEnvelope, FaInbox, FaPaperPlane, FaBars } from 'react-icons/fa';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-black py-4 border-b border-stone-600">
            <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
                <Link href="/" passHref>
                    <div className="text-2xl font-bold">Easymail</div>
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/send-email" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                            <FaEnvelope />
                            <span>Compose Mail</span>
                        </div>
                    </Link>
                    <Link href="/check-emails" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                            <FaInbox />
                            <span>Inbox</span>
                        </div>
                    </Link>
                    <Link href="/sent-emails" passHref>
                        <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
                            <FaPaperPlane />
                            <span>Sent Emails</span>
                        </div>
                    </Link>
                </div>
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-gray-400 focus:outline-none"
                    >
                        <FaBars className="h-6 w-6" />
                    </button>
                </div>
            </div>
            {menuOpen && (
                <div className="md:hidden bg-gray-800 py-4 mt-4">
                    <Link href="/send-email" passHref>
                        <div className="block px-4 py-2 text-sm hover:text-gray-400">
                            Compose Mail
                        </div>
                    </Link>
                    <Link href="/check-emails" passHref>
                        <div className="block px-4 py-2 text-sm hover:text-gray-400">
                            Inbox
                        </div>
                    </Link>
                    <Link href="/sent-emails" passHref>
                        <div className="block px-4 py-2 text-sm hover:text-gray-400">
                            Sent Emails
                        </div>
                    </Link>
                </div>
            )}
        </nav>
    );
}
