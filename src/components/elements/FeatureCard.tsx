import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  linkText: string;
  linkUrl: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  linkText,
  linkUrl,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-md transition-transform duration-500 hover:scale-[1.02]">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <a
        href={linkUrl}
        className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
      >
        {linkText}
        <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default FeatureCard;
