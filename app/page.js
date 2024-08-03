export default function Home() {
  return (
      <main>
          <div>
              <h1 className="ml-5 mt-3 text-2xl font-bold font-sans">Vicons are icons from this generator</h1>
              <p className="ml-5 mt-3 text-m font-sans">Please enter any string for the seed and a number fo the blur
                  size.</p>
              <div className="flex-col w-full ">
                  <input className="h-6 w-1/3 p-4 rounded-xl m-5 mr-8 bg-ne"/>
                  <input className="h-6 w-1/4 p-4 rounded-xl m-5 ml-8"/>
                  <input className="h-6 w-1/4 p-4 rounded-xl m-5 ml-8"/>
              </div>
              <button className="h-6 w-1/3 p-4 rounded-xl m-5 ml-8 bg-[#2b2a33]">d</button>
          </div>
          <div>
          </div>
      </main>
  );
}
