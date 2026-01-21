
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import AnimatedSection from '../components/AnimatedSection';

const teamMembers = [
    { name: 'Jan van der Laan', role: 'Oprichter & Tuinarchitect', image: 'https://picsum.photos/seed/team1/400/400' },
    { name: 'Elise Groen', role: 'Hoofd Hovenier', image: 'https://picsum.photos/seed/team2/400/400' },
    { name: 'Mark de Wit', role: 'Specialist Onderhoud', image: 'https://picsum.photos/seed/team3/400/400' },
];

const AboutPage: React.FC = () => {
    return (
        <AnimatedPage>
            <div className="container mx-auto px-6 py-16 md:py-24">
                <AnimatedSection>
                    <div className="text-center max-w-3xl mx-auto">
                        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Onze Passie voor Groen</h1>
                        <p className="text-lg text-dark-green/80">
                            GroenRijk is ontstaan uit een diepgewortelde liefde voor de natuur en de overtuiging dat elke buitenruimte het potentieel heeft om een plek van rust, schoonheid en inspiratie te zijn.
                        </p>
                    </div>
                </AnimatedSection>

                <AnimatedSection className="my-16 md:my-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <img src="https://picsum.photos/seed/aboutus/800/600" alt="Team aan het werk in een tuin" className="rounded-lg shadow-xl w-full h-auto object-cover"/>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="space-y-6"
                        >
                            <h2 className="font-serif text-3xl font-bold">Het Verhaal van GroenRijk</h2>
                            <p className="text-dark-green/80">
                                Wat begon als een eenmanszaak, gedreven door de passie van oprichter Jan van der Laan, is uitgegroeid tot een gerespecteerd team van groenexperts. Onze filosofie is simpel: luisteren naar de wensen van de klant en deze vertalen naar een levend, ademend tuinontwerp dat seizoenen lang meegaat.
                            </p>
                            <p className="text-dark-green/80">
                                Wij combineren traditioneel vakmanschap met moderne, duurzame technieken. Of het nu gaat om het creëren van een strakke, moderne stadstuin of een weelderige, landelijke oase, ons doel is altijd hetzelfde: het overtreffen van uw verwachtingen.
                            </p>
                        </motion.div>
                    </div>
                </AnimatedSection>
                
                <AnimatedSection className="py-16 md:py-24 bg-beige rounded-lg">
                    <div className="text-center">
                        <h2 className="font-serif text-4xl font-bold mb-12">Ontmoet Ons Team</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
                            {teamMembers.map((member, index) => (
                                <motion.div 
                                    key={index}
                                    className="flex flex-col items-center"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                >
                                    <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full object-cover shadow-lg mb-4"/>
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p className="text-olive-green">{member.role}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </AnimatedPage>
    );
};

export default AboutPage;
