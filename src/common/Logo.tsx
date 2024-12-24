import Image from "@/components/ui/Image";
const Logo = () => {
  return (
    <div className="flex w-fit items-center gap-x-5">
      <Image
        sources={[
          {
            srcSet: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
            type: "image/svg+xml",
            media: "(min-width: 768px)",
          },
          {
            srcSet: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
            type: "image/svg+xml",
            media: "(orientation: portrait)",
          },
        ]}
        imgHeight={28}
        imgWidth={28}
        imgAlt="logo website"
        imgDefault={{ src: "https://icon.icepanel.io/Technology/svg/MongoDB.svg" }}
      />
      <h1 className="space-x-1 bg-gradient-to-r from-primary-600 from-40% via-accent-500 bg-clip-text text-transparent">
        {/* <span className="hidden lg:inline">NW</span> */}
        {/* <span className="hidden lg:inline">E-Commerce</span> */}
        <span>NEWWAVE</span>
      </h1>
    </div>
  );
};

export default Logo;
