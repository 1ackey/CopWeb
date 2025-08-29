// --- Component: JobCard.tsx ---

// 定义 Job 类型
export interface Job {
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

// JobCard 组件
const JobCard: React.FC<{ job: Job; onClick: () => void }> = ({ job, onClick }) => (
  <div
    className="bg-white p-6 rounded-lg shadow-sm flex flex-col space-y-4 cursor-pointer hover:shadow-md transition-all duration-300"
    onClick={onClick}
  >
    <div className="flex items-start justify-between">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 flex items-center justify-center bg-gray-200 rounded-lg">
          <span className="font-bold text-lg text-gray-700">{job.logo || job.title.charAt(0)}</span>
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-800">{job.title}</h3>
          <p className="text-sm text-gray-500">{job.company}</p>
          <p className="text-sm text-gray-600 mt-1">
            {job.level} - Est. Budget: ${job.budget}
          </p>
        </div>
      </div>
    </div>
    <p className="text-gray-600 line-clamp-2">{job.description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {job.skills.map((skill, index) => (
        <span
          key={index}
          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
        >
          {skill}
        </span>
      ))}
    </div>
    <div className="flex items-center justify-between text-sm text-gray-500 mt-auto">
      <span>Posted {job.postedAt}</span>
    </div>
  </div>
);

export default JobCard;
