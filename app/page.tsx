
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <div className="svg-container">
          <h1 className=" text-5xl font-mono">Hacked Ideas</h1>
        </div>
      </div>
      <div className="links-container flex items-center justify-center mt-4">
        <a href="" className="px-2">
          email
        </a>
        <span className="separator px-2">|</span>
        <a href="https://github.com/svenplb/hacked-ideas" className="px-2">
          contribute
        </a>
        <span className="separator px-2">|</span>
        <a href="https://discord.gg/AV2K9QtHub" className="px-2">
          discord
        </a>
      </div>
    </main>
  );
}
