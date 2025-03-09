import Country from "@/components/country";
import LoadMore from "@/components/infinite-scroll";

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Country />
      <LoadMore />
    </div>
  );
}
