
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const services = [
    { icon: '🌿', title: 'Tuinonderhoud', description: 'Periodiek en eenmalig onderhoud om uw tuin het hele jaar door in topconditie te houden.' },
    { icon: '🌱', title: 'Tuinaanleg', description: 'Van ontwerp tot realisatie. Wij creëren de tuin van uw dromen, volledig op maat.' },
    { icon: '✂️', title: 'Snoeien & Verzorging', description: 'Vakkundig snoeien van heggen, bomen en struiken voor gezonde groei en een strak uiterlijk.' },
    { icon: '🚜', title: 'Gras & Gazon', description: 'Maaien, verticuteren, bemesten en inzaaien voor een perfect groen en dicht gazon.' },
    { icon: '🧱', title: 'Terrassen & Opritten', description: 'Aanleg van duurzame en sfeervolle bestrating, van terrassen tot complete opritten.' },
    // FIX: Replaced single quotes with double quotes to handle the apostrophe in "'s avonds".
    { icon: '💡', title: 'Tuinverlichting', description: "Installatie van sfeervolle en functionele verlichting om ook 's avonds van uw tuin te genieten." }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1
    }
};

const ServiceCard = ({ icon, title, description }: { icon: string; title: string; description: string }) => (
    <motion.div
        variants={itemVariants}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
    >
        <div className="text-4xl mb-4">{icon}</div>
        <h3 className="text-2xl font-serif font-bold mb-3">{title}</h3>
        <p className="text-dark-green/80 flex-grow">{description}</p>
    </motion.div>
);

const ServicesPage: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Onze Diensten</h1>
                    <p className="text-lg text-dark-green/80">
                        Wij bieden een compleet pakket aan diensten om uw tuin te creëren, te transformeren en te onderhouden. Kwaliteit en zorg staan bij elke taak voorop.
                    </p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {services.map((service, index) => (
                        <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
                    ))}
                </motion.div>
            </div>
        </AnimatedPage>
    );
};

export default ServicesPage;