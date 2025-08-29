
const Sidebar = () => (
  <aside className="p-6 bg-white rounded-lg shadow-sm">
      <h2 className="text-xl font-bold mb-4">Filter</h2>
      {/* 类别 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-800">Category</h3>
        <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
          <option>Anytime</option>
        </select>
      </div>
      {/* 职位类型 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-800">Job Type</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Full-time</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Internship</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Freelance</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Volunteer</span>
          </label>
        </div>
      </div>
      {/* 经验等级 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-800">Experience level</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Entry level</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Expert</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Intermediate</span>
          </label>
        </div>
      </div>
      {/* 期望薪资 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-800">Expected salary</h3>
        <div className="grid grid-cols-2 gap-2">
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Under $100</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>$1K to $5K</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>$100 to $1K</span>
          </label>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
            <span>Hourly</span>
          </label>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-gray-500 text-sm">
            <span>$10</span>
            <span>$100</span>
          </div>
          <input type="range" className="w-full mt-2 accent-indigo-600" />
        </div>
      </div>
      {/* 提案数量 */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2 text-gray-800">Number of proposals</h3>
        <input type="range" className="w-full mt-2 accent-indigo-600" />
      </div>
    </aside>
  );
export default Sidebar;
  