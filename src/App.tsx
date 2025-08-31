
import "./index.css";
import "./App.css";
//学生简历申请页面
// // 引入子组件
// import Header from "./components/Header";
// import Sidebar from "./pages/students/Sidebar";
// import SearchAndJobs from "./pages/students/SearchAndJobs";
// import JobDetail from "./pages/students/Jobdetail";
// import React, { useState } from "react";
// import type { Job } from "./components/Jobcard";


// // --- Component: App.tsx ---
// const App: React.FC = () => {
//   const [currentPage, setCurrentPage] = useState<'job_list' | 'job_detail'>('job_list');
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);

//   // Handle job card click event
//   const handleJobCardClick = (job: Job) => {
//     setSelectedJob(job);
//     setCurrentPage('job_detail');
//   };

//   // Handle back button click event
//   const handleBackClick = () => {
//     setCurrentPage('job_list');
//     setSelectedJob(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 font-sans">
//       {/* Inject styles */}
//       <Header />
//       <div className="container mx-auto">
        
//         <div className="flex  md:flex-row gap-4 md:gap-8 mt-4 md:mt-8">
//           {/* Sidebar */}
//           <div className="md:w-1/4">
//             <Sidebar />
//           </div>
//           {/* Main content based on state */}
//           <div className="md:w-3/4">
//             {currentPage === 'job_list' && <SearchAndJobs onJobCardClick={handleJobCardClick} />}
//             {currentPage === 'job_detail' && selectedJob && (
//               <JobDetail job={selectedJob} onBackClick={handleBackClick} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// 教师下载简历页面
// import React from "react";
// import ResumeDownloadPage from "./pages/company/DownloadCVcard";
// import Header from "./components/Header";

// const App: React.FC = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4 font-sans">
//       <Header />
//       <ResumeDownloadPage />
//     </div>

//   );
// };

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Sidebar  from "./components/Sidebar";
import UserManagement from "./pages/teachers/UserManagement";
import CompanyManagement from "./pages/teachers/CompanyManagement";
import JobManagement from "./pages/teachers/JobManagement";
import DataVisualization from "./pages/teachers/DataVisualization";
import ResumeManagement from "./pages/teachers/ResumeManagement";
import Header from "./components/Header";

export default function App() {
  return (
    <Router>
      <Header />
      <div className="flex">
        <Sidebar />
        <div className="flex-1 bg-gray-50 min-h-screen">
          <Routes>
            <Route path="/users" element={<UserManagement />} />
            <Route path="/companies" element={<CompanyManagement />} />
            <Route path="/jobs" element={<JobManagement />} />
            <Route path="/data" element={<DataVisualization />} />
            <Route path="/resumes" element={<ResumeManagement />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
