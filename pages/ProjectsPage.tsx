
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const projects = [
    { id: 1, category: 'Tuinaanleg', imageUrl: 'https://picsum.photos/seed/project1/500/500' },
    { id: 2, category: 'Onderhoud', imageUrl: 'https://picsum.photos/seed/project2/500/500' },
    { id: 3, category: 'Bestrating', imageUrl: 'https://picsum.photos/seed/project3/500/500' },
    { id: 4, category: 'Tuinaanleg', imageUrl: 'https://picsum.photos/seed/project4/500/500' },
    { id: 5, category: 'Onderhoud', imageUrl: 'https://picsum.photos/seed/project5/500/500' },
    { id: 6, category: 'Bestrating', imageUrl: 'https://picsum.photos/seed/project6/500/500' },
    { id: 7, category: 'Tuinaanleg', imageUrl: 'https://picsum.photos/seed/project7/500/500' },
    { id: 8, category: 'Onderhoud', imageUrl: 'https://picsum.photos/seed/project8/500/500' },
];

const Modal = ({ selectedImg, setSelectedImg }: { selectedImg: string | null; setSelectedImg: (img: string | null) => void }) => {
    if (!selectedImg) return null;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            setSelectedImg(null);
        }
    };

    return (
        <motion.div
            className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4"
            onClick={handleClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.img
                src={selectedImg}
                alt="Vergrote project weergave"
                className="max-w-full max-h-full rounded-lg shadow-2xl"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            />
             <motion.button 
                className="absolute top-4 right-4 text-white text-3xl"
                onClick={() => setSelectedImg(null)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                &times;
              </motion.button>
        </motion.div>
    );
};

const ProjectsPage: React.FC = () => {
    const [selectedImg, setSelectedImg] = useState<string | null>(null);

    return (
        <AnimatedPage>
            <div className="container mx-auto px-6 py-16 md:py-24">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">Onze Projecten</h1>
                    <p className="text-lg text-dark-green/80">
                        Een selectie van door ons gerealiseerde tuinen. Laat u inspireren door de mogelijkheden en ons vakmanschap.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
                            onClick={() => setSelectedImg(project.imageUrl)}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.03 }}
                        >
                            <img src={project.imageUrl} alt={project.category} className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-0 left-0 p-4">
                                <h3 className="text-white font-semibold text-lg">{project.category}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <AnimatePresence>
                {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
            </AnimatePresence>
        </AnimatedPage>
    );
};

export default ProjectsPage;
