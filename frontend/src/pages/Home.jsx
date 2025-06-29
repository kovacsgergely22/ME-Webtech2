import { Link } from "react-router-dom";
import { FaBook, FaBookOpen } from "react-icons/fa";
import "./pages.css"; // Assuming you have a CSS file for styling

function Home() {
  return (
    <>
      <section className="heading">
        <h1>This is the Bookstore!</h1>
        <p>Please choose from an option below</p>
      </section>

      <Link to='/new-book' className="btn-book">
      <FaBook /> Create New Book
      </Link>
      <Link to='/books' className="btn-book">
        <FaBookOpen /> View Books
      </Link>
    </>
  );
}

export default Home;
