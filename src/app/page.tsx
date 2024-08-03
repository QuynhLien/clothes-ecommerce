import Carousel from "../components/carousel";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Carousel />
      {[1, 2, 3].map((item) => (
        <div key={item} className="w-full">
          <div className="h-[300px] m-5 p-10 bg-lime-50">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </div>
          <div className="h-[300px] m-5 p-10 bg-red-200">
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2>
          </div>
        </div>
      ))}
    </main>
  );
}
