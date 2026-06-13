import Link from 'next/link';

export const metadata = {
  title: 'Paperclip Operator Pack',
  description: 'The complete Paperclip Operator Pack. 25 AGENTS.md files + 10 routine templates.',
  openGraph: {
    title: 'Paperclip Operator Pack',
    description: 'The complete Paperclip Operator Pack. 25 AGENTS.md files + 10 routine templates.',
    images: ['/opengraph-image.png'],
  },
}

export default function OperatorPackLanding() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6">
          {/* TODO: copy */} One-line value prop placeholder
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          {/* TODO: copy */} Subheadline placeholder explaining exactly what this does and why it saves time.
        </p>
        <div className="flex flex-col items-center gap-4">
          <p className="text-2xl font-bold">$TODO {/* TODO: final price */}</p>
          <a
            href="#stripe-todo" 
            className="inline-block bg-blue-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
          >
            Get the Operator Pack
          </a>
          <p className="text-sm text-gray-500 mt-2">Instant download after payment</p>
        </div>
      </section>

      {/* What&apos;s Inside */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What&apos;s Inside</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 border-b pb-2">The Roster</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>25 meticulously crafted AGENTS.md files</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>10 Routine Templates for automated workflows</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold">✓</span>
                  <span>Organized ZIP folder layout</span>
                </li>
              </ul>
              
              <h4 className="font-bold mt-8 mb-3 text-gray-700">Roles Covered Include:</h4>
              <div className="flex flex-wrap gap-2">
                {["CEO", "CTO", "Frontend Lead", "Backend Lead", "React Engineer", "DevOps Engineer", "Distributed Systems Engineer", "QA Engineer"].map(role => (
                  <span key={role} className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium border border-gray-200">
                    {role}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner flex items-center justify-center">
              <div className="text-center text-gray-400">
                <svg className="w-24 h-24 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
                <p className="font-medium">[ Visual Placeholder: Folder Structure ]</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
        <div className="space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-bold mb-2">{/* TODO: final copy */} FAQ Question {i}?</h3>
              <p className="text-gray-600">{/* TODO: final copy */} This is the placeholder answer for question {i}. It will explain the details clearly and concisely.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12 text-center">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg">
            <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
            <span className="text-sm font-medium text-gray-300">Guaranteed safe & secure checkout</span>
          </div>
          <p>© 2026 Fullstack Forge. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
