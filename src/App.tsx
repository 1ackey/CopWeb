
import "./index.css";
import "./App.css";

// 引入子组件
import Header from "./components/Header";
import Sidebar from "./pages/students/sidebar";
import SearchAndJobs from "./pages/students/SearchAndJobs";
import JobDetail from "./pages/students/Jobdetail";
import React, { useState } from "react";
import type { Job } from "./components/Jobcard";


// --- Component: App.tsx ---
const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'job_list' | 'job_detail'>('job_list');
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  // Handle job card click event
  const handleJobCardClick = (job: Job) => {
    setSelectedJob(job);
    setCurrentPage('job_detail');
  };

  // Handle back button click event
  const handleBackClick = () => {
    setCurrentPage('job_list');
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans">
      {/* Inject styles */}
      <Header />
      <div className="container mx-auto">
        
        <div className="flex  md:flex-row gap-4 md:gap-8 mt-4 md:mt-8">
          {/* Sidebar */}
          <div className="md:w-1/4">
            <Sidebar />
          </div>
          {/* Main content based on state */}
          <div className="md:w-3/4">
            {currentPage === 'job_list' && <SearchAndJobs onJobCardClick={handleJobCardClick} />}
            {currentPage === 'job_detail' && selectedJob && (
              <JobDetail job={selectedJob} onBackClick={handleBackClick} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;