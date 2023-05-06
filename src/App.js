import { useState } from 'react';
import { supabase } from './supbaseClient';
import logo from './logo.svg';
import './App.css';

function Library() {
  const [myBooks, setMyBooks] = useState([]);
  async function getBooks() {
    let { data: books, error} = await supabase
      .from('books')
      .select('*')
    setMyBooks(books)
  }
  getBooks();
  return (
    <table className="my-table">
      {
        myBooks.map(b=> (
          <tr>
            <td>{b.title}</td>
            <td>{b.author}</td>
            <td>{b.isbn}</td>
            <td>{b.description}</td>
          </tr>
        ))
      }
    </table>
  );
}

const magazines = [
  { id: 1, title: 'Architectural Digest', theme: 'architecture', isAvailable: true },
  { id: 2, title: 'Dwell', theme: 'architecture', isAvailable: true },
  { id: 3, title: 'Communication Arts', theme: 'design', isAvailable: false },
];

function ZineRack() {
  const listZines = magazines.map(zine =>
    <li
      key={zine.id}
      style={{
        color: zine.isAvailable ? 'red' : 'green'
      }}
    >
      {zine.title}
    </li>
  );
  return (
    <ul>{listZines}</ul>
  )
}

const book = {
  title: 'A Farewell to Arms',
  author: 'Earnest Hemingway',
  published: '1929',
  image: logo,
  width: '264',
  height: '378'
};

function BookShelf() {
  return (
  <div>
    <h2>{book.title} ({book.published})</h2>
    <p>{book.author}</p>
    <img
      className="bookCover"
      src={book.image}
      alt={book.title + ' cover'}
      style={{
        width: book.width,
        height: book.height
      }}
    />
  </div>
  );
}

function MagicButton() {
  const [count, setCount] = useState(0)
  function doMagic() {
    setCount(count + 1)
  }
  return (
    <div>
    <h3>This is a magic button</h3>
    <button onClick={doMagic}> Magic {count}</button>
    </div>
  );
}

function MyTitle(props) {
  return (
    <div>
      <h1>Welcome to My Website</h1>
    </div>
  );
}

const GreetingSentence = [
  {id: 1, title: 'Welcome to this Website', message: 'We are happy to have you here!', isAvailable: true },
  {id: 2, title: 'Thanks for Visiting', message: 'We hope you found what you were looking for.', isAvailable: false},
];

function Greetings() {
  const listGreeting = GreetingSentence.map(sentence =>
    <li
      key={sentence.id}
      style={{
        color: sentence.isAvailable ? 'red' : 'yellow'
      }}
    >
      {sentence.title}
    </li>
  );
  return (
    <ul>{listGreeting}</ul>
  )
}

function Form() {
  return (
    <div>
      <h3>Contact Us</h3>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <br />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="1" required></textarea>
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Library />
        <ZineRack />
        <BookShelf />
        <MagicButton /> 
        <MyTitle />
        <Greetings />
        <Form />
      </header>
    </div>
  );
}

export default App;
