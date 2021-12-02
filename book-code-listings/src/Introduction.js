import Helmet from 'react-helmet';

function Introduction(props) {
  return (
    <>
    <div style={{textAlign:"center"}}>
      <a href="https://www.amazon.com/React-Foundations-Building-Interfaces-ReactJS/dp/1119685540?keywords=react+js+foundations+minnick&qid=1637085780&qsid=144-7321471-0673327&sr=8-1&sres=1119685540%2CB082KZ8ZGM%2CB00PFCSURS%2CB084W9YBXD%2CB07J9KNS9G%2CB07GX6DSRW%2CB08TY6413H%2CB004675EI6%2CB002LF0J1M%2CB00DQL8HKK%2CB01LXJ0GF3%2CB01DPA6JXS%2CB01L2ZRYVE%2CB074VD4X89%2CB07SJYX8DV%2CB01M0H2R13&srpt=ABIS_BOOK&linkCode=sl1&tag=chrismincom-20&linkId=ad221fcbab9a5e438b88d2a0b3cb44c9&language=en_US&ref_=as_li_ss_tl">
      <img src="/images/cover.jpg" width="300" height="378" style={{maxWidth:"100%",height:"auto"}} alt="React JS Foundations" />
      </a>
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
