import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-bg-primary flex items-center justify-center">
      <div className="text-center section-container">
        <h1 className="font-[family-name:var(--font-display)] text-6xl font-bold text-text-primary mb-4">
          404
        </h1>
        <p className="text-text-muted mb-8">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-white font-semibold hover:opacity-90 transition-opacity"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
