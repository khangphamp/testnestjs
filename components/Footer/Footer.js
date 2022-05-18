import React from 'react';
import Logo from 'public/assets/icons/logo.svg';
import Link from 'next/link';
function Footer() {
  return (
    <footer className="text-center lg:text-left">
      <div className="container p-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="mb-6">
            <h5 className="uppercase mb-2.5">Về chúng tôi</h5>
            <ul className="list-none mb-0">
              <li>
                <Link href="#"><a className="text-gray-800">Giới thiệu</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Đội ngũ đồng hành</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Môi trường làm việc</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Chính sách điều khoản</a></Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase mb-2.5">Về chúng tôi</h5>
            <ul className="list-none mb-0">
              <li>
                <Link href="#"><a className="text-gray-800">Giới thiệu</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Đội ngũ đồng hành</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Môi trường làm việc</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Chính sách điều khoản</a></Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase mb-2.5">Về chúng tôi</h5>
            <ul className="list-none mb-0">
              <li>
                <Link href="#"><a className="text-gray-800">Giới thiệu</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Đội ngũ đồng hành</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Môi trường làm việc</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Chính sách điều khoản</a></Link>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase mb-2.5">Về chúng tôi</h5>
            <ul className="list-none mb-0">
              <li>
                <Link href="#"><a className="text-gray-800">Giới thiệu</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Đội ngũ đồng hành</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Môi trường làm việc</a></Link>
              </li>
              <li>
                <Link href="#"><a className="text-gray-800">Chính sách điều khoản</a></Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center p-4">
        <Logo />
      </div>
    </footer>
  );
}

export default Footer;