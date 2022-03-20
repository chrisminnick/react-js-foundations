import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import { useState } from 'react';
import * as styles from './WpBlog.module.css';

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

  const { isLoading, error, data } = useQuery(
    ['posts', page],
    () => {
      return fetch(
        `https://blog.reactjsfoundations.com/wp-json/wp/v2/posts?per_page=${props.posts}&page=${page}`
      ).then((res) => {
        setTotalPages(parseInt(res.headers.get('x-wp-totalpages')));
        return res.json();
      });
    },
    [page]
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
    <div className={styles.blog__posts}>
      <h1 className={styles.blog__title}>{props.title}</h1>
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
              className={styles.post__title}
              dangerouslySetInnerHTML={{ __html: post.title.rendered }}
            />
          </h2>

          <section
            className={styles.post__content}
            dangerouslySetInnerHTML={{ __html: post.content.rendered }}
          />
        </div>
      ))}
    </div>
  );
}
