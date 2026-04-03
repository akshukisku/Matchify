const FeatureCard = ({ feature }: any) => {
  return (
    <div
      className={`relative rounded-2xl p-6 bg-white/5 backdrop-blur-lg border border-white/10 
      hover:scale-[1.02] transition duration-300 flex flex-col overflow-hidden
      ${feature.span || ""}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-pink-500/20 mb-4">
        <span>{feature.icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold">{feature.title}</h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2">
        {feature.desc}
      </p>

      {/* Image Fix */}
      {feature.image && (
        <div className="mt-auto pt-4">
          <img
            src={feature.image}
            alt=""
            className="w-full h-40 object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard