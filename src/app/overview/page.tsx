import PageLayout from '@/components/PageLayout';

export default function Overview() {
  return (
    <PageLayout>
      <main className="w-full max-w-7xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {/* Page Title */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light leading-tight text-black mb-8">
              About Me
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Hi, I&apos;m Anyssa! A passionate creative designer who brings ideas to life 
              through stunning visuals and engaging content across multiple platforms.
            </p>
          </div>

          {/* Company Story */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-light mb-6 text-black">My Journey</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  My passion for design started with a simple belief: every brand has a unique 
                  story worth telling beautifully. I specialize in creating visual experiences 
                  that not only look stunning but also connect authentically with audiences 
                  across digital platforms.
                </p>
                <p>
                  From brand identities to social media campaigns and video content, I bring 
                  strategic thinking and creative flair to every project, ensuring each piece 
                  of work makes a lasting impression.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-light mb-6 text-black">My Approach</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  I believe great design happens when creativity meets strategy. My process 
                  involves understanding your brand&apos;s essence, audience, and goals before 
                  crafting visuals that truly represent who you are and what you stand for.
                </p>
                <p>
                  Using tools like Illustrator, CapCut, Canva, iMovie, and Notion, I create 
                  comprehensive design solutions that work seamlessly across all touchpoints, 
                  from social media to marketing materials.
                </p>
              </div>
            </div>
          </section>

          {/* Creative Tools & Skills */}
          <section>
            <h2 className="text-3xl font-light mb-12 text-black">My Creative Toolkit</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-black">Design Tools</h3>
                <div className="text-gray-600 space-y-1">
                  <p>• Adobe Illustrator</p>
                  <p>• Canva Pro</p>
                  <p>• Creative Suite</p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-black">Video & Motion</h3>
                <div className="text-gray-600 space-y-1">
                  <p>• CapCut Pro</p>
                  <p>• iMovie</p>
                  <p>• Motion Graphics</p>
                </div>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-black">Organization</h3>
                <div className="text-gray-600 space-y-1">
                  <p>• Notion</p>
                  <p>• Project Management</p>
                  <p>• Content Planning</p>
                </div>
              </div>
            </div>
          </section>

          {/* Social Platforms */}
          <section>
            <h2 className="text-3xl font-light mb-12 text-black">Where You Can Find Me</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">📸</div>
                <div className="text-sm font-medium text-black">Instagram</div>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
                 className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🎵</div>
                <div className="text-sm font-medium text-black">TikTok</div>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
                 className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">▶️</div>
                <div className="text-sm font-medium text-black">YouTube</div>
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">👥</div>
                <div className="text-sm font-medium text-black">Facebook</div>
              </a>
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" 
                 className="text-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow">
                <div className="text-2xl mb-2">🐦</div>
                <div className="text-sm font-medium text-black">X</div>
              </a>
            </div>
          </section>
        </div>
      </main>
    </PageLayout>
  );
}
