import Link from "../../../node_modules/next/link";
import { Button } from "../ui/button";
import { ModeToggle } from "./ModeToggle";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-center py-5 gap-5">
        <Button>
          <Link href="/">Home</Link>
        </Button>
        <Button>
          <Link href="/intro">Intro</Link>
        </Button>
        <Button>
          <Link href="/blog">Blog</Link>
        </Button>
        <ModeToggle />
      </ul>
    </nav>
  );
}
