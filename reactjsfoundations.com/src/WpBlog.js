import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const queryClient = new QueryClient();

export default function WpBlog(props) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactBlog
        posts={props.posts}
        layout={props.layout}
        title={props.title}
      />
    </QueryClientProvider>
  );
}

function ReactBlog(props) {
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  let { id } = useParams();

  let url;

  if (id) {
    url = `https://blog.reactjsfoundations.com/wp-json/wp/v2/posts/${id}/?per_page=${props.posts}&page=${page}`;
  } else {
    url = `https://blog.reactjsfoundations.com/wp-json/wp/v2/posts?per_page=${props.posts}&page=${page}`;
  }
  const { isLoading, error, data } = useQuery(
    ['posts', page],
    () => {
      return fetch(url).then((res) => {
        setTotalPages(parseInt(res.headers.get('x-wp-totalpages')));
        return res.json();
      });
    },
    {
      staleTime: 1000,
    }
  );

  const handlePrevPage = () => {
    setPage(page - 1 ? page - 1 : 1);
  };
  const handleNextPage = () => {
    setPage(page < totalPages ? page + 1 : totalPages);
  };
  if (error) return 'An error has occurred: ' + error.message;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="blog__posts">
      <h2 className="blog__title">{props.title}</h2>
      <div style={{ textAlign: 'center' }}>
        {page > 1 && <button onClick={handlePrevPage}>Newer posts</button>}{' '}
        {page + 1 <= totalPages && (
          <button onClick={handleNextPage}>Older posts</button>
        )}
      </div>
      {data.map((post) => (
        <div key={post.id}>
          <h2>
            <section
              className="post__title"
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </h2>

          <section
            className="post__content"
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />

          <hr />
        </div>
      ))}
    </div>
  );
}
