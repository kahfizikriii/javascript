import { useEffect, useState } from "react";

function FetchPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error("Gagal mengambil data!");
        const data = await res.json();
        setPost(data);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  if (loading) return <p> Sedang mengambil data...</p>;
  if (error) return <p> Terjadi kesalahan: {error}</p>;

  if (!post) return null;

  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}

export default FetchPost;
