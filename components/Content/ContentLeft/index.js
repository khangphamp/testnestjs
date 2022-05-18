import React from 'react';
import { FiCornerUpLeft } from 'react-icons/fi';
import { BsFillShareFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';

import CustomBlockTitle from '@/components/common/CustomBlockTitle';
import MainContent from './MainContent';
const ContentLeft = ({article}) => {
  return (
    <div className="">
      <div className="actions mt-2 flex justify-between">
        <CustomBlockTitle Icon={FiCornerUpLeft} positionIcon={true}>Quay lại</CustomBlockTitle>
        <div>
          <CustomBlockTitle Icon={BsFillShareFill}>Chia sẻ</CustomBlockTitle>
          <CustomBlockTitle Icon={AiOutlineHeart}> Yêu thích</CustomBlockTitle>
        </div>
      </div>
      <div className="title flex gap-2 mt-2">
        <div className="w-16 h-8 flex justify-center items-center bg-blue-700 text-white">
                  Đất
        </div>
        <h1 className="font-bold text-xl">{article.title}</h1>
      </div>
      <div className="quantity-info-common border-b-2 py-3 border-gray-300 flex justify-between">
        <div>
          <CustomBlockTitle Icon={AiOutlineHeart} positionIcon={true}>446 lượt xem</CustomBlockTitle>
          <CustomBlockTitle Icon={AiOutlineHeart} positionIcon={true}>26 lượt chia sẻ</CustomBlockTitle>
          <CustomBlockTitle Icon={AiOutlineHeart} positionIcon={true}>46 lượt gọi</CustomBlockTitle>
          <CustomBlockTitle Icon={AiOutlineHeart} positionIcon={true}>23 lượt nhắn tin</CustomBlockTitle>
          <CustomBlockTitle Icon={AiOutlineHeart} positionIcon={true}>15 email</CustomBlockTitle>
        </div>
        <CustomBlockTitle Icon={AiOutlineHeart} positionIcon={true}>12/20/2020 10:58</CustomBlockTitle>
      </div>
      <MainContent article={article} />
    </div>
  );
};

export default ContentLeft;