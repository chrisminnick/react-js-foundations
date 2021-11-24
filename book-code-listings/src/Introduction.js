import Helmet from 'react-helmet';

function Introduction(props) {
  return (
    <>
    <div style={{textAlign:"center"}}>
      <img src="/images/cover.jpg" style={{maxWidth:"100%"}} alt="React JS Foundations" />
    </div>
    <Helmet> 
      <title>React JS Foundations by Chris Minnick - Building User Interfaces with ReactJS: An
          Approachable Guide</title>
      <meta name="description" content="Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it." />
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
