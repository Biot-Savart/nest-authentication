// apps/frontend/src/app/login.tsx
'use client';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';

export default function Login({ session }: { session: any }) {
  return (
    <SessionProvider session={session}>
      <LoginComponent />
    </SessionProvider>
  );
}

function LoginComponent() {
  const { data: session, status } = useSession();
  const loading = status === 'loading';

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        {!session ? (
          <>
            <h1 className="text-2xl font-bold text-center">Sign in</h1>
            <button
              onClick={() => signIn('github')}
              className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
            >
              Sign in with GitHub
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center">Welcome</h1>
            <p className="text-center">Signed in as {session.user?.email}</p>
            <button
              onClick={() => signOut()}
              className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
            >
              Sign out
            </button>
          </>
        )}
      </div>
    </div>
  );
}
