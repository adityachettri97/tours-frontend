const Blog = () => {
  return (
    <section className="py-12 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">Latest from Our Blog</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-2">Top 10 Tips for First-Time Travelers</h3>
          <p className="text-gray-700 mb-2">Pack smart, stay safe, and soak in every moment. Here's how to make your first trip unforgettable...</p>
          <a href="/blogPage/top-10-tips-for-first-time-travelers" className="text-blue-600 hover:underline">
            Read More
          </a>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Why Solo Travel Can Change Your Life</h3>
          <p className="text-gray-700 mb-2">
            Traveling alone might seem scary, but it's also empowering. Here's why you should try it at least once...
          </p>
          <a href="/blogPage/why-solo-travel-can-change-your-life" className="text-blue-600 hover:underline">
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
