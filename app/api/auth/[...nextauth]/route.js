import NextAuth from 'next-auth';
import { authOptions } from '@/utils/authOptions';

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
