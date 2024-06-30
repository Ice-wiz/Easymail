import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <main className="min-h-screen flex flex-col bg-black text-white">
            <Navbar />

            <header className="pt-20 pb-10 bg-black">
                <div className="max-w-screen-lg mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Welcome to Easymail</h1>
                    <p className="text-lg text-slate-200">
                        Your personalized email solution for seamless communication, in a modern way.
                    </p>
                </div>
            </header>

            <section className="flex-grow flex flex-col justify-center items-center px-4 bg-black">
                <div className="max-w-screen-lg mx-auto text-center py-14">
                    <h2 className="text-4xl font-bold mb-8">Our Features</h2>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <h3 className="text-2xl font-bold mb-2 text-black">Custom Host Emails</h3>
                            <p className=" text-black">
                                Send emails from a custom host, ensuring your communications are always professional and branded.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <h3 className="text-2xl font-bold  mb-2 text-black">Inbox Management</h3>
                            <p className=" text-black">
                                Receive and manage all your emails in one place with our intuitive and easy-to-use interface.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <h3 className="text-2xl font-bold  mb-2 text-black">Sent Emails</h3>
                            <p className=" text-black">
                                Check your previously sent emails to keep track of your communications and ensure follow-ups.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <h3 className="text-2xl font-bold  mb-2 text-black">High Email Traffic</h3>
                            <p className=" text-black">
                                Our solution is designed for businesses that require high volumes of email traffic, ensuring reliability and performance.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <h3 className="text-2xl font-bold  mb-2 text-black">Seamless Integration</h3>
                            <p className=" text-black">
                                Easily integrate with your existing systems and workflows, making the transition smooth and effortless.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-md shadow-lg">
                            <h3 className="text-2xl font-bold  mb-2 text-black">Advanced Security</h3>
                            <p className=" text-black">
                                Keep your communications secure with our advanced security features and encryption protocols.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="bg-gray-900 text-white py-6">
                <div className="max-w-screen-lg mx-auto text-center">
                    <p className="text-lg mb-4">
                        Enjoy seamless communication with our custom email solution.
                    </p>
                    <Link href={`https://github.com/Ice-wiz`}>
                        <p className="text-sm">
                            Made by Aryan
                        </p>

                    </Link>
                </div>
            </footer>
        </main>
    );
}





// import Link from 'next/link';
// import { useState } from 'react';
// import { FaEnvelope, FaInbox, FaPaperPlane, FaBars } from 'react-icons/fa';

// export default function Home() {
//     const [menuOpen, setMenuOpen] = useState(false);

//     return (
//         <main className="min-h-screen flex flex-col bg-black text-white">
//             <nav className="bg-black py-4 border-b border-stone-600">
//                 <div className="max-w-screen-lg mx-auto px-4 flex justify-between items-center">
//                     <div className="text-2xl font-bold">Easymail</div>
//                     <div className="hidden md:flex space-x-6">
//                         <Link href="/send-email" passHref>
//                             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//                                 <FaEnvelope />
//                                 <span>Compose Mail</span>
//                             </div>
//                         </Link>
//                         <Link href="/check-emails" passHref>
//                             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//                                 <FaInbox />
//                                 <span>Inbox</span>
//                             </div>
//                         </Link>
//                         <Link href="/sent-emails" passHref>
//                             <div className="flex items-center space-x-2 cursor-pointer hover:text-gray-400">
//                                 <FaPaperPlane />
//                                 <span>Sent Emails</span>
//                             </div>
//                         </Link>
//                     </div>
//                     <div className="md:hidden flex items-center">
//                         <button
//                             onClick={() => setMenuOpen(!menuOpen)}
//                             className="text-gray-400 focus:outline-none"
//                         >
//                             <FaBars className="h-6 w-6" />
//                         </button>
//                     </div>
//                 </div>
//                 {menuOpen && (
//                     <div className="md:hidden bg-gray-800 py-4 mt-4">
//                         <Link href="/send-email" passHref>
//                             <div className="block px-4 py-2 text-sm hover:text-gray-400">
//                                 Compose Mail
//                             </div>
//                         </Link>
//                         <Link href="/check-emails" passHref>
//                             <div className="block px-4 py-2 text-sm hover:text-gray-400">
//                                 Inbox
//                             </div>
//                         </Link>
//                         <Link href="/sent-emails" passHref>
//                             <div className="block px-4 py-2 text-sm hover:text-gray-400">
//                                 Sent Emails
//                             </div>
//                         </Link>
//                     </div>
//                 )}
//             </nav>

//             <header className="pt-20 pb-10 bg-black">
//                 <div className="max-w-screen-lg mx-auto px-4 text-center">
//                     <h1 className="text-5xl font-extrabold mb-4">Welcome to Easymail</h1>
//                     <p className="text-lg text-slate-200">
//                         Your personalized email solution for seamless communication, in a modern way.
//                     </p>
//                 </div>
//             </header>

//             <section className="flex-grow flex flex-col justify-center items-center px-4 bg-black">
//                 <div className="max-w-screen-lg mx-auto text-center py-14">
//                     <h2 className="text-4xl font-bold mb-8">Our Features</h2>
//                     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h3 className="text-2xl font-bold mb-2 text-black">Custom Host Emails</h3>
//                             <p className=" text-black">
//                                 Send emails from a custom host, ensuring your communications are always professional and branded.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h3 className="text-2xl font-bold  mb-2 text-black">Inbox Management</h3>
//                             <p className=" text-black">
//                                 Receive and manage all your emails in one place with our intuitive and easy-to-use interface.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h3 className="text-2xl font-bold  mb-2 text-black">Sent Emails</h3>
//                             <p className=" text-black">
//                                 Check your previously sent emails to keep track of your communications and ensure follow-ups.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h3 className="text-2xl font-bold  mb-2 text-black">High Email Traffic</h3>
//                             <p className=" text-black">
//                                 Our solution is designed for businesses that require high volumes of email traffic, ensuring reliability and performance.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h3 className="text-2xl font-bold  mb-2 text-black">Seamless Integration</h3>
//                             <p className=" text-black">
//                                 Easily integrate with your existing systems and workflows, making the transition smooth and effortless.
//                             </p>
//                         </div>
//                         <div className="bg-white p-6 rounded-md shadow-lg">
//                             <h3 className="text-2xl font-bold  mb-2 text-black">Advanced Security</h3>
//                             <p className=" text-black">
//                                 Keep your communications secure with our advanced security features and encryption protocols.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <footer className="bg-gray-900 text-white py-6">
//                 <div className="max-w-screen-lg mx-auto text-center">
//                     <p className="text-lg mb-4">
//                         Enjoy seamless communication with our custom email solution.
//                     </p>
//                     <p className="text-sm">
//                         Made by Aryan, guided by Debasis sir, powered by Next.js.
//                     </p>
//                 </div>
//             </footer>
//         </main>
//     );
// }
