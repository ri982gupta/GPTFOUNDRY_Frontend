// import React, { Suspense } from "react";
// import {
//   RouterProvider,
//   createHashRouter,
// } from "react-router-dom";
// import "./App.scss";
// import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

// // Import the LicenseProvider
// // import  from './components/LicenseContext/licenseContext'; // Update the import path
// // import axios from 'axios';
// // import LicenseContext from './components/LicenseContext/licenseContext';

// // // Container

// // const Login = React.lazy(() => import("./pages/login"));

// const DefaultLayout = React.lazy(() => import("./defaultLayout/defaultLayout"));

// // import DefaultLayout from './defaultLayout/defaultLayout';

// // // Pages
// // const Login = React.lazy(() => import('./pages/login'));
// // const Page404 = React.lazy(() => import('./pages/page404/Page404'));
// // const Page500 = React.lazy(() => import('./pages/page500/Page500'));

// const loading = (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//     }}
//   >
//     <div className="loader">
//       <div className="circle"></div>
//       <div className="circle"></div>
//       <div className="circle"></div>
//       <div className="circle"></div>
//     </div>
//   </div>
// );

// const App = () => {
//   const router = createHashRouter([
//     {
//       path: "*",
//       element: <DefaultLayout />,
//     },
//     // {
//     //   path: "/404",
//     //   element: <Login />,
//     // },
//     // {
//     //   path: "/500",
//     //   element: <Login />,
//     // },
//     // {
//     //   path: "*",
//     //   element: <PersistLogin />,
//     //   children : [
//     //     {
//     //       path: '*',
//     //       element: <DefaultLayout children />,
//     //     },
//     //   ]
//     // },
//   ]);

//   return (
//     <>
//       <Suspense fallback={loading}>
//         <RouterProvider router={router} />
//       </Suspense>
//     </>
//   );
// };

// export default App;



// import React, { Suspense } from "react";
// import {
//   RouterProvider,
//   createHashRouter,
// } from "react-router-dom";
// import "./App.scss";
// import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";


// const DefaultLayout = React.lazy(() => import("./defaultLayout/defaultLayout"));
// const LogPage = React.lazy(() => import('./views/LoginPage/LogPage.tsx'));


// const loading = (
//   <div
//     style={{
//       display: "flex",
//       justifyContent: "center",
//       alignItems: "center",
//       height: "100vh",
//     }}
//   >
//     <div className="loader">
//       <div className="circle"></div>
//       <div className="circle"></div>
//       <div className="circle"></div>
//       <div className="circle"></div>
//     </div>
//   </div>
// );

// const App = () => {
//   const router = createHashRouter([
//     {
//       path: "/",
//       element: <LogPage />
//       // element: (
//       //   <Suspense fallback={loading}>
//       //     {false ? <DefaultLayout /> : <LogPage />}
//       //   </Suspense>
//       // ),
//     },
//     {
//       path: "*",
//       element: <DefaultLayout />
//     },
//   ]);

//   return (
//     <>
//       <Suspense fallback={loading}>
//         <RouterProvider router={router} />
//       </Suspense>
//     </>
//   );
// };

// export default App;



import React, { Suspense } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./App.scss";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import PrivateRoute from "./views/Privateauth/private";

const DefaultLayout = React.lazy(() => import("./defaultLayout/defaultLayout"));
const LogPage = React.lazy(() => import('./views/LoginPage/LogPage'));


const loading = (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <div className="loader">
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  </div>
);

const App = () => {
  const router = createHashRouter([
    {
      path: "/",
      element: <LogPage />
    },
    {
      path: "*",
      element: <PrivateRoute element={DefaultLayout} />
    },
    // {
    //   path: "*",
    //   element: <DefaultLayout />
    // },
  ]);

  return (
    <>
      <Suspense fallback={loading}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
};

export default App;



