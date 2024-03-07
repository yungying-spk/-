import App from "./App";
import { useState,useEffect } from "react";

function CardContent({
  item: { title, url, description, photos, tags },
  setSearchInput,handleSvgClick
}) {
  

  

  return (
    <div className=" flex p-10 gap-5">
      <img src={photos[0]} className=" w-[350px]  rounded-xl" />
      <div className="">
        <a href={url} className="text-[20px]">
          {title}
        </a>
        <p className=" truncate max-w-lg hover:text-clip ">{description}</p>
        <a href={url} className=" text-sky-400">
          อ่านต่อ...
        </a>
        <div className="flex items-center">
          หมวด
          {tags.map((tag, index) => (
            <p
              className="p-1 underline"
              onClick={() => {
                setSearchInput((prev) => {
                    if (prev === ""){return tag}
                    else if(prev !==""){return `${prev} ${tag}`}
                });
              }}
              key={index}
            >
              {" "}
              {index === tags.length - 1 ? "และ " + tag : tag}{" "}
            </p>
          ))}
        </div>
        <div className="flex  gap-6 pt-3 relative">
          <img src={photos[1]} className=" w-[100px] h-[100px] rounded-xl" />
          <img src={photos[2]} className=" w-[100px] h-[100px] rounded-xl" />
          <img src={photos[3]} className=" w-[100px] h-[100px] rounded-xl" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7  absolute right-0 top-16" onClick={()=>{handleSvgClick(url)}} >
  <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 0 0-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75v-4a.75.75 0 0 1 1.5 0v4A2.25 2.25 0 0 1 12.75 17h-8.5A2.25 2.25 0 0 1 2 14.75v-8.5A2.25 2.25 0 0 1 4.25 4h5a.75.75 0 0 1 0 1.5h-5Z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 0 0 1.06.053L16.5 4.44v2.81a.75.75 0 0 0 1.5 0v-4.5a.75.75 0 0 0-.75-.75h-4.5a.75.75 0 0 0 0 1.5h2.553l-9.056 8.194a.75.75 0 0 0-.053 1.06Z" clip-rule="evenodd" />
</svg>
        </div>
        

      </div>
    </div>
  );
}

export default CardContent;
