import React from 'react';
import { PROGRAM_PROJECTS } from '../assets/assets'; // Make sure to define this

const Programs = () => {
  return (
    <section className="max-w-7xl mx-auto border-b-2" id="Programs">
      <div className="mb-20">
        <h2 className="text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12">
         New Programs
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {PROGRAM_PROJECTS.map((program) => (
            <div
              key={program.id}
              className="group relative overflow-hidden rounded-3xl mx-4"
            >
              <img
                src={program.image}
                alt={program.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div
                className="absolute inset-0 flex flex-col items-center justify-center
              opacity-0 backdrop-blur-lg transition-opacity duration-500 group-hover:opacity-100"
              >
                <h3 className="mb-2 text-xl font-medium">{program.name}</h3>
                <p className="mb-12 p-4">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
