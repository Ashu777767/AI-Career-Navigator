import { useState } from 'react';
import { Mail, Lock, CheckCircle2, ArrowRight, Compass } from 'lucide-react';
import { Link } from "react-router-dom";
import axios from 'axios'; // Added missing import for the axios call
import { useNavigate } from 'react-router-dom'; // Added missing import for navigation

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password
        }
      );

      console.log(response.data);

localStorage.setItem(
  "token",
  response.data
);
navigate("/dashboard");

    } catch (error) {
      console.log(error);
    }
  };

  const features = [
    "AI Resume Analyzer",
    "ATS Score Analysis",
    "Skill Gap Detection",
    "Mock Interview Preparation",
    "Personalized Career Roadmaps"
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 sm:p-8 font-sans">
      
      {/* MAIN CARD CONTAINER */}
      <div className="w-[90vw] max-w-[1500px] h-[85vh] min-h-[700px] bg-white rounded-3xl shadow-2xl flex flex-col lg:flex-row overflow-hidden border border-slate-200">
        
        {/* LEFT SIDE - Hero & Branding (55% width) */}
        <div className="hidden lg:flex lg:w-[55%] relative flex-col justify-between p-12 xl:p-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-800">
          
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-400 opacity-20 blur-[100px] mix-blend-overlay"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-violet-400 opacity-20 blur-[100px] mix-blend-overlay"></div>
          </div>

          <div className="relative z-10 flex flex-col gap-12">
            <div className="flex items-center gap-4 text-white">
              <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 shadow-lg">
                <Compass className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <span className="text-3xl font-bold tracking-tight">CareerPilot</span>
            </div>

            <div className="space-y-6 max-w-2xl">
              <span className="inline-block py-2 px-4 bg-white/10 border border-white/20 rounded-full text-blue-100 text-sm font-bold tracking-wider uppercase backdrop-blur-sm shadow-sm">
                Navigate Your Future
              </span>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
                Build Your Career <br className="hidden xl:block" /> With AI
              </h1>
              <p className="text-lg lg:text-xl xl:text-2xl text-blue-100/90 font-medium leading-relaxed mt-4">
                CareerPilot helps students and professionals analyze resumes, identify skill gaps, prepare for interviews and build personalized AI-powered career roadmaps.
              </p>
            </div>
          </div>

          <div className="relative z-10 space-y-4">
            {features.map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-white/95">
                <div className="bg-white/10 rounded-full p-1.5 border border-white/20 shadow-sm backdrop-blur-sm flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-blue-200" />
                </div>
                <span className="text-lg lg:text-xl font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE - Login Form (45% width) */}
        <div className="w-full lg:w-[45%] h-full flex flex-col justify-center px-8 py-10 sm:px-14 xl:px-20 bg-white overflow-y-auto">
          <div className="w-full max-w-xl mx-auto">
            
            {/* Mobile-only Branding */}
            <div className="flex lg:hidden items-center gap-4 text-indigo-600 mb-10">
              <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center border border-indigo-100">
                <Compass className="w-8 h-8" strokeWidth={2.5} />
              </div>
              <span className="text-3xl font-bold tracking-tight text-slate-900">CareerPilot</span>
            </div>

            {/* Form Header */}
            <div className="mb-10">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                Welcome Back
              </h2>
              <p className="text-slate-500 text-xl font-medium mt-2">
                Login to continue your career journey.
              </p>
            </div>

            {/* Login Form */}
            <form className="space-y-7" onSubmit={handleLogin}>
              
              {/* Email Input */}
              <div>
                <label className="block text-lg font-bold text-slate-700 mb-2.5">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Mail className="h-7 w-7 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-14 pr-5 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 focus:bg-white transition-all duration-300 font-medium text-lg shadow-sm" 
                    placeholder="name@example.com" 
                    required
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-lg font-bold text-slate-700">Password</label>
                  <a href="#" className="text-base font-bold text-indigo-600 hover:text-indigo-700 hover:underline transition-colors">
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Lock className="h-7 w-7 text-slate-400 group-focus-within:text-indigo-600 transition-colors" />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-14 pr-5 py-5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-600/10 focus:border-indigo-600 focus:bg-white transition-all duration-300 font-medium text-lg shadow-sm" 
                    placeholder="••••••••" 
                    required
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-700 text-white py-5 px-6 rounded-2xl font-bold text-xl transition-all duration-300 shadow-[0_4px_14px_0_rgb(79,70,229,0.39)] hover:shadow-[0_6px_20px_rgba(79,70,229,0.23)] hover:-translate-y-0.5 mt-8"
              >
                Login
                <ArrowRight className="w-6 h-6" />
              </button>
            </form>

            {/* Footer Text */}
            <p className="mt-10 text-center text-base lg:text-lg font-medium text-slate-500">
              Don't have an account?{' '}
              <Link 
                to="/"
                className="text-indigo-600 font-bold hover:text-indigo-700 hover:underline transition-colors"
              >
                Register
              </Link>
            </p>

          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login;