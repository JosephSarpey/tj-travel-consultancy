import { Card } from "../components/Card";
import { useState } from "react";

type RegionCardProps = {
  region: string;
  countries: string[];
  image: string;
  className?: string;
};

export default function RegionCard({
  region,
  countries,
  image,
  className = "",
}: RegionCardProps) {
  const [showCountries, setShowCountries] = useState(false);

  return (
    <Card
      className={`w-[290px] m-auto p-0 cursor-pointer relative overflow-hidden shadow-lg border-0 transition-all duration-300 bg-background transform ${
        showCountries ? "scale-105 z-20" : ""
      } ${className}`}
      style={{ willChange: "transform" }}
      onMouseEnter={() => setShowCountries(true)}
      onMouseLeave={() => setShowCountries(false)}
    >
      {/* Image */}
      <div className="h-50 w-full relative overflow-hidden">
        <img
          src={image}
          alt={region}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            showCountries ? "scale-120" : ""
          }`}
          loading="lazy"
        />
        {/* Overlay for hover */}
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
            showCountries ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      {/* Content */}
      <div className="p-5 flex flex-col items-center text-center relative z-10">
        <h3 className="text-xl font-bold text-brand mb-2 tracking-wide">
          {region}
        </h3>
        {/* Animated country list */}
        <div className="h-[130px] sm:h-[120px] flex items-center justify-center w-full">
          {showCountries ? (
            <ul className="flex flex-wrap gap-2 justify-center animate-fade-in">
              {countries.map((country, i) => (
                <li
                  key={i}
                  className="bg-accent/80 text-secondary px-3 py-1 rounded-full text-xs font-semibold shadow hover:bg-brand hover:text-white transition-colors duration-200"
                >
                  {country}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-muted">
              <p className="hidden sm:block text-sm text-muted-foreground italic opacity-80 transition-all duration-300">
                Hover to see countries
              </p>
              <p className="sm:hidden text-sm text-muted-foreground italic opacity-80 transition-all duration-300">
                Tap to see countries
              </p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
