import React from 'react';
import Image from 'next/image';
function Card({article}) {
  return (
    <div className="card rounded-2xl overflow-hidden relative w-full h-[200px]">
      {article.img && <Image src={article.img} alt="" layout="fill" className="w-full" />}
    </div>
  );
}

export default Card;