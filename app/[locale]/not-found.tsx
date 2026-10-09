import Link from "next/link";

export default function NotFound() {
  return <main className="not-found"><p className="eyebrow">H&C Care</p><h1>Page not found</h1><Link className="button button-dark" href="/en/">Home</Link></main>;
}
