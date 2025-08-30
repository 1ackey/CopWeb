import React from "react";

const Header = () => (
  <header className="flex items-center justify-between p-4 bg-white shadow-sm rounded-lg">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2">
          {/* Dokarti Logo */}
          <div className="flex items-center space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-indigo-600"
            >
              <path d="M11.25 4.5c-.372 0-.712.115-1.002.316a5.86 5.86 0 0 0-1.025.795 9.009 9.009 0 0 0-.91 1.096A6.996 6.996 0 0 0 6 13.5c0 1.956.824 3.738 2.155 4.996.915.845 1.986 1.545 3.208 2.016a6.995 6.995 0 0 0 2.228 0c1.222-.47 2.293-1.171 3.208-2.016C17.176 17.238 18 15.456 18 13.5a6.996 6.996 0 0 0-2.285-5.293 9.009 9.009 0 0 0-.91-1.096 5.86 5.86 0 0 0-1.025-.795A.999.999 0 0 0 12.75 4.5c-.372 0-.712.115-1.002.316zM13.5 14.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
              <path
                fillRule="evenodd"
                d="M19.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM4.5 7.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM12 1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"
                clipRule="evenodd"
              />
            </svg>
            <a href="https://sis.uibe.edu.cn/" className="font-bold text-2xl">UIBE SIS</a>

          </div>
        </div>
      </div>
      <nav> 
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">
              我的
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">
              登出
            </a>
          </li>
        </ul>
      </nav>  
    </header>
  );


export default Header;
