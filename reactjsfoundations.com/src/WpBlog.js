import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
import * as styles from './WpBlog.module.css';

const queryClient = new QueryClient();

export default function WpBlog() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactBlog />
    </QueryClientProvider>
  );
}

function ReactBlog() {
  const { isLoading, error, data } = useQuery('posts', () =>
    fetch(
      'https://blog.reactjsfoundations.com/wp-json/wp/v2/posts?_fields=id,title,content&per_page=3'
    ).then((res) => res.json())
  );

  if (isLoading) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className={styles.blog__posts}>
      <h1 className={styles.blog__title}>Latest Blog Posts</h1>
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
