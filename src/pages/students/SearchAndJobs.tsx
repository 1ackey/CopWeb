// --- Component: SearchAndJobs.tsx ---
import jobs from "./../../services/jobs.json";
import JobCard from "../../components/Jobcard";
import type { Job } from "../../components/Jobcard";
// 定义 props
interface SearchAndJobsProps {
  onJobCardClick: (job: Job) => void;
}

const SearchAndJobs: React.FC<SearchAndJobsProps> = ({ onJobCardClick }) => {
  return (
    <main className="p-6">
      {/* Search Bar */}
      <div className="bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200 p-8 rounded-lg mb-6 shadow-sm">
        <h1 className="text-2xl font-bold mb-2">Find your dream job here</h1>
        <p className="text-gray-700 max-w-lg mb-4">
          Join Dokarti. Dokarti is a place where you find your dream job in various skills here, you will also get many other benefits
        </p>
        <div className="flex items-center bg-white p-2 rounded-lg shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400 mx-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search your job"
            className="flex-1 p-2 focus:outline-none"
          />
          <button className="bg-indigo-600 text-white py-2 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300">
            Search
          </button>
        </div>
      </div>

      {/* Job list */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {jobs.map((job) => (
          <JobCard
            key={job.id}
            job={job}
            onClick={() => onJobCardClick(job)}
          />
        ))}
      </div>
    </main>
  );
};

export default SearchAndJobs;
