import Link from "next/link";
import BlogItem from "../components/BlogItem";
import blogs from "../data/data";
export default function Blog() {
  return (
    <div>
      <h1 className="text-xl font-bold">Welcome to the Blog list</h1>
      <div className="mt-6 p-4">
        {blogs.map((blog) => (
          <Link key={blog.id} href={`/blog/${blog.id}`}>
            <div>
              <BlogItem title={blog.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
