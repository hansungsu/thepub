import Link from "../../../node_modules/next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center py-5 gap-5">
        <li>
          <Link
            className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            href="/intro"
          >
            Intro
          </Link>
        </li>
        <li>
          <Link
            className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900"
            href="/handmadeblog"
          >
            handmadeblog
          </Link>
        </li>
      </ul>
    </nav>
  );
}
