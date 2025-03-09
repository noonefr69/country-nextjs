"use client";

import datas from "@/data";
import Image from "next/image";
import Link from "next/link";
import { IoMdSearch, IoIosArrowDown } from "react-icons/io";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function Country() {
  const [data, setData] = useState(datas);
  const [search, setSearch] = useState("");

  const dataFilter = data.filter((dat) =>
    dat.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="">
      <div className="flex-col flex md:flex-row md:items-center md:justify-between space-y-7 md:space-y-0 p-8">
          <div className="flex items-center md:w-1/3 relative">
            <input
              className="shadow-sm rounded px-3 py-4 pl-[89px] w-full h-full outline-none dark:bg-[hsl(209,23%,22%)] bg-white"
              type="text"
              placeholder={`Search a country`}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoMdSearch className="absolute text-[hsl(209,23%,22%)] dark:text-white left-8 text-3xl" />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className="dark:bg-[hsl(209,23%,22%)] bg-white cursor-pointer shadow-sm px-5 rounded outline-none py-4 flex items-center justify-between w-1/2 md:w-[15rem]">
              Filter by Region <IoIosArrowDown />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="dark:bg-[hsl(209,23%,22%)] py-3 rounded shadow-sm border-none w-full min-w-[var(--radix-dropdown-menu-trigger-width)]"
            >
              <DropdownMenuItem className="cursor-pointer text-md px-5 py-2">
                Antartica
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-md px-5  py-2">
                Africa
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-md px-5 py-2">
                America
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-md px-5 py-2">
                Europe
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer text-md px-5">
                Oceania
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
      </div>{" "}
      <div className="p-16">
        <ul className="flex flex-col gap-16 md:grid md:grid-cols-2 lg:grid-cols-4">
          {dataFilter.slice(0, 32).map((data, index) => (
            <li key={index} className="dark:bg-[hsl(209,23%,22%)] bg-white shadow-sm rounded-md">
              <Link href={`/${data.id}`}>
                <Image
                  className="w-full rounded-t-md"
                  src={data.flags.svg}
                  width={100}
                  height={168}
                  alt={data.name}
                />
                <div className="flex flex-col p-7">
                  <h1 className="font-bold text-lg mb-4">{data.name}</h1>
                  <h3 className="font-semibold mb-1">
                    Population:{" "}
                    <span className="text-[hsl(0,0%,52%)] font-normal">
                      {data.population.toLocaleString()}
                    </span>
                  </h3>
                  <h3 className="font-semibold mb-1">
                    Region:{" "}
                    <span className="text-[hsl(0,0%,52%)] font-normal">
                      {data.region}
                    </span>
                  </h3>
                  <h3 className="font-semibold mb-10">
                    Capital:{" "}
                    <span className="text-[hsl(0,0%,52%)] font-normal">
                      {data.capital}
                    </span>
                  </h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
