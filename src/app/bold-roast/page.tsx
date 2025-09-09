import PageLayout from '@/components/PageLayout';

export default function Blog() {
  // const insights = [
  // ];

  const topics = [
    'Canva Tutorials',
    'CapCut Tips',
    'Brand Design',
    'Social Media Strategy',
    'Creative Process',
    'Tool Comparisons',
    'Client Work',
    'Design Inspiration'
  ];

  return (
    <PageLayout>
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Page Title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black mb-8">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Behind-the-scenes insights into my creative process, tool tutorials, and practical tips 
              for creating stunning designs with Canva, CapCut, and Illustrator.
            </p>
          </div>

          {/* About the Blog */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-6 text-black">Why I Share</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I believe in sharing knowledge and helping other creatives grow. Through my blog, 
                  I break down complex design processes, share honest tool reviews, and give you 
                  a behind-the-scenes look at how I create campaigns like the ABSOLOGY project.
                </p>
                <p>
                  From Canva tricks to CapCut workflows, I share the practical insights that 
                  have helped me create successful campaigns for clients across different industries.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-6 text-black">My Approach</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I focus on practical, actionable content that you can implement immediately. 
                  No fluff, just real techniques and honest insights about what works (and what doesn&apos;t) 
                  in the world of modern design.
                </p>
                <p>
                  Whether I&apos;m walking through a complete campaign creation or comparing design tools, 
                  my goal is to help you create better work more efficiently.
                </p>
              </div>
            </div>
          </section>

          {/* Topics */}
          <section>
            <h2 className="text-3xl font-light mb-12 text-black">What We Cover</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {topics.map((topic, index) => (
                <div key={index} className="bg-white p-4 rounded-lg text-center">
                  <span className="text-sm text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Subscribe CTA */}
          <section className="text-center py-16 bg-white rounded-lg">
            <h2 className="text-3xl font-light mb-6 text-black">
              Join the Creative Community
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get my latest tutorials, tool reviews, and behind-the-scenes insights delivered to your inbox. 
              Join other creatives who are elevating their design game!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address"
                className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-black"
              />
              <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
