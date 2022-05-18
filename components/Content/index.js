import React from 'react';

import ContentLeft from './ContentLeft';
import ContentRight from './ContentRight';
const Content = ({article}) => {
  return (
    <div className="wrap-content flex gap-8">
      <div className="content-left flex-1">
        <ContentLeft article={article} />
      </div>
      <div className="content-right w-3/12">
        <ContentRight />
      </div>
    </div>
  );
};

export default Content;