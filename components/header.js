import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-pink-300 text-black py-4 px-8 flex justify-between items-center">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">First React Web</h1>
        <nav>
          <ul className="flex gap-6">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-700">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-700">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
