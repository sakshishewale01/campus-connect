type FeatureCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition">

      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h2 className="text-2xl font-bold">
        {title}
      </h2>

      <p className="text-gray-600 mt-3">
        {description}
      </p>

    </div>
  );
}

export default FeatureCard;