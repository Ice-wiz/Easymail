import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function CheckEmailsPage() {
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');
    const [credentialsMissing, setCredentialsMissing] = useState(false);
    const router = useRouter();

    useEffect(() => {
        async function fetchEmails() {
            try {
                // Retrieve user credentials from localStorage
                const smtpUser = localStorage.getItem('smtpUser');
                const smtpPass = localStorage.getItem('smtpPass');
                const ImapHost = localStorage.getItem('host');
                const ImapPort = localStorage.getItem('ImapPort');

                // Validate the credentials are available
                if (!smtpUser || !smtpPass || !ImapHost || !ImapPort) {
                    setMessage('SMTP credentials are missing. Please configure your account.');
                    setCredentialsMissing(true);
                    setLoading(false);
                    return;
                }

                // Send credentials to the API
                const response = await fetch('/api/check-emails', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        user: smtpUser,
                        password: smtpPass,
                        host: ImapHost,
                        port: ImapPort
                    })
                });

                const data = await response.json();
                if (response.ok) {
                    setMessage(data.message || 'Emails fetched successfully.');
                    router.push('/received-emails');
                } else {
                    setMessage(data.message || 'Error fetching emails.');
                }
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setMessage('Error fetching data.');
                setLoading(false);
            }
        }

        fetchEmails();
    }, [router]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-gray-900 to-black text-white">
            <h1 className="text-3xl font-bold mb-6">Email Check</h1>
            {loading ? (
                <div className="flex flex-col items-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mb-4"></div>
                    <p className="text-xl">Hang on tight, checking for new emails...</p>
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-xl mb-6">{message}</p>
                    {credentialsMissing && (
                        <button
                            onClick={() => router.push('/')}
                            className="bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300"
                        >
                            Go to Dashboard
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
