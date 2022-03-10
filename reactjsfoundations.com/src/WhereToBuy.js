import Helmet from 'react-helmet';

function WhereToBuy(props) {
  return (
    <>
      <Helmet>
        <title>
          ReactJS Foundations by Chris Minnick - Where to Buy the Book
        </title>
        <meta
          name="description"
          content="Get up to speed on building applications with ReactJS with this
        practical yet very approachable book that will provide you with
        everything you need to understand what React is and how to start
        building applications with it."
        />
      </Helmet>
      <h1>Where to Buy the Book</h1>
      <p>
        ReactJS Foundations Building User Interfaces with ReactJS: An
        Approachable Guide can be purchased anywhere computer books are sold.
      </p>
      <ul className="inside-links">
        <li>
          <a href="https://www.wiley.com/en-us/React+JS+Foundations+Building+User+Interfaces+with+ReactJS%3A+An+Approachable+Guide-p-9781119685548">
            Wiley.com
          </a>
        </li>
        <li>
          <a href="https://www.powells.com/book/react-js-foundations-building-user-interfaces-with-reactjs-9781119685548">
            Powells.com
          </a>
        </li>
        <li>
          <a href="https://www.amazon.com/React-Foundations-Building-Interfaces-ReactJS/dp/1119685540?keywords=react+js+foundations+minnick&qid=1637085780&qsid=144-7321471-0673327&sr=8-1&sres=1119685540%2CB082KZ8ZGM%2CB00PFCSURS%2CB084W9YBXD%2CB07J9KNS9G%2CB07GX6DSRW%2CB08TY6413H%2CB004675EI6%2CB002LF0J1M%2CB00DQL8HKK%2CB01LXJ0GF3%2CB01DPA6JXS%2CB01L2ZRYVE%2CB074VD4X89%2CB07SJYX8DV%2CB01M0H2R13&srpt=ABIS_BOOK&linkCode=sl1&tag=chrismincom-20&linkId=ad221fcbab9a5e438b88d2a0b3cb44c9&language=en_US&ref_=as_li_ss_tl">
            Amazon.com
          </a>
        </li>
        <li>
          <a href="https://www.barnesandnoble.com/w/react-js-foundations-building-user-interfaces-with-reactjs-chris-minnick/1140168465?ean=9781119685548">
            Barnes and Noble
          </a>
        </li>
        <li>
          <a href="https://www.booksamillion.com/product/9781119685548">
            Books a Million
          </a>
        </li>
        <li>
          <a href="https://www.walmart.com/ip/React-Js-Foundations-Building-User-Interfaces-with-Reactjs-An-Approachable-Guide-Paperback-9781119685548/363681939">
            Walmart
          </a>
        </li>
        <li>
          <a href="https://www.indiebound.org/book/9781119685548">Indiebound</a>
        </li>
      </ul>
    </>
  );
}

export default WhereToBuy;
