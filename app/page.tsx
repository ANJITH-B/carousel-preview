"use client";
import CodeBlock from "@/components/SyntaxHighligher";
import { carouselBelowNavigation, carouselDefault, carouselNavigationInside, dataCode, images } from "@/utils/data";
import {
  Carousel,
  ImageSlider,
  NextIcon,
  PrevIcon,
  Progress,
} from "react-glide-carousel";



export default function Home() {

  return (
    <div className="w-full flex justify-center items-center h-full py-40 relative  bg-[#121212]">
      <div className=" md:w-[600px] flex flex-col gap-12">

        <CodeBlock
          tabs={[
            { tabName: "npm", code: `npm install react-glide-carousel` },
          ]}
          language="bash"
          showNumber={false}
        />


        <h4 className="italic mt-10"># Navigation Below</h4>
        <div className="w-[600px] h-[400px]">
          <Carousel
            defaultSlider={false}
            items={images.map((item) => item.image)}
            autoPlay
            interval={5000}
            className="w-full h-full"
          >
            <ImageSlider className="w-full h-[calc(100%-45px)] border border-gray-600" />
            <div className="flex flex-row justify-center items-center w-full pt-5 gap-5">
              <PrevIcon className="w-6 h-6 p-1 border-gray-500" />
              <div className="bg-zinc-800 rounded-full px-3 p-2 w-1/3">
                <Progress className="w-full" />
              </div>
              <NextIcon className="w-6 h-6 p-1  border-gray-500" />
            </div>
          </Carousel>
        </div>
        <CodeBlock
          tabs={[
            { tabName: "App.jsx", code: carouselBelowNavigation },
            { tabName: "data.js", code: dataCode },
          ]}
        />

        <h4 className="italic mt-20"># Slider Only</h4>
        <div className="w-[600px] h-[350px]">
          <Carousel
            items={images.map((item) => item.image)}
            autoPlay
            interval={5000}
            className="w-full h-full"
          />
        </div>
        <CodeBlock
          tabs={[
            { tabName: "App.jsx", code: carouselDefault },
            { tabName: "data.js", code: dataCode },
          ]}
        />


        <h4 className="italic mt-20"># Navigation inside</h4>
        <div className="w-[600px] h-[350px]">
          <Carousel
            items={images.map((item) => item.image)}
            autoPlay
            interval={5000}
            className="w-full h-full"
          >
            <PrevIcon className="w-8 h-8 p-1.5 absolute left-5 top-1/2 -translate-y-1/2 bg-white/30 rounded-full" />
            <NextIcon className="w-8 h-8 p-1.5 absolute right-5 top-1/2 -translate-y-1/2 bg-white/30 rounded-full" />
            <div className="absolute flex items-center justify-center bottom-8 w-full">
              <Progress className="w-1/3 " />
            </div>
          </Carousel>
        </div>
        <CodeBlock
          tabs={[
            { tabName: "App.jsx", code: carouselNavigationInside },
            { tabName: "data.js", code: dataCode },
          ]}
        />


      </div>
    </div>
  );
}
