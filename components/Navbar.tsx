
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';

const LeafIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-olive-green" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.01 5.313a.75.75 0 011.054.219l4.5 6.5a.75.75 0 01-1.278.882L10 7.228l-3.286 5.686a.75.75 0 01-1.278-.882l4.5-6.5a.75.75 0 01.074-.22z" clipRule="evenodd" transform="rotate(-45 10 10)" />
    <path d="M10 2c-4.418 0-8 3.582-8 8s3.582 8 8 8c.28 0 .555-.015.827-.042A6.5 6.5 0 013.5 10a6.5 6.5 0 016.458-6.458A7.965 7.965 0 0010 2z" />
  </svg>
);


const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/over-ons', label: 'Over Ons' },
  { path: '/diensten', label: 'Diensten' },
  { path: '/projecten', label: 'Projecten' },
  { path: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeLinkStyle = {
    color: '#5F6F52',
    fontWeight: '500',
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-beige/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <LeafIcon />
          <span className="font-serif text-2xl font-bold text-dark-green">GroenRijk</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-dark-green hover:text-olive-green transition-colors duration-300"
              style={({ isActive }) => (isActive ? activeLinkStyle : {})}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
        <div className="hidden md:block">
            <Link to="/contact">
                <Button>Offerte aanvragen</Button>
            </Link>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-dark-green focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-beige"
          >
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center space-y-4 py-4"
            >
              {navLinks.map((link) => (
                <motion.div variants={menuItemVariants} key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-dark-green text-lg hover:text-olive-green transition-colors duration-300"
                    style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div variants={menuItemVariants}>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <Button>Offerte aanvragen</Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
