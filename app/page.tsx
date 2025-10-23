import Image from "next/image"

const HomePage = () => {
  return (
    <div>
      {/* Header section */}
      <header>
        <h1>Welcome to Our Website</h1>
      </header>

      {/* Main content section */}
      <main>
        <p>This is the main content of the page.</p>
      </main>

      {/* Footer section */}
      <footer>
        <Image
          src="/images/design-mode/Logo_Solido_WT.png"
          alt="Obid.io"
          width={150}
          height={50}
          className="h-12 w-auto mb-4"
        />
        <p>Copyright © 2023</p>
      </footer>
    </div>
  )
}

export default HomePage
