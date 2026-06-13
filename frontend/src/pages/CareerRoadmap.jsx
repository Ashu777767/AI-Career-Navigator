

export default function CareerRoadmap() {
  // TODO BACKEND: Generate roadmap using Gemini
  // TODO BACKEND: Generate roadmap from target role
  
  const milestones = [
    {
      month: "Month 1",
      title: "Advanced Spring Boot",
      description: "Deep dive into Spring Security, JWT Auth, and RESTful best practices.",
      status: "active"
    },
    {
      month: "Month 2",
      title: "Docker & Containerization",
      description: "Learn Docker fundamentals, write Dockerfiles, and containerize your Spring/React apps.",
      status: "upcoming"
    },
    {
      month: "Month 3",
      title: "AWS Basics",
      description: "Deploy applications to AWS using EC2, S3, and RDS.",
      status: "upcoming"
    },
    {
      month: "Month 4",
      title: "System Design",
      description: "Understand basic architecture patterns, microservices, and scalability.",
      status: "upcoming"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold text-slate-800">AI Career Roadmap</h1>
        <p className="text-slate-500 mt-1">Your personalized path to bridge skill gaps and land your target role.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm mb-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-sm font-bold text-slate-400 mb-1">Current Stage</p>
          <h2 className="text-xl font-extrabold text-slate-800">Junior Developer</h2>
        </div>
        
        <div className="flex-1 flex items-center justify-center hidden md:flex">
          <div className="w-full h-1 bg-slate-100 relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-indigo-50 border-2 border-indigo-200 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </div>
          </div>
        </div>

        <div className="text-center md:text-right">
          <p className="text-sm font-bold text-slate-400 mb-1">Target Role</p>
          <h2 className="text-xl font-extrabold text-indigo-600">Full Stack Developer</h2>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
        <h3 className="text-lg font-bold text-slate-800 mb-6">Learning Timeline</h3>
        
        <div className="space-y-6 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
          
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-indigo-100 text-indigo-600 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 font-bold z-10">
                {index + 1}
              </div>
              
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm hover:border-indigo-200 hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md ${milestone.status === 'active' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'}`}>
                    {milestone.month}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-800 mb-2">{milestone.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{milestone.description}</p>
              </div>
              
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}