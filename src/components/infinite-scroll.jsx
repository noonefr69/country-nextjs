"use client"

import Image from "next/image";
import { useEffect } from "react";
import { ImSpinner6 } from "react-icons/im";
import { useInView } from "react-intersection-observer";

export default function LoadMore() {
    const{ref, inView} = useInView();

    useEffect(() => {
        if(inView) {
            
        }
    }, [inView])

  return (
    <>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <ImSpinner6 className="object-contain text-6xl animate-spin" />
        </div>
      </section>
    </>
  );
}
