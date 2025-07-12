import React, { lazy, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Lazy-loaded components
const ProductList = lazy(() => import('./Componets/ProductList.jsx'));
const ProductDetail = lazy(() => import('./Componets/ProductDetail.jsx'));
const Cart = lazy(() => import('./Componets/Cart.jsx'));
const Error = lazy(() => import('./Componets/Error.jsx'));

// Router configuration
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: (
      <Suspense fallback={<p>Loading error page...</p>}>
        <Error />
      </Suspense>
    ),
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<p>Loading product list...</p>}>
            <ProductList />
          </Suspense>
        )
      },
      {
        path: '/product/:id',
        element: (
          <Suspense fallback={<p>Loading product details...</p>}>
            <ProductDetail />
          </Suspense>
        )
      },
      {
        path: '/cart',
        element: (
          <Suspense fallback={<p>Loading cart...</p>}>
            <Cart />
          </Suspense>
        )
      }
    ]
  }
]);


createRoot(document.getElementById('root')).render(
 // <StrictMode>
  <RouterProvider router={appRouter} />
  //</StrictMode>,
)
