export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <div className="flex items-center justify-center">
        <div className="svg-container">
          <h1 className="font-mono text-4xl sm:text-5xl">Hacked Ideas</h1>
        </div>
      </div>

      <div className="links-container flex flex-col sm:flex-row items-center justify-center mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
        <a href="" className="px-2">
          email
        </a>
        <span className="separator px-2 hidden sm:inline">|</span>
        <a href="https://github.com/svenplb/hacked-ideas" className="px-2">
          contribute
        </a>
        <span className="separator px-2 hidden sm:inline">|</span>
        <a href="https://discord.gg/AV2K9QtHub" className="px-2">
          discord
        </a>
      </div>
    </main>
  );
}

