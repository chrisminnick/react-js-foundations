import Helmet from 'react-helmet';

function Introduction(props) {
  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.amazon.com/React-Foundations-Building-Interfaces-ReactJS/dp/1119685540">
          <img
            src="/images/cover.jpg"
            width="300"
            height="378"
            style={{ maxWidth: '100%', height: 'auto' }}
            alt="React JS Foundations"
          />
        </a>
      </div>
      <div style={{ textAlign: 'center', spadding: '4px 12px 0px 0px' }}>
        <button
          style={{
            height: '40px',
            padding: '4px 20px',
            width: '300px',
            verticalAlign: 'middle',
            border: '1px solid #666',
            borderRadius: '2px',
            borderColor: '#1b1f2426',
            backgroundColor: '#2da44e',
          }}
        >
          <a
            style={{ color: '#fff' }}
            href="https://www.amazon.com/React-Foundations-Building-Interfaces-ReactJS/dp/1119685540"
          >
            Preview and Buy Now @ Amazon.com
          </a>
        </button>
      </div>
      <Helmet>
        <title>
          React JS Foundations - Building User Interfaces with ReactJS: An
          Approachable Guide
        </title>
        <meta
          name="description"
          content="Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it."
        />
      </Helmet>

      <p>
        Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it. You will learn through practical examples
        and different techniques, tools, and patterns used in day-to-day React
        work.
      </p>

      <p>
        This book will not assume you know what all of the technical terms mean,
        rather for those who are unfamiliar or are entry-level engineers, terms
        will be clarified and explained providing readers with relevant and
        modern-day examples for today’s engineer. This is not to say a
        non-beginner can’t learn a trick or two from this book! This book is set
        up in a way that is approachable for beginners as well as “easily
        skimmable” for more seasoned programmers who are just looking to get up
        to speed with React Quickly.
      </p>
    </>
  );
}

export default Introduction;
