import './App.scss';
import Footer from './components/footer/footer.component';
import Header from './components/header/header-component';
import BookPage from './pages/book-page/book-page';
import BooksPage from './pages/books-page/books.page';
import ContactUs from './pages/contact-us-page/contact-us-page';
import FaqPage from './pages/faq-page/faq-page';
import FavoritePage from './pages/favorite-page/favorite-page';
import HomePage from './pages/home-page/home.page';
import ShoppingCartPage from './pages/shopping-cart-page/shopping-cart-page';
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
          <Route path='/cart' element={<ShoppingCartPage/>}/>
          <Route path='/favorite' element={<FavoritePage/>}/>
          <Route path='/faq' element={<FaqPage/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
        </Routes>
        <Footer/>
      </div>

  );
}

export default App;
