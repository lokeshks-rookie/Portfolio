import * as React from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// Project specific SVG or just generic logo for the card
const ULogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 29.667 31.69"
    {...props}
  >
    <path d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" />
    <path d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)" />
    <path d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)" />
  </svg>
);

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  link?: string;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, title = "Project Title", description = "Project description goes here.", link = "#", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`group h-[300px] w-[290px] [perspective:1000px] ${className || ""}`}
        {...props}
      >
        <div className="relative h-full rounded-[50px] bg-gradient-to-br from-[var(--color-ink-2)] to-[var(--color-ink)] shadow-2xl transition-all duration-500 ease-in-out [transform-style:preserve-3d] group-hover:[box-shadow:var(--color-accent)_0px_20px_40px_-20px] group-hover:[transform:rotate3d(1,1,0,25deg)]">
          <div className="absolute inset-2 rounded-[55px] border-b border-l border-white/30 bg-[var(--color-base)]/80 backdrop-blur-md [transform-style:preserve-3d] [transform:translate3d(0,0,25px)]"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-12 [transform:translate3d(0,0,26px)]">
            <span className="block text-3xl font-black text-[var(--color-ink)] text-center">
              {title}
            </span>
            <span className="mt-4 block text-[13px] leading-tight text-[var(--color-ink)]/90 text-center w-full px-2 line-clamp-4 overflow-hidden text-ellipsis">
              {description}
            </span>
          </div>
          <div className="absolute bottom-5 left-8 right-6 flex items-center justify-between [transform-style:preserve-3d] [transform:translate3d(0,0,26px)]">
            <div className="flex gap-2.5 [transform-style:preserve-3d]">
              {[
                { icon: FaGithub, delay: "400ms", href: link },
                { icon: ExternalLink, delay: "600ms", href: link },
              ].map(({ icon: Icon, delay, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group/social grid h-[30px] w-[30px] place-content-center rounded-full border-none bg-[var(--color-ink)] shadow-[rgba(0,0,0,0.5)_0px_7px_5px_-5px] transition-all duration-200 ease-in-out group-hover:[box-shadow:rgba(0,0,0,0.2)_-5px_20px_10px_0px] group-hover:[transform:translate3d(0,0,50px)] hover:bg-[var(--color-accent)]"
                  style={{ transitionDelay: delay }}
                >
                  <Icon className="h-4 w-4 text-[var(--color-base)] transition-colors group-hover/social:text-[var(--color-ink)]" />
                </a>
              ))}
            </div>
            <a href={link} target="_blank" rel="noreferrer" className="flex w-2/5 cursor-pointer items-center justify-end transition-all duration-200 ease-in-out hover:[transform:translate3d(0,0,10px)]">
              <button className="border-none bg-none text-xs font-bold text-[var(--color-ink)] group-hover:text-[var(--color-ink-2)]">
                View more
              </button>
              <ChevronDown className="h-4 w-4 stroke-[var(--color-ink)] group-hover:stroke-[var(--color-ink-2)]" strokeWidth={3} />
            </a>
          </div>
          <div className="absolute top-0 right-0 [transform-style:preserve-3d]">
            {[
              { size: "170px", pos: "8px", z: "20px", delay: "0s" },
              { size: "140px", pos: "10px", z: "40px", delay: "0.4s" },
              { size: "110px", pos: "17px", z: "60px", delay: "0.8s" },
              { size: "80px", pos: "23px", z: "80px", delay: "1.2s" },
            ].map((circle, index) => (
              <div
                key={index}
                className="absolute aspect-square rounded-full bg-[var(--color-ink)]/7 shadow-[rgba(100,100,111,0.1)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out border border-[var(--color-ink)]/5"
                style={{
                  width: circle.size,
                  top: circle.pos,
                  right: circle.pos,
                  transform: `translate3d(0, 0, ${circle.z})`,
                  transitionDelay: circle.delay,
                }}
              ></div>
            ))}
            <div
              className="absolute grid aspect-square w-[50px] place-content-center rounded-full bg-[var(--color-ink)] shadow-[rgba(100,100,111,0.2)_-10px_10px_20px_0px] transition-all duration-500 ease-in-out [transform:translate3d(0,0,100px)] [transition-delay:1.6s] group-hover:[transform:translate3d(0,0,120px)]"
              style={{ top: "30px", right: "30px" }}
            >
              <span className="text-2xl font-black text-[var(--color-base)]">
                {title.charAt(0).toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export default GlassCard;
