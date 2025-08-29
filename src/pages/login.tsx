import { useState } from "react";

type Role = "student" | "company" | "teacher";

export default function Login() {
  const [role, setRole] = useState<Role>("student");
  const [form, setForm] = useState({ id: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("登录信息：", { role, ...form });
    // TODO: 这里调用后端API /api/login
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* 顶部 Logo */}
        <h1 className="text-2xl font-bold text-center text-blue-800 mb-6">
          简历投递平台
        </h1>

        {/* 身份选择 */}
        <div className="grid grid-cols-3 gap-2 mb-6">
          <button
            onClick={() => setRole("student")}
            className={`p-3 rounded-lg font-medium ${
              role === "student"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            👨‍🎓 学生
          </button>
          <button
            onClick={() => setRole("company")}
            className={`p-3 rounded-lg font-medium ${
              role === "company"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            🏢 企业
          </button>
          <button
            onClick={() => setRole("teacher")}
            className={`p-3 rounded-lg font-medium ${
              role === "teacher"
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            👩‍🏫 教师
          </button>
        </div>

        {/* 登录表单 */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* 学生/教师输入学号/工号，企业输入账号 */}
          <input
            type="text"
            placeholder={
              role === "student"
                ? "学号 / 邮箱"
                : role === "teacher"
                ? "教师工号"
                : "企业账号"
            }
            value={form.id}
            onChange={(e) => setForm({ ...form, id: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* 密码输入框 */}
          <input
            type="password"
            placeholder="密码"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          />

          {/* 登录按钮 */}
          <button
            type="submit"
            className="w-full py-2 bg-orange-500 text-white rounded-lg font-semibold shadow hover:bg-orange-600"
          >
            登录
          </button>
        </form>
      </div>
    </div>
  );
}
