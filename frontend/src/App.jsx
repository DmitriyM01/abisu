import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ScrollToTop from './utils/ScrollToTop.jsx';

import Header from './UI/Header.jsx';
import Footer from './UI/Footer.jsx';

//  Pages
import Body from './pages/MainBody.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Products from './pages/ProductsList.jsx';
import Vocabulary from './pages/Vocabulary.jsx';

const routesData = [
  {
    name: 'Фильтры для молока',
    componentName: 'FiltersForMilk',
    path: '/filters-for-milk',
  },
  {
    name: 'Влажные салфетки',
    componentName: 'Wipes',
    path: '/wipes',
  },
  {
    name: 'Товары для содержания КРС',
    componentName: 'CattleCareProducts',
    path: '/cattle-care-products',
  },
  {
    name: 'Орудия лова планктона',
    componentName: 'PlanktonNettingTools',
    path: '/plankton-netting-tools',
  },
  {
    name: 'Камера Богорова',
    componentName: 'BogorovChamber',
    path: '/bogorov-chamber',
  },
  {
    name: 'Пыжи',
    componentName: 'Wads',
    path: '/wads',
  },
  {
    name: 'Мешки для творога',
    componentName: 'CurdBags',
    path: '/curd-bags',
  },
  {
    name: 'Спецодежда',
    componentName: 'Workwear',
    path: '/workwear',
  },
  {
    name: 'Мешочные и рукавные фильтры',
    componentName: 'BagAndSleeveFilters',
    path: '/bag-and-sleeve-filters',
  },
  {
    name: 'Продукция для хлебозаводов и хлебопекарен',
    componentName: 'BakeryIndustryProducts',
    path: '/bakery-industry-products',
  },
  {
    name: 'Услуги по пошиву технических изделий',
    componentName: 'TechnicalSewingServices',
    path: '/technical-sewing-services',
  },
];

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="container">
        <Header />
        <Suspense fallback={<div>Загрузка страницы...</div>}>
        <Routes>
          <Route path='/' element={<Body />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/vocabulary' element={<Vocabulary />} />

          {routesData.map(({ path, componentName }) => {
            const Component = lazy(() => import(`./pages/productsPages/${componentName}.jsx`));
            return (
              // <Suspense fallback={<div>Загрузка страницы...</div>}>
              <Route key={path} path={path} element={<Component />} />
              /* </Suspense> */
            );
          })};
        </Routes>
      </Suspense>
      <Footer />
    </div>
    </Router >
  );
}

export default App;