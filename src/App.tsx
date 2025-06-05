
import React from 'react';
import { Scale as Scalpel } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] text-[#2a2a2a] font-[IBM Plex Sans, sans-serif] antialiased">
      <main className="max-w-screen-lg mx-auto px-4 md:px-6 py-12 md:py-16">

        {/* Header */}
        <header className="max-w-[700px] mx-auto mb-16">
          <div className="flex items-center mb-4">
            <Scalpel className="text-[#8b0000] w-8 h-8 mr-3" />
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Copy Autopsy™</h1>
          </div>
          <p className="text-xl md:text-2xl font-medium mt-3">
            If your SaaS landing isn’t converting, you’re bleeding money — and don’t even know where the cut is.
          </p>
          <p className="text-lg mt-2">
            In 48h or less, I’ll send you a surgical report with the 3 biggest conversion leaks — and how to fix them. No calls. No fluff. Flat $250.
          </p>
          <div className="mt-6">
            <a href="https://buy.stripe.com/dRm3cxcs6b51alvaCN4F200" target="_blank" rel="noopener noreferrer"><button className="bg-[#8b0000] hover:bg-[#700000] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 focus:outline-none">
              Run My Autopsy
            </button></a>
          </div>
        </header>

        {/* Testimonials */}
        <section className="space-y-8 max-w-[700px] mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="italic mb-4">"We were burning $7k/mo on paid traffic and barely breaking even. Tony showed us exactly where the page was leaking. Two weeks after implementing his autopsy suggestions, our demo conversions jumped by 41%."</p>
            <p className="font-bold">Mark Peterson</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="italic mb-4">"We thought our messaging was clear — until Tony dissected our page. The report didn’t just show what was broken, it told us exactly how to fix it. We reworked the copy and MRR went up $3k in 30 days."</p>
            <p className="font-bold">Anna Liu</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <p className="italic mb-4">"This wasn’t another vague teardown. Tony's autopsy nailed the disconnect between our ad and our page. We stopped guessing and finally knew where to focus. Clarity = conversions."</p>
            <p className="font-bold">Derek Walker</p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="max-w-[700px] mx-auto mt-16 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">You’re spending over $5,000/month on traffic…</h2>
          <p className="mb-4">But if your page is leaking conversions, that budget isn’t buying growth — it’s buying silence.</p>
          <p className="mb-4">For $250, you’ll know exactly where your funnel is failing — and how to fix it.</p>
          <p className="mb-4">This isn’t a rewrite. It’s the map. You fix it, or bring me in to operate.</p>
          <p className="font-semibold mt-6 mb-2">If I don’t show you exactly where your copy is blocking conversions, you don’t pay.</p>
          <p className="mb-6 italic">Simple as that. This isn’t a guess. It’s a diagnosis.</p>
          <a href="https://buy.stripe.com/dRm3cxcs6b51alvaCN4F200" target="_blank" rel="noopener noreferrer"><button className="bg-[#8b0000] hover:bg-[#700000] text-white font-medium py-3 px-8 rounded-md transition-colors duration-300 focus:outline-none">
            Request Diagnosis
          </button></a>
        </section>

        {/* Footer */}
        <footer className="max-w-[700px] mx-auto mt-16 pt-8 border-t border-gray-300 text-sm text-gray-600 text-center">
          <p>© {new Date().getFullYear()} The Shendley Effect. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
