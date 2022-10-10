import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeartFill } from 'react-icons/ri';

const ServiceCard = ({ icon, color, title, subtitle }) => {
  return (
    <div className="flex flex-row justify-start items-center white-glassmorphism p-3 m-2 md:w-8/12 w-10/12 cursor-pointer hover:shadow-xl">
      <div className={`flex justify-center items-center w-10 h-10 rounded-full ${color}`}>
        {icon}
      </div>
      <div className="flex flex-col flex-1 ml-5">
        <h1 className="text-white text-lg mt-2">{title}</h1>
        <p className="text-white text-sm mt-2 md:w-9/12">{subtitle}</p>
      </div>
    </div>
  );
};


const Services = () => {
  return (
    <div className="flex flex-col md:flex-row w-full justify-center items-center gradient-bg-services">
      <div className="flex mf:flex-row flex-col justify-between items-center md:p-20 py-12 px-4">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start items-center">
        <ServiceCard 
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          color="bg-[#2952e3]"
          title="Security guarantee"
          subtitle="Security is guaranteed. We always maintain privacy and the quality of our products."
        />
        <ServiceCard
          color="bg-[#8945f8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Our exchange rate is unarguably the best amongst all other platforms."
        />
        <ServiceCard
          color="bg-[#f84550]"
          title="Fastest transactions"
          icon={<RiHeartFill fontSize={21} className="text-white" />}
          subtitle="One of our prime factors is transaction speed. Hence, all transactions happen almost immediately."
        />
      </div>
    </div>
  );
};
   
export default Services;