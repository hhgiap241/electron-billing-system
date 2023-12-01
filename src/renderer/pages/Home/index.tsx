import { Link } from 'react-router-dom';
import icon from '../../../../assets/icon.svg';
import Button from '../../components/Button';

function Home() {
  return (
    <div>
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1 className="text-3xl font-bold underline">Hello worlddd!</h1>
      <h1>electron-react-boilerplate</h1>
      <div className="Hello">
        <a
          href="https://electron-react-boilerplate.js.org/"
          target="_blank"
          rel="noreferrer"
        >
          <Button type="link">
            <span role="img" aria-label="books">
              📚
            </span>
            Read our docs
          </Button>
        </a>
        <a
          href="https://github.com/sponsors/electron-react-boilerplate"
          target="_blank"
          rel="noreferrer"
        >
          <Button type="link">
            <span role="img" aria-label="folded hands">
              🙏
            </span>
            Donate
          </Button>
        </a>
        <Button type="primary">
          <span role="img" aria-label="heart">
            <Link to="/login">Go to Login Page</Link>
          </span>
        </Button>
      </div>
    </div>
  );
}

export default Home;
