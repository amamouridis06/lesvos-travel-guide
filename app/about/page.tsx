export default function AboutPage() {
  return (
    <main className="bg-white text-black pb-20">
      
      {/* HERO SECTION */}
      <section 
        className="w-full h-[50vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/lesvos.jpg')` }}
      >
        <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl">
          <h1 className="text-5xl font-bold text-white">About Lesvos Travel</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 mt-12">
        
        {/* Mission */}
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
         <b> Lesvos Travel </ b> was created to offer a modern one, 
          clean and easy-to-use guide for the island of Lesvos. 
          Our goal is to highlight beauty, beaches, villages, 
          the culture and nature of the island.
        </p>

        {/* What users find */}
        <h2 className="text-3xl font-bold mb-4">What You Will Find</h2>
        <ul className="list-disc ml-6 text-gray-700 text-lg leading-relaxed mb-8">
          <li>Detailed information about beaches of Lesvos</li>
          <li>Descriptions of villages and attractions</li>
          <li>High quality photos</li>
          <li>Easy navigation in each category</li>
        </ul>

        {/* Developer */}
        <h2 className="text-3xl font-bold mb-4">Who Created This Website?</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          The website was designed and developed by Angelos Mamouridis.
        </p>

        {/* Contact button */}
        <a 
          href="mailto:amamourids@gmail.com"
          className="inline-block mt-4 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Contact Me
        </a>

      </div>
    </main>
  );
}
