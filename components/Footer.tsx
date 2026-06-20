import Link from 'next/link'
import { Mail, Phone, MapPin, MessageCircle, Share2, Send } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary-tint border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-white font-bold text-xl">L</span>
              </div>
              <span className="font-display font-bold text-lg text-ink">
                La English Atelier
              </span>
            </div>
            <p className="text-sm text-ink-muted">
              Making Learners Globally Ready
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-ink mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-ink-muted">
              <li><a href="#programs" className="hover:text-primary transition-colors">Programs</a></li>
              <li><a href="#why-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
              <li><a href="#outcomes" className="hover:text-primary transition-colors">Learning Outcomes</a></li>
              <li><Link href="/enroll" className="hover:text-primary transition-colors">Enroll Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-ink mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-ink-muted">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+91 9335044403" className="hover:text-primary transition-colors">
                  +91 9335044403
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:laenglishatelier@gmail.com" className="hover:text-primary transition-colors">
                  laenglishatelier@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-display font-semibold text-ink mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a href="https://www.facebook.com/share/1FuHf4ganM/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Share2 className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/laenglishatelier?igsh=N3hmM2RtYmhsN2tx" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/rashida-zaidi-27184761?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-ink-muted">
          <p>© 2026 La English Atelier. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}