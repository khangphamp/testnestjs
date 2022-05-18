import React from 'react';

function CustomBlockTitle(props) {
  const { children, Icon, positionIcon = false, ...other } = props;
  return (
    <div {...other} className="inline-flex items-center">
      <div className={`inline-flex items-center text-sm font-medium text-gray-400 md:ml-2 dark:text-gray-500 dark:hover:text-white ${positionIcon?'flex-row-reverse': 'flex-row'}`}>
        {children}
        {Icon &&
          <div className={`${positionIcon?'mr-2':'ml-2'} cursor-pointer`}>
            <Icon />
          </div>
        }
      </div>
    </div>
  );
}


export default CustomBlockTitle;
