import { Helmet } from "react-helmet";
type HelmetProps = {
  title: string;
  content: string;
};
const Meta = ({ content, title }: HelmetProps) => {
  return (
    <Helmet>
      <title>{`newave -${title}`}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
};

export default Meta;
