const ServiceCard = ({ icon, title, description } : {icon: string, title: string, description: string} ) => (
    <div className="flex gap-5 justify-center w-full max-w-[350px] bg-[#ECF5FF] py-5 px-4 rounded-lg">
      <div className="w-8 flex-shrink-0">
        <img src={icon} alt={title} />
      </div>
      <div className="flex-1">
        <h2 className="font-semibold text-xl md:text-2xl mb-2 text-[#111827]">
          {title}
        </h2>
        <p className="text-[#6B7280] text-sm md:text-base">
          {description}
        </p>
      </div>
    </div>
  );

  export default ServiceCard