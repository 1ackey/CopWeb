import * as React from "react";
import { Link } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-6">管理系统</h1>
      <NavigationMenu.Root orientation="vertical">
        <NavigationMenu.List className="flex flex-col gap-2">
          <NavigationMenu.Item>
            <Link to="/users" className="hover:text-blue-400">用户管理</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/companies" className="hover:text-blue-400">企业管理</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/jobs" className="hover:text-blue-400">职位管理</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/analytics" className="hover:text-blue-400">数据可视化</Link>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <Link to="/resumes" className="hover:text-blue-400">简历管理</Link>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </aside>
  );
};

export default Sidebar;
