export default function AboutPage() {
  return (
    <main className="bg-white text-black pb-20">
      
      {/* HERO SECTION */}
      <section 
        className="relative w-full h-[55vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url('/logo.jpeg')` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
            About Lesvos Travel
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Discover the island through curated experiences, local insights, and authentic places.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-4xl mx-auto px-6 mt-14">
        
        {/* Mission */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>Lesvos Travel</strong> was created to offer a modern, clean and easy-to-use travel guide 
            for the island of Lesvos. Our goal is to highlight the island’s natural beauty, 
            traditional villages, beaches, local culture, and authentic experiences.
          </p>
        </section>

        {/* What users find */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">What You’ll Discover</h2>
          <ul className="space-y-3 text-gray-700 text-lg leading-relaxed">
            <li>• Carefully selected beaches and hidden spots</li>
            <li>• Traditional villages and must-visit destinations</li>
            <li>• Local food, taverns, and authentic experiences</li>
            <li>• High-quality visuals and curated recommendations</li>
            <li>• Easy navigation to plan your trip effortlessly</li>
          </ul>
        </section>

        {/* Vision */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We aim to promote Lesvos as a unique travel destination worldwide, 
            connecting visitors with local businesses and experiences that truly represent the island.
          </p>
        </section>

        {/* Creator */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Who Created This Website?</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            This project was designed and developed by <strong>Angelos Mamouridis</strong>, 
            with the goal of building a modern digital guide that supports local businesses 
            and enhances the travel experience for visitors.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a 
            href="/contact"
            className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition font-semibold"
          >
            Get in touch
          </a>

          <a 
            href="/"
            className="inline-block px-6 py-3 border border-gray-300 text-black rounded-xl hover:bg-gray-100 transition font-semibold"
          >
            Explore the guide
          </a>
        </div>

      </div>
    </main>
  );
}
