import { Link } from 'react-router-dom';

function BottomNav() {
  return (
    <nav id="bottomNav">
      <p style={{ textAlign: 'center' }}>
        <Link to="/">Home</Link> | <Link to="/wheretobuy">Buy the Book</Link> |{' '}
        <Link to="/intro">About the Book</Link> |{' '}
        <a href="https://github.com/chrisminnick/react-js-foundations">
          Download the Code
        </a>
      </p>
    </nav>
  );
}

export default BottomNav;
