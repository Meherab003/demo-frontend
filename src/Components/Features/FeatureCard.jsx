const FeatureCard = ({feature}) => {
    return (
        <div className="flex flex-col justify-center items-center lg:items-start p-5 rounded-3xl hover:bg-slate-100 group">
            <img className="" src={feature.source} alt={feature.name} />
            <h2 className="font-medium md:text-lg lg:text-xl text-violet-950 text-center lg:text-start mb-1">{feature.name}</h2>
            <p className="text-xs lg:text-sm text-gray-500 text-center lg:text-start">{feature.description}</p>
        </div>
    );
};

export default FeatureCard;