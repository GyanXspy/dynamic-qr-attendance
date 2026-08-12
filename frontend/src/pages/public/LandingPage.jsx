import { useNavigate } from 'react-router-dom';
import { ShieldAlert, Users, ArrowRight, QrCode } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center relative overflow-hidden font-sans">
      
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-col items-center mb-16 animate-fade-in">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-2xl">
          <QrCode className="w-8 h-8 text-blue-400" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
          Dynamic QR Attendance
        </h1>
        <p className="text-lg text-white/50 max-w-lg text-center px-4">
          Select your portal to securely manage or mark attendance using real-time dynamic QR codes.
        </p>
      </div>

      {/* Cards Container */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-6">
        
        {/* Student & Teacher Card */}
        <button
          onClick={() => navigate('/login')}
          className="group relative flex flex-col items-start p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="h-12 w-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300">
            <Users className="w-6 h-6" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
            Student & Teacher Portal
          </h2>
          <p className="text-white/50 mb-8 line-clamp-2">
            Access your classes, mark attendance, or manage active sessions with dynamic QR codes.
          </p>
          
          <div className="mt-auto flex items-center text-sm font-semibold text-blue-400">
            Enter Portal
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

        {/* Admin Card */}
        <button
          onClick={() => navigate('/admin/login')}
          className="group relative flex flex-col items-start p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 text-left overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
            <ShieldAlert className="w-6 h-6" />
          </div>
          
          <h2 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
            Admin Portal
          </h2>
          <p className="text-white/50 mb-8 line-clamp-2">
            Manage users, configure system settings, and oversee all attendance records globally.
          </p>
          
          <div className="mt-auto flex items-center text-sm font-semibold text-purple-400">
            Enter Portal
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </button>

      </div>
    </div>
  );
}
