"use client"

import Navbar from '../components/navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function SendEmail() {
    const [smtpUser, setSmtpUser] = useState('');
    const [smtpPass, setSmtpPass] = useState('');
    const [host, setHost] = useState('');
    const [smtpPort, setSmtpPort] = useState('');
    const [recipient, setRecipient] = useState('');
    const [senderName, setSenderName] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [status, setStatus] = useState('');
    const [smtpStatus, setSmtpStatus] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const savedSmtpUser = localStorage.getItem('smtpUser');
            const savedSmtpPass = localStorage.getItem('smtpPass');
            const savedHost = localStorage.getItem('host');
            const savedSmtpPort = localStorage.getItem('smtpPort');

            if (savedSmtpUser && savedSmtpPass && savedHost && savedSmtpPort) {
                setSmtpUser(savedSmtpUser);
                setSmtpPass(savedSmtpPass);
                setHost(savedHost);
                setSmtpPort(savedSmtpPort);
                setIsAuthenticated(true);
            }
        }
    }, []);

    const handleSaveDetails = async (e) => {
        e.preventDefault();
        setSmtpStatus('Saving...');

        try {
            const response = await axios.post('/api/save-creds', {
                smtpUser,
                smtpPass,
                host,
                smtpPort,
                ImapPort: '993'
            });

            if (typeof window !== 'undefined') {
                localStorage.setItem('smtpUser', smtpUser);
                localStorage.setItem('smtpPass', smtpPass);
                localStorage.setItem('host', host);
                localStorage.setItem('smtpPort', smtpPort);
                localStorage.setItem('ImapPort', '993');
            }

            setSmtpStatus('SMTP Credentials saved successfully');
            setIsAuthenticated(true);
            console.log(response.data);
        } catch (error) {
            setSmtpStatus(`Error saving SMTP Credentials: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await axios.post('/api/send-email', {
                smtpUser,
                smtpPass,
                host,
                smtpPort,
                senderName,
                recipient,
                subject,
                body
            });
            setStatus(`Email sent successfully: ${response.data.info.messageId}`);
        } catch (error) {
            setStatus(`Error sending email: ${error.response ? error.response.data.message : error.message}`);
        }
    };

    const handleReset = () => {
        setSmtpUser('');
        setSmtpPass('');
        setHost('');
        setSmtpPort('');
        setRecipient('');
        setSenderName('');
        setSubject('');
        setBody('');
        setStatus('');
        setSmtpStatus('');
        setIsAuthenticated(false);

        if (typeof window !== 'undefined') {
            localStorage.removeItem('smtpUser');
            localStorage.removeItem('smtpPass');
            localStorage.removeItem('host');
            localStorage.removeItem('smtpPort');
        }
    };

    return (
        <main className="min-h-screen flex flex-col bg-black text-white">
            <Navbar />

            <header className="pt-20 pb-10 bg-black">
                <div className="max-w-screen-lg mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold mb-4">Send Email</h1>
                    <p className="text-lg text-slate-200">
                        Use the form below to authenticate and send an email.
                    </p>
                </div>
            </header>

            <section className="flex-grow flex flex-col justify-center items-center px-4 bg-black">
                <div className="max-w-5xl w-full p-6 bg-gray-800 rounded-lg shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">SMTP Authentication</h2>
                        <form onSubmit={handleSaveDetails}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">SMTP User:</label>
                                <input
                                    type="text"
                                    value={smtpUser}
                                    onChange={(e) => setSmtpUser(e.target.value)}
                                    required
                                    disabled={isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">SMTP Password:</label>
                                <input
                                    type="password"
                                    value={smtpPass}
                                    onChange={(e) => setSmtpPass(e.target.value)}
                                    required
                                    disabled={isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">SMTP Host:</label>
                                <input
                                    type="text"
                                    value={host}
                                    onChange={(e) => setHost(e.target.value)}
                                    required
                                    disabled={isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">SMTP Port:</label>
                                <input
                                    type="text"
                                    value={smtpPort}
                                    onChange={(e) => setSmtpPort(e.target.value)}
                                    required
                                    disabled={isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <button
                                type="submit"
                                className={`w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${isAuthenticated ? 'bg-green-600' : 'bg-gray-500'} hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                                disabled={isAuthenticated}
                            >
                                {isAuthenticated ? 'Authenticated' : 'Save Details'}
                            </button>
                        </form>
                        {smtpStatus && (
                            <p className={`mt-4 text-sm ${smtpStatus.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>{smtpStatus}</p>
                        )}
                    </div>

                    <div className="p-6 bg-gray-900 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold mb-4 text-center">Send Email</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">Sender Name:</label>
                                <input
                                    type="text"
                                    value={senderName}
                                    onChange={(e) => setSenderName(e.target.value)}
                                    required
                                    disabled={!isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">Recipient Email:</label>
                                <input
                                    type="email"
                                    value={recipient}
                                    onChange={(e) => setRecipient(e.target.value)}
                                    required
                                    disabled={!isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">Subject:</label>
                                <input
                                    type="text"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                    required
                                    disabled={!isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-400">Body:</label>
                                <textarea
                                    value={body}
                                    onChange={(e) => setBody(e.target.value)}
                                    required
                                    disabled={!isAuthenticated}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                disabled={!isAuthenticated}
                            >
                                Send Email
                            </button>
                        </form>
                        {status && (
                            <p className={`mt-4 text-sm ${status.startsWith('Error') ? 'text-red-600' : 'text-green-600'}`}>{status}</p>
                        )}
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-6 flex justify-center">
                        <button
                            onClick={handleReset}
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md shadow-lg"
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
}
