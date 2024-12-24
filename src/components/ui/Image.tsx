interface Source {
  srcSet: string;
  type: string;
  media?: string;
}

interface ResponsivePictureProps {
  sources: Source[];
  imgAlt: string;
  imgDefault: { src: string };
  imgWidth?: number; // Optional
  imgHeight?: number; // Optional
}
const Image = ({
  sources,
  imgAlt,
  imgDefault,
  imgWidth,
  imgHeight,
}: ResponsivePictureProps) => {
  return (
    <picture>
      {sources.map((source, index) => (
        <source
          key={index}
          srcSet={source.srcSet}
          type={source.type}
          media={source.media || undefined}
        />
      ))}
      <img
        src={imgDefault.src}
        alt={imgAlt}
        width={imgWidth}
        height={imgHeight}
        loading="lazy"
      />
    </picture>
  );
};

export default Image;
