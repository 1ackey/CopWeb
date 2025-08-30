import React, { useState } from "react";
import resumesData from "../../services/Resume.json"; // 可能不存在

type Resume = {
  id: number;
  name: string;
  file: string;
};

const App: React.FC = () => {
  // 如果 JSON 文件不存在或为空，resumesData 可能是 undefined/null
  const resumes: Resume[] = Array.isArray(resumesData) ? resumesData : [];

  const [downloading, setDownloading] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleDownloadAll = async () => {
    if (resumes.length === 0) {
      alert("暂无可下载的简历");
      return;
    }

    setDownloading(true);
    setProgress(0);

    for (let i = 0; i < resumes.length; i++) {
      const resume = resumes[i];

      try {
        // 模拟下载过程
        await new Promise((resolve) => setTimeout(resolve, 800));

        // 真正下载的话，可以使用 fetch 或者 a 标签
        const link = document.createElement("a");
        link.href = resume.file;
        link.download = `${resume.name}_简历.pdf`;
        link.click();
      } catch (error) {
        console.error("下载失败:", resume.name, error);
      }

      setProgress(Math.round(((i + 1) / resumes.length) * 100));
    }

    setDownloading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 font-sans">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-6">简历下载</h1>

        {/* 一键下载按钮 */}
        <div className="mb-6">
          <button
            onClick={handleDownloadAll}
            disabled={downloading || resumes.length === 0}
            className={`px-6 py-2 rounded-lg text-white ${
              resumes.length === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {downloading ? "正在下载..." : "一键下载所有简历"}
          </button>
        </div>

        {/* 进度条 */}
        {downloading && (
          <div className="w-full bg-gray-300 rounded-full h-4 mb-6">
            <div
              className="bg-blue-600 h-4 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        )}

        {/* 简历卡片展示 */}
        <div className="flex flex-wrap gap-4">
          {resumes.length > 0 ? (
            resumes.map((resume) => (
              <div
                key={resume.id}
                className="flex flex-col justify-between bg-white shadow-lg rounded-xl p-4 w-72"
              >
                <div>
                  <h2 className="text-lg font-semibold">{resume.name}</h2>
                </div>
                <a
                  href={resume.file}
                  download={`${resume.name}_简历.pdf`}
                  className="mt-4 inline-block text-center px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
                >
                  下载
                </a>
              </div>
            ))
          ) : (
            <p className="text-gray-600">暂无简历可显示</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
