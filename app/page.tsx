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
        <Image src="/images/design-mode/Logo_Solido_WT.png" alt="Logo" width={200} height={100} />
        <p>Copyright © 2023</p>
      </footer>
    </div>
  )
}

export default HomePage
