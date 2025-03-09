"use client";

import { useEffect } from "react";
import { ImSpinner6 } from "react-icons/im";
import { useInView } from "react-intersection-observer";

export default function LoadMore({ loadMore, hasMoreItems }) {
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      loadMore();
    }
  }, [inView, loadMore]);

  return (
    <>
      {hasMoreItems ? (
        <section className="flex justify-center items-center w-full">
          <div ref={ref}>
            <ImSpinner6 className="object-contain text-6xl animate-spin" />
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
