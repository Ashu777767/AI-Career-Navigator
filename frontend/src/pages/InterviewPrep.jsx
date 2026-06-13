import { useState } from "react";
export default function InterviewPrep() {
  // TODO BACKEND: Generate questions using Gemini
  // TODO BACKEND: Evaluate answers
  // TODO BACKEND: Save interview history
  const [targetRole, setTargetRole] = useState("Full Stack Developer");
  
  return (
    <div className="max-w-6xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
      <div className="mb-6">
        <h1 className="text-2xl font-extrabold text-slate-800">AI Interview Coach</h1>
        <p className="text-slate-500 mt-1">Simulate real technical and behavioral interviews.</p>
      </div>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 min-h-0">
        
        {/* Left Side: Chat/Interview Interface */}
        <div className="lg:col-span-2 flex flex-col bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-sm">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-sm">Tech Interview</h3>
                <p className="text-xs text-slate-500">{targetRole} • Medium</p>
              </div>
            </div>
            <button className="text-xs font-bold text-red-600 bg-red-50 px-3 py-1.5 rounded-lg hover:bg-red-100 transition-colors">
              End Interview
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto space-y-6 bg-slate-50/50">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-700 max-w-[85%]">
                <p className="mb-2 font-semibold text-slate-800">Question 1/5</p>
                Explain how JWT (JSON Web Tokens) work for authentication in a Spring Boot application. What are the key components of a JWT?
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center text-slate-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <div className="bg-indigo-600 text-white p-4 rounded-2xl rounded-tr-sm shadow-sm text-sm max-w-[85%]">
                JWT is a token-based authentication mechanism. It consists of three parts: Header, Payload, and Signature. The client sends it in the Authorization header.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-100 flex-shrink-0 flex items-center justify-center text-indigo-600">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm text-slate-700 max-w-[85%]">
                <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Good Answer
                </div>
                That's mostly correct! To make it better, mention that the signature ensures data integrity, and explain how Spring Security filters intercept requests to validate the token.
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-slate-100 bg-white">
            <textarea 
              className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none"
              rows="3"
              placeholder="Type your answer here..."
            ></textarea>
            <div className="flex justify-between items-center mt-3">
              <button className="text-slate-500 hover:text-slate-800 text-sm font-medium flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg> Use Microphone
              </button>
              <button className="bg-indigo-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-indigo-700 transition-colors">
                Submit Answer
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Setup & Stats */}
        <div className="space-y-6 overflow-y-auto pr-2">
          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Interview Setup</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Target Role</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm font-medium focus:outline-none">
                  <option>Full Stack Developer</option>
                  <option>Backend Engineer</option>
                  <option>Frontend Developer</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-1">Difficulty</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 text-sm font-medium focus:outline-none">
                  <option>Medium</option>
                  <option>Easy</option>
                  <option>Hard</option>
                </select>
              </div>
              <button className="w-full bg-indigo-50 text-indigo-700 border border-indigo-100 py-2.5 rounded-xl font-bold text-sm hover:bg-indigo-100 transition-colors">
                Start New Session
              </button>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
            <h3 className="font-bold text-slate-800 mb-4">Readiness Insights</h3>
            <div className="flex items-end gap-2 mb-6">
              <span className="text-4xl font-extrabold text-indigo-600">68%</span>
              <span className="text-sm font-medium text-slate-500 mb-1">Ready</span>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs font-bold text-slate-500 mb-2">Strength Areas</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold border border-emerald-100">Core Java</span>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-md text-xs font-bold border border-emerald-100">React Basics</span>
                </div>
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 mb-2">Weak Areas</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-md text-xs font-bold border border-red-100">System Design</span>
                  <span className="px-2.5 py-1 bg-red-50 text-red-700 rounded-md text-xs font-bold border border-red-100">Docker</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
             <h3 className="font-bold text-slate-800 mb-4">Resources</h3>
             <ul className="space-y-3">
               <li>
                 <a href="#" className="text-sm text-indigo-600 hover:underline font-medium flex items-center gap-2">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                   Spring Boot JWT Tutorial (YouTube)
                 </a>
               </li>
               <li>
                 <a href="#" className="text-sm text-indigo-600 hover:underline font-medium flex items-center gap-2">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                   Top 50 Spring Interview Q's
                 </a>
               </li>
             </ul>
          </div>
        </div>
      </div>
    </div>
  );
}