
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

const values = [
    { icon: '🌿', title: 'Kwaliteit', description: 'Wij gebruiken enkel de beste materialen en planten voor een duurzaam en prachtig resultaat.' },
    { icon: '🤝', title: 'Betrouwbaarheid', description: 'Afspraak is afspraak. U kunt rekenen op onze punctualiteit en heldere communicatie.' },
    { icon: ' expertise', title: 'Ervaring', description: 'Met jarenlange ervaring en vakkennis realiseren wij elke tuindroom, groot of klein.' },
];

const testimonials = [
    { quote: 'GroenRijk heeft onze verwilderde tuin omgetoverd tot een paradijs. Professioneel, vriendelijk en het eindresultaat overtrof al onze verwachtingen!', name: 'Familie de Vries', city: 'Utrecht' },
    { quote: 'Eindelijk een tuinman die echt meedenkt. Het periodieke onderhoud is perfect geregeld en onze tuin heeft er nog nooit zo goed uitgezien.', name: 'Dhr. Janssen', city: 'Amsterdam' },
];

const services = [
    { name: 'Tuinonderhoud', image: 'https://picsum.photos/seed/garden1/400/300' },
    { name: 'Tuinaanleg', image: 'https://picsum.photos/seed/garden2/400/300' },
    { name: 'Snoeien', image: 'https://picsum.photos/seed/garden3/400/300' },
];

const HomePage: React.FC = () => {
    return (
        <AnimatedPage>
            {/* Hero Section */}
            <header className="relative h-[80vh] min-h-[500px] flex items-center justify-center text-center text-white">
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <img src="https://picsum.photos/seed/hero/1920/1080" alt="Prachtige, goed onderhouden tuin" className="absolute inset-0 w-full h-full object-cover"/>
                <div className="relative z-20 container mx-auto px-6">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-serif text-4xl md:text-6xl font-bold mb-4"
                    >
                        Uw Droomtuin, Ons Vakmanschap
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-lg md:text-xl max-w-2xl mx-auto mb-8"
                    >
                        Professioneel tuinonderhoud en -aanleg voor particulieren en bedrijven. Wij brengen uw visie tot leven met passie en precisie.
                    </motion.p>
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link to="/diensten"><Button variant="primary" className="bg-olive-green text-white hover:bg-dark-green">Bekijk onze diensten</Button></Link>
                        <Link to="/contact"><Button variant="secondary" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-dark-green">Neem contact op</Button></Link>
                    </motion.div>
                </div>
            </header>

            {/* Values Section */}
            <AnimatedSection className="py-20 bg-light-beige">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12">Waar Wij Voor Staan</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {values.map((value, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="flex flex-col items-center"
                            >
                                <div className="text-4xl mb-4">{value.icon}</div>
                                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                                <p className="text-dark-green/80">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Services Preview */}
            <AnimatedSection className="py-20 bg-beige">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Onze Expertise</h2>
                    <p className="max-w-2xl mx-auto text-dark-green/80 mb-12">Van eenmalig onderhoud tot complete tuintransformaties, wij staan voor u klaar.</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                             <motion.div 
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative rounded-lg overflow-hidden shadow-lg group"
                             >
                                <img src={service.image} alt={service.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                                    <h3 className="text-white text-2xl font-serif font-bold">{service.name}</h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <div className="mt-12">
                        <Link to="/diensten"><Button>Alle diensten</Button></Link>
                    </div>
                </div>
            </AnimatedSection>


            {/* Testimonials Section */}
            <AnimatedSection className="py-20 bg-light-beige">
                <div className="container mx-auto px-6">
                    <h2 className="font-serif text-3xl md:text-4xl font-bold text-center mb-12">Wat Onze Klanten Zeggen</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="bg-white p-8 rounded-lg shadow-md border-l-4 border-olive-green"
                            >
                                <p className="text-dark-green/80 italic mb-6">"{testimonial.quote}"</p>
                                <p className="font-semibold">{testimonial.name}</p>
                                <p className="text-sm text-dark-green/60">{testimonial.city}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </AnimatedPage>
    );
};

export default HomePage;
