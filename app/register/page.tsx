import Header from '@/components/header';
import { RegisterForm } from './register-form';

export default async function RegisterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <Header />
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-800 rounded-lg border border-gray-700 shadow-lg p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-center text-white mb-6">Create Account</h2>
          <RegisterForm />
        </div>
      </section>
    </div>
  );
}