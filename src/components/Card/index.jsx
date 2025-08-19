import Link from "next/link";

export default function Card({ name, icon, rating, minDeposit, methods, bonus, link }) {
    return (
        <div className="w-full bg-[#E60023]/4 justify-between border-2 border-[#E60023] rounded-[12px] xl:p-8 p-4 flex flex-col gap-5 transform hover:scale-105 transition-all duration-300 relative overflow-hidden text-black">
            {/* Card Icon (Logo Link) */}
            <div className=" flex items-center justify-center">
                <Link href={link} target="_blank" rel="noopener noreferrer">
                    <img
                        src={icon}
                        alt={name || "casino-logo"}
                        className="w-full max-h-[60px] object-contain"
                    />
                </Link>
            </div>
            <div className="flex gap-2 items-center justify-center">
             <div

                className="text-[#992cff] px-1 xl:py-1 xl:px-2 rounded-[12px] border border-[#992cff] text-[10px] xl:text-[12px]"
            >
                UK licensed
            </div>
            <div

                className="text-[#992cff] px-1 xl:py-1 xl:px-2 rounded-[12px] border border-[#992cff] text-[10px] xl:text-[12px]"
            >
                T&C only 18+
            </div>
           </div>
         <div className="flex flex-row lg:flex-col gap-2 items-center justify-around">
               {/* Expert Rating */}
            <div className=" flex flex-col gap-2 items-center justify-center">
                <p className="opacity-50 text-[16px]">Expert Rating</p>
                <div className="flex gap-1 items-center">
                    {Array.from({ length: 5 }, (_, i) => {
                        const starValue = i + 1;
                        if (rating >= starValue) {
                            // full star
                            return (
                                <img
                                    key={i}
                                    src="/icons/star-full.png"
                                    alt="full star"
                                    className="w-4 h-4"
                                />
                            );
                        } else if (rating >= starValue - 0.5) {
                            // half star
                            return (
                                <img
                                    key={i}
                                    src="/icons/star-half.png"
                                    alt="half star"
                                    className="w-4 h-4"
                                />
                            );
                        } else {
                            // empty star
                            return (
                                <img
                                    key={i}
                                    src="/icons/star-empty.png"
                                    alt="empty star"
                                    className="w-4 h-4 opacity-30"
                                />
                            );
                        }
                    })}
                </div>
                <h4 className="text-[24px] font-bold">{rating.toFixed(1)}</h4>
            </div>

            {/* Min Deposit */}
            <div className=" flex flex-col gap-2 items-center justify-center ">
                <p className="opacity-50 text-[16px]">Min Deposit</p>
                <h4 className="text-[24px] font-bold">{minDeposit}</h4>
                <div className="flex gap-1 flex-wrap justify-center">
                    {methods.map((method, i) => (
                        <div
                            key={i}
                            className="text-[#E60023] px-1 xl:py-1 xl:px-2 rounded-[12px] border border-[#E60023] text-[10px] xl:text-[12px]"
                        >
                            {method}
                        </div>
                    ))}
                </div>
            </div>
         </div>

            {/* Welcome Bonus */}
            <div className=" flex flex-col gap-2 items-center justify-center ">
                <p className="opacity-50 text-[16px]">Welcome Bonus</p>
                <h4 className="text-[24px] text-center font-bold">{bonus}</h4>
            </div>

            {/* Button */}
            <div className=" flex items-center  w-full">
                <Link href={link} target="_blank" rel="noopener noreferrer" className="w-full">
                    <button className="font-bold py-2 px-10 w-full rounded-[8px] bg-[#E60023] cursor-pointer text-[#fff] shadow-[0_0_5px_#E60023,0_0_10px_#FFD700,0_0_20px_#E60023]">
                        Get Bonus
                    </button>
                </Link>
            </div>
        </div>
    );
}