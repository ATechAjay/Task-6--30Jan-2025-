"use client";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
import Mdx from "./mdx/mdx-page.mdx";

// function CustomH1({ children }: CustomH1Props) {

function CustomH1({ children }: { children: React.ReactNode }) {
  return <h1 style={{ color: "red", fontSize: "68px" }}>{children}</h1>;
}

const overrideComponents = {
  h1: CustomH1,
};

export default function Home() {
  return (
    <main className="flex flex-col gap-3">
      <h1>Hello world!</h1>
      <Link
        href="/users"
        className="p-2 bg-green-500 rounded-sm inline-block max-w-44 text-center font-bold"
      >
        Fetching user data!
      </Link>
      <ProductCard />
      <Mdx components={overrideComponents} />
    </main>
  );
}
