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
      <p
        style={{
          textAlign: 'center',
          color: '#b4032d',
          fontSize: '24px',
          marginBottom: '-10px',
        }}
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <blockquote>
        <strong>
          "It is rare to find it hard to put down a programming book but it is
          the case for me with this one. It should be the textbook for any React
          course and for anyone learning react."
        </strong>
      </blockquote>
      <p
        style={{
          textAlign: 'center',
          color: '#b4032d',
          fontSize: '24px',
          marginBottom: '-10px',
        }}
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <blockquote>
        <strong>
          "This is a wonderfully researched, impeccably written book
          meticulously covering the all the key, core concepts involved in
          developing application with React."
        </strong>
      </blockquote>
      <p
        style={{
          textAlign: 'center',
          color: '#b4032d',
          fontSize: '24px',
          marginBottom: '-10px',
        }}
      >
        &#9733;&#9733;&#9733;&#9733;&#9733;
      </p>
      <blockquote>
        <strong>
          "The details inside are perfectly explained, organized in perfect
          order, and explained completely."
        </strong>
      </blockquote>
      <blockquote style={{ textAlign: 'right' }}>
        <a href="https://www.amazon.com/React-Foundations-Building-Interfaces-ReactJS/product-reviews/1119685540">
          Read More Reviews
        </a>
      </blockquote>

      <h2>WHY THIS BOOK?</h2>
      <p>
        My aim with this book is to provide an up-to-date and thorough
        explanation of React and the React ecosystem along with hands-on code
        that will prepare you to quickly start using React productively in the
        real world. I'm thrilled to have written this book at this time for a
        number of reasons:
      </p>

      <ul>
        <li>I have the experience and knowledge to do it right.</li>
        <li>React is one of the most popular JavaScript libraries today.</li>
        <li>I believe React will be even more popular in the future.</li>
        <li>
          Existing online resources and books too often give incomplete and/or
          outdated information about how to program with React.
        </li>
      </ul>

      <p>
        Let's take a quick look at each of these points, starting with a little
        bit about who I am and how I came to React and this book.
      </p>

      <h2>About Me</h2>
      <p>
        I've been a web developer since 1997, and I've been programming in
        JavaScript since 1998. I've built or managed the building of web
        applications for some of the world's largest companies over the years.
        As a web developer, writer, and teacher, I've had to learn and use
        plenty of languages and JavaScript frameworks. There's a difference
        between learning something and applying it, and I've been working on
        projects with React and doing React consulting for several years now.
      </p>

      <p>
        I've been teaching web development and JavaScript online and in person
        since 2000, and I've been teaching React since 2015. In the years that
        I've been teaching React, I've written three weeklong courses designed
        for in-person delivery, numerous short video courses, and two longer
        video courses. I've taught React on three continents, and my students
        have been web developers, Java and C programmers, COBOL programmers,
        database administrators, network administrators, project managers,
        graphic designers, and college students.
      </p>

      <p>
        As I wrote this book, the global COVID-19 pandemic had decimated the
        in-person training industry. While I was greatful to have more time at
        home with the pets, it also gave me time to think deeply about React and
        about the React book that I wish existed today. This book is the result
        of my looking at all of the top React books, looking at the current
        state of how React is being used, and looking at what React is likely to
        look like in the future.
      </p>

      <h2>React Is Popular</h2>
      <p>
        React is a JavaScript library that was born out of Facebook's need to
        create scalable and fast user interfaces. Ever since Facebook released
        it to the world as an open source project, it has been one of the most
        widely used ways to build dynamic web and mobile applications. One
        popular game among JavaScript developers is to think of a noun, add
        ".js" and search GitHub to find the JavaScript framework with that name.
        In a time when new JavaScript frameworks and libraries pop up and die
        off with shocking regularity, React is one of three libraries released
        since 2010 that has stuck around and gained the kind of developer usage
        that will guarantee that it will be supported and in widespread use for
        a long time to come.
      </p>

      <h2>React Is Both Progressive and Conservative</h2>
      <p>
        React has been able to stick around so long and gain so many users
        because it's always been a forward-looking framework that's not afraid
        to make big changes to adapt to new features in JavaScript, new ways of
        writing user interfaces, and feedback from developers.
      </p>
      <p>
        Over the years, React has gone through several major changes in how the
        basic unit of a React application, the component, is written. But,
        amidst all this change, React has stuck to a central paradigm and each
        major change to React has maintained compatibility with previous
        versions.
      </p>

      <h2>Don't Believe Everything on the Internet</h2>
      <p>
        While the end result of all this change is that React has gotten easier
        to write and more robust over the years, it's also caused a pileup of
        outdated and often wrong example code and tutorials on the internet and
        in books. If you've done any research on React prior to buying this
        book, you've surely noticed this, and you've likely been confused by it.
        Perhaps you bought this book after having a frustrating experience with
        learning React online only to learn that you learned about an old
        version of it. This book aims to be a solid and complete guide to all of
        the most important (and some less important) features, concepts, and
        syntaxes used in React.
      </p>

      <p>
        <b>
          Thank you for choosing to begin, or continue, your React journey with
          me.
        </b>
      </p>
      <p>
        <em>- Chris Minnick</em>
      </p>
    </>
  );
}

export default Introduction;
