// apps/frontend/src/app/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import RootLayout from './layout';
import Login from './login';
import Navbar from './navbar';

export default async function Page() {
  const session = await getServerSession(authOptions);

  return (
    <RootLayout>
      <Navbar />
      <Login session={session} />
    </RootLayout>
  );
}
