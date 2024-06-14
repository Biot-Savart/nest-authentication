// apps/frontend/src/app/login.tsx
'use client';
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react';

const SHARED_CLASSES = {
  input:
    'mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500',
  button:
    'w-full py-2 text-white rounded-lg flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900 mb-4',
};

const SignInForm = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form className="space-y-4 mb-6" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Username
        </label>
        <input type="text" id="username" className={SHARED_CLASSES.input} />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Password
        </label>
        <input type="password" id="password" className={SHARED_CLASSES.input} />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-zinc-100 dark:focus:ring-offset-zinc-900"
      >
        Sign in
      </button>
    </form>
  );
};

const SocialSignInButton = ({
  bgColor,
  hoverColor,
  ringColor,
  logoSrc,
  altText,
  children,
  type,
}: {
  bgColor: string;
  hoverColor: string;
  ringColor: string;
  logoSrc: string;
  altText: string;
  children: React.ReactNode;
  type: string;
}) => (
  <button
    onClick={() => signIn(type)}
    className={`${SHARED_CLASSES.button} ${bgColor} hover:${hoverColor} focus:ring-${ringColor}`}
  >
    <img src={logoSrc} alt={altText} className="w-5 h-5" />
    <span>{children}</span>
  </button>
);

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
            <div className="flex items-center justify-center min-h-screen">
              <div className="bg-white  p-8 max-w-sm w-full">
                <h2 className="text-2xl font-bold text-center mb-6 text-zinc-900">
                  Sign in
                </h2>
                <SignInForm />
                <SocialSignInButton
                  bgColor="bg-red-600"
                  hoverColor="bg-red-700"
                  ringColor="red-500"
                  logoSrc="https://placehold.co/20x20"
                  altText="Google Logo"
                  type={'google'}
                >
                  Sign in with Google
                </SocialSignInButton>
                <SocialSignInButton
                  bgColor="bg-blue-800"
                  hoverColor="bg-blue-900"
                  ringColor="blue-700"
                  logoSrc="https://placehold.co/20x20"
                  altText="Facebook Logo"
                  type={'facebook'}
                >
                  Sign in with Facebook
                </SocialSignInButton>
                <SocialSignInButton
                  bgColor="bg-zinc-800"
                  hoverColor="bg-zinc-900"
                  ringColor="zinc-700"
                  logoSrc="https://placehold.co/20x20"
                  altText="GitHub Logo"
                  type={'github'}
                >
                  Sign in with GitHub
                </SocialSignInButton>
              </div>
            </div>
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
