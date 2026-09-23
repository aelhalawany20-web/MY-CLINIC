import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//routes
import Main from "./routes/Main"
import CallUs from "./routes/CallUs"
import Specialties from "./routes/Specialties"
import Social from "./routes/Social"
import Index from "./routes/Index"

//routes specialization
import Department from './routes/specialization/Department';
import SpecialHome from './routes/specialization/SpecialHome';

const routes= createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        index: true,
        element: <Index />
      },
      {
        path: "callus",
        element: <CallUs />
      },
      {
        path: "specialties",
        element: <Specialties />,
        children: [
          {
            index: true,
            element: <SpecialHome />
          },
          {
            path: "children",
            element: <Department />
          },
          {
            path: "women",
            element: <Department />
          },
          {
            path: "abdomen",
            element: <Department />
          },
          {
            path: "heart",
            element: <Department />
          },
          {
            path: "heartchildren",
            element: <Department />
          },
          {
            path: "nose",
            element: <Department />
          },
          {
            path: "surgery",
            element: <Department />
          },
          {
            path: "surgerychildren",
            element: <Department />
          },
          {
            path: "surgerywomen",
            element: <Department />
          },
          {
            path: "food",
            element: <Department />
          },
          {
            path: "bones",
            element: <Department />
          },
          {
            path: "chest",
            element: <Department />
          },
          {
            path: "teeth",
            element: <Department />
          },
          {
            path: "cupping",
            element: <Department />
          },
          {
            path: "skin",
            element: <Department />
          },
          {
            path: "psychology",
            element: <Department />
          },
          {
            path: "suger",
            element: <Department />
          },
          {
            path: "pathways",
            element: <Department />
          },
          {
            path: "digestchildren",
            element: <Department />
          },
          {
            path: "brain",
            element: <Department />
          },
          {
            path: "brainchildren",
            element: <Department />
          },
          {
            path: "ray",
            element: <Department />
          },
          {
            path: "breastfeeding",
            element: <Department />
          }
        ]
      },
      {
        path: "social",
        element: <Social />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={routes} />
);
