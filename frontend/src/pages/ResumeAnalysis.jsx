

export default function ResumeAnalysis() {
  // TODO BACKEND: Load Gemini analysis response
  
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-800">AI Resume Analysis</h1>
          <p className="text-slate-500 mt-1">Detailed breakdown of your resume against industry standards.</p>
        </div>
        <div className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-xl font-bold border border-indigo-100">
          ATS Score: 0%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-emerald-50 rounded-3xl p-6 border border-emerald-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h2 className="text-lg font-bold text-emerald-800">Strengths</h2>
          </div>
          <ul className="space-y-3 text-sm text-emerald-700">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> Strong background in Java and Object-Oriented Programming.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> Good academic projects showcasing full-stack capabilities.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> Clear understanding of basic database design.
            </li>
          </ul>
        </div>

        <div className="bg-red-50 rounded-3xl p-6 border border-red-100 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
            </div>
            <h2 className="text-lg font-bold text-red-800">Weaknesses</h2>
          </div>
          <ul className="space-y-3 text-sm text-red-700">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> Lack of production-level deployment experience.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> No mention of containerization or orchestration.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> Formatting is not ATS-friendly (complex tables used).
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Skill Gap Analysis</h2>
        <p className="text-sm font-semibold text-slate-600 mb-3">Missing Skills Detected:</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {["Docker", "Kubernetes", "AWS", "Microservices", "CI/CD", "Redis", "Kafka", "GraphQL"].map((skill) => (
            <span key={skill} className="px-3 py-1 bg-slate-50 border border-slate-200 text-slate-600 rounded-lg text-sm font-medium">
              {skill}
            </span>
          ))}
        </div>

        <p className="text-sm font-semibold text-slate-600 mb-3">Recommended Learning Order:</p>
        <div className="flex flex-wrap items-center gap-2 text-sm">
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-bold">1. Docker</span>
          <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-bold">2. AWS</span>
          <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-bold">3. Microservices</span>
          <svg className="w-4 h-4 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          <span className="px-3 py-1.5 bg-indigo-50 text-indigo-600 rounded-lg font-bold">4. Kubernetes</span>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm">
        <h2 className="text-lg font-bold text-slate-800 mb-4">Improvement Suggestions</h2>
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-1">Quantify Achievements</h3>
            <p className="text-sm text-slate-600">Instead of "Optimized database queries", write "Optimized database queries, reducing load time by 30%".</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="font-bold text-slate-800 mb-1">Reformat Structure</h3>
            <p className="text-sm text-slate-600">Remove the columns in the education section to ensure ATS parsers can read the dates chronologically.</p>
          </div>
        </div>
      </div>
    </div>
  );
}