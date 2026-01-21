
import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';
import Button from '../components/Button';
import { motion } from 'framer-motion';

const ContactPage: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Hier zou de logica voor het versturen van het formulier komen
        console.log('Formulier ingediend:', formData);
        setIsSubmitted(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <AnimatedPage>
            <div className="container mx-auto px-6 py-16 md:py-24">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Neem Contact Op</h1>
                        <p className="text-lg text-dark-green/80">
                            Heeft u een vraag of wilt u een vrijblijvende offerte aanvragen? We horen graag van u.
                        </p>
                    </div>
                </AnimatedSection>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <motion.div 
                        className="lg:col-span-2 bg-white p-8 md:p-12 rounded-lg shadow-lg"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="font-serif text-3xl font-bold mb-8">Stuur ons een bericht</h2>
                        {isSubmitted ? (
                             <motion.div 
                                className="bg-olive-green/10 text-olive-green p-4 rounded-md text-center"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                             >
                                <p className="font-semibold">Bedankt voor uw bericht!</p>
                                <p>We nemen zo spoedig mogelijk contact met u op.</p>
                             </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-dark-green/80 mb-1">Naam</label>
                                        <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-olive-green focus:border-olive-green transition" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-dark-green/80 mb-1">E-mail</label>
                                        <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-olive-green focus:border-olive-green transition" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-dark-green/80 mb-1">Telefoon (optioneel)</label>
                                    <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-olive-green focus:border-olive-green transition" />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-green/80 mb-1">Bericht</label>
                                    <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-olive-green focus:border-olive-green transition"></textarea>
                                </div>
                                <div>
                                    <Button type="submit">Verstuur</Button>
                                </div>
                            </form>
                        )}
                    </motion.div>

                    <motion.div 
                        className="space-y-8"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="bg-beige p-8 rounded-lg shadow-md">
                            <h3 className="font-serif text-2xl font-bold mb-4">Contactgegevens</h3>
                            <ul className="space-y-2 text-dark-green/80">
                                <li className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-olive-green" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>
                                    <span>Tuinlaan 123, 1234 AB Groenstad</span>
                                </li>
                                <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-olive-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <a href="mailto:info@groenrijk.nl" className="hover:text-olive-green">info@groenrijk.nl</a>
                                </li>
                                <li className="flex items-center gap-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-olive-green" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <a href="tel:+31612345678" className="hover:text-olive-green">+31 6 1234 5678</a>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-gray-300 h-64 rounded-lg shadow-md flex items-center justify-center text-gray-500">
                           Google Maps Placeholder
                        </div>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default ContactPage;
