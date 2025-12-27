import { useEffect } from "react";

const sections = [
  { id: "foundation", label: "Foundation Coaching" },
  { id: "competitive", label: "Competitive Coaching" },
  { id: "smart", label: "Smart Classes" },
  { id: "labs", label: "Professional Labs" },
  { id: "sports", label: "Sports & Gym" },
  { id: "boarding", label: "Boarding" },
  { id: "day-boarding", label: "Day-Boarding" },
];

export default function FacilitiesNav() {

  useEffect(() => {
    const navLinks = document.querySelectorAll<HTMLAnchorElement>(".facility-link");
    const sectionsDom = document.querySelectorAll<HTMLElement>("section[id]");

    const onScroll = () => {
      const scrollY = window.scrollY + 200;

      // Don't remove the first active until user scrolls
      if (scrollY <= 300) return;

      sectionsDom.forEach((section) => {
        if (
          scrollY >= section.offsetTop &&
          scrollY < section.offsetTop + section.offsetHeight
        ) {
          navLinks.forEach((link) => link.classList.remove("active"));

          const matched = document.querySelector(
            `.facility-link[href="#${section.id}"]`
          );

          matched?.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.querySelector<HTMLElement>(id);
    if (!target) return;

    window.scrollTo({
      top: target.offsetTop - 160, // matches sticky offset
      behavior: "smooth",
    });
  };

  return (
    <div className="sticky top-32.5 z-40 bg-white backdrop-blur-md border-b shadow">
      <div className="container mx-auto px-4 py-3 overflow-x-auto">
        <div className="flex w-max gap-3">
          {sections.map((item, index) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(`#${item.id}`);
              }}
              className={`facility-link px-4 py-2 rounded-full whitespace-nowrap border border-gray-300 bg-gray-100 text-gray-700 transition-all cursor-pointer hover:bg-blue-600 hover:text-white ${
                index === 0 ? "active" : ""
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
