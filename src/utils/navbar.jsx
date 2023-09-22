import CategoryPage from "../page/CategoryPage";
import HomePage from "../page/HomePage";
export const navbar = [
  {
    id: 1,
    title: "Home",
    element: <HomePage />,
    path: "/home",
    isPrivad: false,
    hidden: false,
  },
  {
    id: 2,
    title: "Home",
    element: <CategoryPage />,
    path: "/category",
    isPrivad: false,
    hidden: false,
  },
];
