import { Hero, CustomerReviews, PopularProducts, SpecialOffer, 
  Subscribe, SuperQuality, Services, Footer } from "./sections";
import Nav from "./components/Nav";

const App = () => {
  return (
<main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
     <SpecialOffer  />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x bg-black padding-t pb-8">
      <Footer />
    </section>
</main>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './pages/Navbar';
// import Home from './pages/Home';
// import About from './pages/About';
// import Register from './pages/Register';

// const navLinks = [
//   { name: 'Home', href: '/' },
//   { name: 'About', href: '/about' },
//   { name: 'Register', href: '/register' },
// ];

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar navLinks={navLinks} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/register" element={<Register />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;