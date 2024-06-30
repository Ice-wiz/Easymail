

import checkForEmails from '@/lib/recieveEmails';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).send('Method Not Allowed');
    }

    const { user, password, host, port } = req.body;

    if (!user || !password || !host || !port) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        await checkForEmails({ user, password, host, port });
        res.status(200).json({ message: 'Checked for emails and processed accordingly.' });
    } catch (error) {
        console.error('Error checking emails:', error);
        res.status(500).json({ message: 'Error checking emails', error: error.message });
    }
}




// import checkForEmails from '../../lib/recieveEmails';

// export default async function handler(req, res) {
//     if (req.method !== 'GET') {
//         return res.status(405).send('Method Not Allowed');
//     }
//     try {
//         await checkForEmails();
//         res.status(200).json({ message: 'Checked for emails and processed accordingly.' });
//     } catch (error) {
//         res.status(500).json({ message: 'Error checking emails', error: error.message });
//     }
// }
