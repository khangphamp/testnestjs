import React from 'react';
const ContentRight = () => {
  return (
    <div className="mt-10">
      <div className="block-info">
        <h3 className="font-bold py-3 px-4 bg-gray-50">Thông tin vị trí</h3>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Tỉnh/Thành Phố:</span>
          <span>Tỉnh Khánh Hòa</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Quận/Huyện:</span>
          <span>Nha Trang</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Xã/Phường :</span>
          <span>Phường 15</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Tên Đường</span>
          <span>123 Quốc Lộ 1A</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Số Nhà</span>
          <span>1A</span>
        </div>
      </div>
      <div className="block-info mt-14">
        <h3 className="font-bold py-3 px-4 bg-gray-50">Thông tin liên hệ</h3>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Người Liên hệ:</span>
          <span className="font-bold">Phạm Anh Tú</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Số điện thoại:</span>
          <span className="font-bold text-blue-400">0123456789</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Email :</span>
          <span className="font-bold text-blue-400">Tu@gmail.com</span>
        </div>
        <div className="flex justify-between h-12 items-center px-4 bg-gray-50 border-t border-gray-200">
          <span>Company</span>
          <span>Suxany</span>
        </div>
      </div>
    </div>
  );
};

export default ContentRight;