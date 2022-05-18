import React from 'react';
import Image from 'next/image';
import Logo from 'public/assets/icons/logo.svg';
import Banner from 'public/assets/icons/banner.svg';
import BreadCrumb from '@/components/common/BreadCrumb';
const Header= ({article}) => {
  return (
    <div className="header">
      <div className="logo mb-2">
        <Logo />
      </div>
      <BreadCrumb article={article} />
      <div className="banner mt-3">
        <Banner className="w-full" />
      </div>
    </div>
  );
};

export default Header;