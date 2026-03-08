import blogs from "@/app/data/data";

export default function SingleBlog({ params }) {
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === parseInt(id));
  return (
    <div>
      <h1 className="text-xl font-bold">{blog.title}</h1>
      <p className="text-gray-600">{blog.content}</p>
    </div>
  );
}
