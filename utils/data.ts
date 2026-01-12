export const carouselDefault = `import { Carousel } from "react-glide-carousel";
import { images } from "./data";

export default function App() {
  return (
    <div className="w-[600px] h-[350px]">
      <Carousel
        items={images.map((item) => item.image)}
        autoPlay
        interval={5000}
        className="w-full h-full"
      />
    </div>
  );
}`;

export const carouselBelowNavigation = `import { Carousel, ImageSlider, Progress } from "react-glide-carousel";
import { NextIcon, PrevIcon } from "react-glide-carousel";
import { images } from "./data";

export default function App() {
  return (
    <div className="w-[600px] h-[400px]">
      <Carousel
        defaultSlider={false}
        items={images.map((item) => item.image)}
        autoPlay
        interval={5000}
        className="w-full h-full"
      >
        <ImageSlider 
          className="w-full h-[calc(100%-45px)] border border-gray-600" 
        />
        <div 
          className="flex flex-row justify-center items-center 
          w-full pt-5 gap-5"
        >
          <PrevIcon className="w-6 h-6 p-1" />
          <div className="bg-zinc-800 rounded-full px-3 p-2 w-1/3">
            <Progress className="w-full" />
          </div>
          <NextIcon className="w-6 h-6 p-1" />
        </div>
      </Carousel>
    </div>
  );
}`;

export const carouselNavigationInside = `import { Carousel, Progress } from "react-glide-carousel";
import { NextIcon, PrevIcon } from "react-glide-carousel";
import { images } from "./data";

export default function App() {
  return (
    <div className="w-[600px] h-[350px]">
      <Carousel
        items={images.map((item) => item.image)}
        autoPlay
        interval={5000}
        className="w-full h-full"
      >
        <PrevIcon 
          className="w-8 h-8 p-1.5 absolute left-5 top-1/2 
          -translate-y-1/2 bg-white/30 rounded-full" 
        />
        <NextIcon className="w-8 h-8 p-1.5 absolute right-5 top-1/2 
          -translate-y-1/2 bg-white/30 rounded-full" />
        <div 
          className="absolute flex items-center justify-center 
          bottom-8 w-full"
        >
          <Progress className="w-1/3 " />
        </div>
      </Carousel>
    </div>
  );
}`;



export const dataCode = `export const images = [
  {
    image: "https://picsum.photos/id/1018/1000/600/",
    title: "Mountain View",
    description: "A breathtaking view of the mountains.",
  },
  {
    image: "https://picsum.photos/id/1015/1000/600/",
    title: "River Side",
    description: "Calm river flowing through the valley.",
  },
  {
    image: "https://picsum.photos/id/1019/1000/600/",
    title: "Forest Path",
    description: "Journey through the dense green forest.",
  },
  {
    image: "https://picsum.photos/id/1020/1000/600/",
    title: "Bear in Wild",
    description: "Wild bear spotted in natural habitat.",
  },
  {
    image: "https://picsum.photos/id/1021/1000/600/",
    title: "Misty Morning",
    description: "Foggy morning in the woods.",
  },
];`;

export const images = [
  {
    image: "https://picsum.photos/id/1018/1000/600/",
    title: "Mountain View",
    description: "A breathtaking view of the mountains.",
  },
  {
    image: "https://picsum.photos/id/1015/1000/600/",
    title: "River Side",
    description: "Calm river flowing through the valley.",
  },
  {
    image: "https://picsum.photos/id/1019/1000/600/",
    title: "Forest Path",
    description: "Journey through the dense green forest.",
  },
  {
    image: "https://picsum.photos/id/1020/1000/600/",
    title: "Bear in Wild",
    description: "Wild bear spotted in natural habitat.",
  },
  {
    image: "https://picsum.photos/id/1021/1000/600/",
    title: "Misty Morning",
    description: "Foggy morning in the woods.",
  },
];