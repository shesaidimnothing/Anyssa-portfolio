import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full max-w-7xl mx-auto px-6 py-16 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Company Info */}
        <div className="space-y-4">
          <div className="bg-black text-white px-4 py-2 rounded text-sm font-medium inline-block">
            ✨ Anyssa ✨
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Creative designer crafting stunning visuals and content that tell your story beautifully. 🎨✨
          </p>
          {/* Social Media Links */}
          <div className="flex space-x-4 pt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-black transition-colors text-sm">
              Instagram
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-black transition-colors text-sm">
              TikTok
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-black transition-colors text-sm">
              YouTube
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-black transition-colors text-sm">
              Facebook
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-black transition-colors text-sm">
              X
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-black">Navigation</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/overview" className="text-sm text-gray-600 hover:text-black transition-colors">
              About
            </Link>
            <Link href="/services" className="text-sm text-gray-600 hover:text-black transition-colors">
              Services
            </Link>
            <Link href="/bold-labs" className="text-sm text-gray-600 hover:text-black transition-colors">
              Portfolio
            </Link>
            <Link href="/bold-roast" className="text-sm text-gray-600 hover:text-black transition-colors">
              Blog
            </Link>
            <Link href="/inquiries" className="text-sm text-gray-600 hover:text-black transition-colors">
              Inquiries
            </Link>
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-black">Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <p>anyssa.bl4@gmail.com</p>
            <p>Available for freelance projects</p>
            <p>Creative Designer</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-gray-200 space-y-4 sm:space-y-0">
        <p className="text-xs text-gray-500">
          © {currentYear} Anyssa. All rights reserved.
        </p>
        <div className="flex space-x-6 text-xs text-gray-500">
          <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
