import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      year: "2018 - 2022",
      description: "Relevant coursework in algorithms, data structures, and web development."
    },
    // Add more education items
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer with a strong foundation in web technologies
            and a keen eye for creating user-friendly applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-4">My Journey</h3>
            <p className="text-gray-600 mb-6">
              With over X years of experience in web development, I've worked on various
              projects ranging from small business websites to large-scale applications.
              I'm passionate about creating clean, efficient, and user-friendly solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-secondary mb-4">Education</h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="text-lg font-semibold text-secondary">{edu.school}</h4>
                  <p className="text-primary">{edu.degree}</p>
                  <p className="text-gray-500 text-sm">{edu.year}</p>
                  <p className="text-gray-600 mt-1">{edu.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 