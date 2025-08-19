export default function Banner() {
    return (
        <section
            className="relative py-10 lg:py-30 px-4 bg-[url('/icons/banner.jpg')] bg-cover bg-center"
        >
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative max-w-7xl mx-auto text-white text-center">
                <h2 className="text-[32px] md:text-[48px] xl:text-[64px] font-bold mb-3">
                    Find the Best
                    <span className="text-[#E60023]"> UK Online Casinos</span>
                </h2>
                <p className="opacity-80 text-[16px] lg:text-[20px]">
                    Discover top-rated UK-licensed casino sites with exclusive bonuses, trusted reviews, and the latest games. Your ultimate guide to safe and exciting online gambling in the United Kingdom.
                </p>
                <a href="/top-casinos">
                    <button className="bg-[#E60023] cursor-pointer rounded-[12px] mt-5 py-3 px-20 font-bold border border-[#E60023] text-white">
                        Play Now
                    </button>
                </a>
            </div>
        </section>
    );
}
