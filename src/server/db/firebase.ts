import admin from 'firebase-admin';
import serviceAccount from '~/server/db/serviceAccount.json';

interface CustomServiceAccount extends admin.ServiceAccount
{
    universe_domain: string;
}

const serviceAccountCustom: CustomServiceAccount = serviceAccount as CustomServiceAccount;

admin.initializeApp({
    credential: admin.credential.cert(serviceAccountCustom)
});

const auth = admin.auth();

export { auth };