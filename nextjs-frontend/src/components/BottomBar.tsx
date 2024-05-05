import Link from "next/link";

const BottomBar = () => {
  return (
    <section className="border-t-2 w-full space-y-5 pt-8 mt-44  lg:space-y-0 flex flex-col  lg:flex-row container items-start  justify-between my-2 py-6 md:py-3">
      <div className="justify-right ">
        <p className="text-md text-muted-foreground w-full ">
          Copyright © 2024
        </p>
      </div>
    </section>
  );
};

export default BottomBar;
