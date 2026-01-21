
import React from 'react';
import { Link } from 'react-router-dom';

const LeafIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-beige" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.01 5.313a.75.75 0 011.054.219l4.5 6.5a.75.75 0 01-1.278.882L10 7.228l-3.286 5.686a.75.75 0 01-1.278-.882l4.5-6.5a.75.75 0 01.074-.22z" clipRule="evenodd" transform="rotate(-45 10 10)" />
      <path d="M10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8c.28 0 .555-.015.827-.042A6.5 6.5 0 013.5 10a6.5 6.5 0 016.458-6.458A7.965 7.965 0 0010 2z" />
    </svg>
);
  
const SocialIcon = ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-beige hover:text-light-beige transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-green text-beige">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3">
              <LeafIcon />
              <h2 className="text-2xl font-serif font-bold">GroenRijk</h2>
            </div>
            <p className="mt-4 max-w-md text-beige/80">
              Uw droomtuin, ons vakmanschap. Wij transformeren buitenruimtes met passie, precisie en een oog voor duurzame schoonheid.
            </p>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Menu</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/" className="hover:text-light-beige transition-colors duration-300">Home</Link></li>
              <li><Link to="/over-ons" className="hover:text-light-beige transition-colors duration-300">Over Ons</Link></li>
              <li><Link to="/diensten" className="hover:text-light-beige transition-colors duration-300">Diensten</Link></li>
              <li><Link to="/projecten" className="hover:text-light-beige transition-colors duration-300">Projecten</Link></li>
              <li><Link to="/contact" className="hover:text-light-beige transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-2 text-beige/80">
              <li>Tuinlaan 123, 1234 AB</li>
              <li>Groenstad, Nederland</li>
              <li className="pt-2"><a href="mailto:info@groenrijk.nl" className="hover:text-light-beige">info@groenrijk.nl</a></li>
              <li><a href="tel:+31612345678" className="hover:text-light-beige">+31 6 1234 5678</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-beige/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-beige/60">&copy; {new Date().getFullYear()} GroenRijk. Alle rechten voorbehouden.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
            </SocialIcon>
            <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm6.406-11.845a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" clipRule="evenodd" /></svg>
            </SocialIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
