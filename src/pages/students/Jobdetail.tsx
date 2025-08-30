// --- Component: JobDetail.tsx ---
import Job from "./../../services/jobs.json"
// Define the type for a Job object based on the new data
interface Job {
  id: number;
  title: string;
  company: string;
  status: string;
  budget: number;
  level: string;
  logo: string;
  skills: string[]; 
  description: string;
  postedAt: string;
}
// Define props type for JobDetail
interface JobDetailProps {
  job: Job;
  onBackClick: () => void;
}

const JobDetail: React.FC<JobDetailProps> = ({ job, onBackClick }) => (
  <main className="p-6">
    {/* Back button */}
    <button
      onClick={onBackClick}
      className="flex items-center text-indigo-600 font-semibold mb-4 hover:underline"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 mr-1"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      Back to All Jobs
    </button>
    
    {/* Job details area */}
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Job card header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 flex items-center justify-center bg-gray-200 rounded-lg text-2xl font-bold text-gray-700">
            {job.title.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{job.title}</h1>
            <p className="text-sm text-gray-500">{job.company}</p>
            <p className="text-sm text-gray-600 mt-1">Est. Budget: ${job.budget}</p>
          </div>
        </div>
        <button className="bg-indigo-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-indigo-700 transition duration-300">
          Apply Now
        </button>
      </div>

      {/* Job description */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Job Description</h2>
        <p className="text-gray-600">
          We are looking for a talented and passionate {job.title} to join our creative team at {job.company}.
          You will be responsible for creating engaging user interfaces, conducting user research, and collaborating with cross-functional teams.
          This is a full-time position with an estimated budget of ${job.budget}.
        </p>
      </div>

      {/* Responsibilities and requirements */}
      <div className="mt-6">
        <h2 className="text-xl font-bold mb-2">Responsibilities and Requirements</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Create wireframes, storyboards, and prototypes to demonstrate design concepts.</li>
          <li>Conduct user research and evaluate user feedback.</li>
          <li>Collaborate with product and engineering teams.</li>
          <li>A strong portfolio showcasing your design skills.</li>
          <li>Proficiency in design software like Figma, Sketch, or Adobe XD.</li>
        </ul>
      </div>

        {/* Upload resume area */}
        <div className="mt-8 p-6 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
        <div className="flex flex-col items-center">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-400 mb-2"
            >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.146a1.5 1.5 0 00-1.282-1.48l-4.43-1.096a1.5 1.5 0 00-.916 0L5.782 10.62a1.5 1.5 0 00-1.282 1.48v2.146a1.5 1.5 0 001.5 1.5h12a1.5 1.5 0 001.5-1.5z"
            />
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 6a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm6 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"
            />
            </svg>

            <p className="text-sm font-semibold text-gray-900">
            Click to upload or drag and drop
            </p>
            <p className="mt-1 text-xs text-gray-600">
            PDF, DOCX, or DOC (max 10MB)
            </p>

            {/* 文件选择 */}
            <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={async (e) => {
                if (!e.target.files || e.target.files.length === 0) return;
                const file = e.target.files[0];

                const formData = new FormData();
                formData.append("resume", file);

                // 发给后端
                const res = await fetch("http://localhost:3001/upload", {
                method: "POST",
                body: formData,
                });

                if (res.ok) {
                alert("上传成功！");
                } else {
                alert("上传失败！");
                }
            }}
            className="mt-3"
            />
        </div>
        </div>

    </div>
  </main>
);


export default JobDetail;   