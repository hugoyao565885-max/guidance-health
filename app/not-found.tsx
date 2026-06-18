import Link from "next/link";
import { brand } from "../lib/site";

export default function NotFound() {
  return (
    <main className="site-body not-found">
      <p className="eyebrow">Page not found</p>
      <h1>{brand.name}</h1>
      <p>The page you requested is not available.</p>
      <Link href="/en/" className="button button-dark">
        Return to English site
      </Link>
    </main>
  );
}
