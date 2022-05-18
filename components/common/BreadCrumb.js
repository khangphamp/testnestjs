import React from 'react';
import { RiArrowRightSLine } from 'react-icons/ri';
import { ImHome3 } from 'react-icons/im';
const BreadCrumb = ({article}) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a href="#" className="inline-flex items-center text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500 dark:hover:text-white">
            <ImHome3 className='mr-1' />
            <span>Trang chủ</span>
          </a>
        </li>
        <li>
          <div className="flex items-center">
            <RiArrowRightSLine />
            <a href="#" className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Bất động sản</a>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <RiArrowRightSLine />
            <a href="#" className="ml-1 text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500">Rao bán</a>
          </div>
        </li>
        <li aria-current="page">
          <div className="flex items-center">
            <RiArrowRightSLine />
            <span className="ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 ">[Rao bán] {article.title}</span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
export default BreadCrumb;
