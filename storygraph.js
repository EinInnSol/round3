// pages/storygraph.js
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: '90802', engagements: 112 },
  { name: '90805', engagements: 78 },
  { name: '90813', engagements: 156 },
];

const quotes = [
  "“I didn't know I had tenant rights until you showed up.”",
  "“Nobody ever asks us what we think—thank you.”",
  "“This was the first time I felt heard in years.”"
];

export default function StoryGraphPage() {
  const [quoteIndex, setQuoteIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold mb-4">📊 StoryGraph™ Dashboard</h1>
      
      <p className="text-lg mb-6 text-gray-600">
        Real-time insights from community engagement campaigns. StoryGraph™ translates voices into data-driven action.
      </p>

      <div className="h-64 mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="engagements" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
        <h2 className="text-xl font-semibold mb-2">📍 Community Feedback</h2>
        <blockquote className="italic text-gray-700">"{quotes[quoteIndex]}"</blockquote>
        <button
          onClick={() => setQuoteIndex((quoteIndex + 1) % quotes.length)}
          className="mt-2 text-sm text-blue-500 underline"
        >
          Next Quote →
        </button>
      </div>

      <div className="mt-8 text-sm text-gray-500">
        Powered by EINHARJER INNOVATIVE SOLUTIONS • StoryGraph™ Analytics Engine
      </div>
    </div>
  );
}
