import Header from './Header';
import MovieDetails from './MovieDetails';
import SearchBar from './SearchBar';
import Footer from './Footer';
import './globals.css';  

function Page() {
  return (
    <div>

      <Header />
      <SearchBar />
      <MovieDetails />
      <Footer/>
    </div>
  );
}
export default Page;
