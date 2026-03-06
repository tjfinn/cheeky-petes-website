import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="bg-[#4D0F00] py-16 md:py-24 px-6 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-haggler text-cream text-4xl md:text-5xl lg:text-6xl font-bold">
            TERMS
          </h1>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="space-y-6 text-brown text-base md:text-lg leading-relaxed">
          <p>Standard website terms apply. Content belongs to Cheeky Pete&apos;s. Governing law: United Kingdom.</p>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-block font-haggler text-brown text-sm font-bold uppercase tracking-wide bg-[#FF6F98] hover:bg-[#ff5a87] px-8 py-4 rounded-lg transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
