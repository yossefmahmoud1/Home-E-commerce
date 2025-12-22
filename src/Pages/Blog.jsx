import Heading from "../Common/Heading";
import { FaUser, FaCalendar, FaArrowRight } from "react-icons/fa";

const Blog = () => {
  const posts = [
    {
      id: 1,
      image: "/img/banners/id1-img1.jpg",
      title: "Top 10 Interior Design Trends for 2025",
      author: "Jane Doe",
      date: "Oct 15, 2024",
      excerpt: "Discover the latest trends that are transforming living spaces this year, from sustainable materials to bold color palettes."
    },
    {
      id: 2,
      image: "/img/banners/id1-img2.jpg",
      title: "How to Choose the Perfect Sofa",
      author: "John Smith",
      date: "Sep 22, 2024",
      excerpt: "A comprehensive guide to selecting a sofa that balances comfort, style, and durability for your living room."
    },
    {
      id: 3,
      image: "/img/Hero/Heroimg.jpg",
      title: "Maximizing Small Spaces",
      author: "Alice Johnson",
      date: "Aug 10, 2024",
      excerpt: "Tips and tricks for making small apartments feel spacious and functional without compromising on style."
    },
  ];

  return (
    <section className="py-20 bg-[var(--color-background)] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Heading title="Our Blog" description="Inspiration and tips for your home." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 animate-fadeIn">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110" 
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                  <span className="flex items-center gap-1"><FaUser className="text-[var(--color-primary)]" /> {post.author}</span>
                  <span className="flex items-center gap-1"><FaCalendar className="text-[var(--color-primary)]" /> {post.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-[var(--color-primary)] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <FaArrowRight />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
