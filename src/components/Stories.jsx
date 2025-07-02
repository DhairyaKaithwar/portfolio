import React, { useRef } from "react";
import { STORIES } from "../constants";

const Stories = () => {
  const storiesRef = useRef(null);
  return (
    <section ref={storiesRef} className="py-16" id="stories">
      <div className="px-4">
        <h2 className="mb-8 text-center text-3xl font-medium lg:text-4xl">
          Stories Through My Lens
        </h2>
        <div className="flex flex-col items-center justify-center">
          {STORIES.map((story) => (
            <div
              key={story.id}
              className="flex flex-col  w-full lg:w-8/12  p-4 "
            >
              <div className="flex-grow overflow-hidden rounded-lg border border-purple-300/20">
                <img
                  src={story.imgSrc}
                  className="h-full w-full object-cover"
                  alt=""
                />
                <div className="p-6">
                  <h3 className=" mb-2 text-lg font-bold lg:text-2xl">
                    {story.title}
                  </h3>
                  <p className="mb-4 italic text-sm md:text-lg xl:text-lg ">{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className=" italic text-center text-sm ">You can check more - <a className="  text-blue-600 underline" href="https://www.instagram.com/shutter.patience.png/" target="_blank">click here</a></p>
      </div>
    </section>
  );
};

export default Stories;
