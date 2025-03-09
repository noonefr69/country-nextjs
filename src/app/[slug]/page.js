import datas from "@/data";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

export default async function Page({ params }) {
  const country = await datas[params.slug];

  const findCountryByBorderCode = (borderCode) => {
    return datas.find((data) => data.alpha3Code === borderCode);
  };

  return (
    <div className="md:p-16 p-10 max-w-[1440px] mx-auto">
      <nav className="pb-16">
        <Link
          className="dark:bg-[hsl(209,23%,22%)] bg-white flex items-center shadow-md w-fit px-7 gap-4 py-2 border border-transparent duration-150 rounded hover:border-[#0000000a]"
          href={`/`}
        >
          <FaArrowLeftLong className="text-2xl" />{" "}
          <span className="text-2xl ">Back</span>
        </Link>
      </nav>

      <section className="flex flex-col md:flex-row md:gap-16">
        <Image
          src={country.flags.svg}
          className="w-full h-full md:w-1/2 pb-12"
          width={100}
          height={100}
          alt="a"
        />
        <div className="md:w-1/2">
          <h1 className="font-bold text-3xl mb-7">{country?.name}</h1>
          <div className="md:flex md:justify-between">
            <ul className="flex flex-col gap-3 mb-12">
              <li className="text-lg font-semibold">
                Native Name:{" "}
                <span className="font-normal">{country.nativeName}</span>
              </li>
              <li className="text-lg font-semibold">
                Population:{" "}
                <span className="font-normal">
                  {country.population.toLocaleString()}
                </span>
              </li>
              <li className="text-lg font-semibold">
                Region: <span className="font-normal">{country.region}</span>
              </li>
              <li className="text-lg font-semibold">
                Sub Region:{" "}
                <span className="font-normal">{country.subregion}</span>
              </li>
              <li className="text-lg font-semibold">
                Capital: <span className="font-normal">{country.capital}</span>
              </li>
            </ul>
            <ul className="flex flex-col gap-3 mb-12">
              <li className="text-lg font-semibold">
                Top Level Domain:{" "}
                <span className="font-normal">{country.topLevelDomain}</span>
              </li>
              <li className="text-lg font-semibold">
                Currencies:{" "}
                <span className="font-normal">
                  {country.currencies[0].name}
                </span>
              </li>
              <li className="text-lg font-semibold flex items-center gap-1">
                Languages:{" "}
                <span className="flex flex-wrap space-x-1 items-center">
                  {country.languages.map((language, index) => (
                    <span className="font-normal" key={index}>
                      {language.name},
                    </span>
                  ))}
                </span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col md:flex md:items-center gap-5">
            <h2 className="text-xl text-start md:mr-4 font-semibold mb-7 md:mb-0 w-full">
              Border Countries:
            </h2>
            <ul className="flex gap-3 space-y-3 md:space-y-0 items-center flex-wrap">
              {country?.borders?.length > 0 ? (
                country.borders.map((border, index) => {
                  const borderCountry = findCountryByBorderCode(border);
                  return (
                    <li className="md:mb-4" key={index}>
                      <Link
                        className="shadow-sm dark:bg-[hsl(209,23%,22%)] px-8 py-2 border border-transparent duration-150 rounded hover:border-[#0000000a]"
                        href={`/${borderCountry.id}`}
                      >
                        {borderCountry.name}
                      </Link>
                    </li>
                  );
                })
              ) : (
                <li className="md:mb-4">
                  <span className="shadow-sm px-8 py-2 border border-transparent duration-150 rounded">
                    None
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}