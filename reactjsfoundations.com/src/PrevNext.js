import { Link } from 'react-router-dom';

function PrevNext({ prev, next }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <Link to={prev}>Previous Listing</Link> |{' '}
      <Link to={next}>Next Listing</Link>
    </div>
  );
}

export default PrevNext;
