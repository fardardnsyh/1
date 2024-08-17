import React from 'react';

const Message = React.forwardRef(({ name, content, time, position }, ref) => {
  return (
    <div ref={ref} className={`flex items-center ${position === "left" ? "justify-start" : "justify-end"} ml-5 mr-5 mb-3`}>
      <div className={`min-w-[200px] w-fit break-all px-4 py-3 max-w-[65%] text-[14px] rounded-lg ${position === "left" ? "bg-slate-50" : "bg-[#f4f4f4]"}`}>
        <span className='font-semibold'>{name}</span>
        <p>{content}</p>
        <span>{time}</span>
      </div>
    </div>
  );
});

export default Message;
