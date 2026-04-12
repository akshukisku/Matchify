const FeatureCard = ({ feature }: any) => {
  return (
    <div
      className={`relative rounded-2xl p-6 bg-[#111111] border border-white/10
      hover:scale-[1.02] transition duration-300 flex flex-col overflow-hidden min-h-[220px]
      ${feature.span || ""}`}
    >
      {/* Icon */}
      <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-purple-500/20 mb-4 shrink-0">
        <span className="text-purple-400 text-lg">{feature.icon}</span>
      </div>

      {/* Title */}
      <h3 className="text-white text-xl font-semibold leading-snug">
        {feature.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-sm mt-2 leading-relaxed max-w-sm">
        {feature.desc}
      </p>

      {/* Visual */}
      {feature.visual && (
        <div className="mt-auto pt-4 flex justify-end">
          {feature.visual}
        </div>
      )}

      {/* Image */}
      {feature.image && (
        <div className="absolute bottom-0 right-0 w-1/2 h-full">
          <img
            src={feature.image}
            alt={feature.title}
            className="w-full h-full object-cover rounded-r-2xl opacity-90"
          />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;