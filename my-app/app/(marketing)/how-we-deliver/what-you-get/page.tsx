export default function WhatYouGetPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">What You Get</h1>
      <p className="mb-8">When you work with Smart Flex Group, you receive:</p>
      
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Tracking Number + Updates</h2>
          <p>Stay informed every step of the way with real-time tracking and updates...</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">One Ready-to-Approve Quote</h2>
          <p>Receive a single, comprehensive quote that's ready for your approval...</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Accept / Decline in Portal</h2>
          <p>Easily accept or decline quotes directly in your portal with one click...</p>
        </section>
      </div>
    </div>
  );
}

