import { Cards } from "@/components";

export default function Home() {
  return (
    <main
      className={`flex flex-col w-full h-screen justify-center items-center gap-5`}
    >
      <h1 className="text-6xl text-blue-600">Time Eagles</h1>

      <aside className="flex justify-center items-center gap-5">
        <Cards description="Danilo" />
        <Cards description="Vini" />
        <Cards description="Luan" />
        <Cards description="Bia" />
        <Cards description="Andressa" />
        <Cards description="Bruno" />
        <Cards description="Thales" />
      </aside>
    </main>
  );
}
