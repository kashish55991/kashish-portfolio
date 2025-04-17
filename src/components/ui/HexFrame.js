import Image from 'next/image'

export default function HexFrame() {
  return (
    <div className="relative w-60 h-60 flex items-center justify-center">
      {/* SVG Hex Frame */}
      <svg
        viewBox="0 0 200 200"
        className="absolute w-full h-full z-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 5 L150 5 C160 5 170 15 170 25 L170 175 C170 185 160 195 150 195 L50 195 C40 195 30 185 30 175 L30 25 C30 15 40 5 50 5 Z"
          fill="none"
          stroke="#00FFD1"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Circular Image inside */}
      <div className="relative w-40 h-40 rounded-full overflow-hidden z-20">
        <Image
          src="/Kashish Headshot.jpg"
          alt="Kashish"
          fill
          className="object-cover"
        />
      </div>
    </div>
  )
}
