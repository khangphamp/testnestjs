import React from 'react';
import Link from 'next/link';
import Card from '@/components/common/Card';

const MainContent = ({article}) => {
  return (
    <div className="main-content">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px">
          <li className="mr-2">
            <Link href="#">
              <span className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Thông tin chung</span>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="#">
              <span className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Phân tích</span>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="#">
              <span className="inline-block p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500" aria-current="page">Hình ảnh</span>
            </Link>
          </li>
          <li className="mr-2">
            <Link href="#">
              <span className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Khác</span>
            </Link>
          </li>

        </ul>
      </div>
      <div className="des-images mt-5 grid grid-cols-3 gap-16 bg-slate-200 p-10">
        <Card article={article} />
        <Card article={article} />
        <Card article={article} />
        <Card article={article} />
        <Card article={article} />
        <Card article={article} />
      </div>
    </div>
  );
};

export default MainContent;