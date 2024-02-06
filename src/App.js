import './App.scss';
import Footer from './components/footer/footer.component';
import Header from './components/header/header-component';
import BookPage from './pages/book-page/book-page';
import BooksPage from './pages/books-page/books.page';
import HomePage from './pages/home-page/home.page';
import SignInPage from './pages/signin-page/signup.page';
import SignUpPage from './pages/signup-page/signup.page';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/signin' element={<SignInPage/>}/>
        <Route path='/books'>
          <Route index element={<BooksPage/>}/>
          <Route path=':id' element={<BookPage/>}/>
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
