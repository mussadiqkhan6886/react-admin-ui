import Home from "./pages/home/Home"
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import Users from "./pages/users/Users"
import Products from "./pages/products/Products"
import NavBar from "./components/navbar/NavBar"
import Menu from "./components/menu/Menu"
import Footer from "./components/footer/Footer"
import Login from "./pages/login/Login"
import User from "./pages/user/User"
import Product from "./pages/product/Product"
import "./styles/global.scss"
import Profile from "./pages/profile/Profile"
import ContactUs from "./pages/contact/Contact"
import Order from "./pages/orders/Order"
import Missing from "./pages/missing/Missing"
import KanBan from "./pages/kanban/KanBan"
import Calendar from "./pages/Calendar/Calendar"

function App() {

  const Layout = () => {
    return (
      <div className="main">
        <NavBar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/profile",
          element: <Profile />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/users/:id",
          element: <User />
        },
        {
          path: "/products/:id",
          element: <Product />
        },
        {
          path: "/contact",
          element: <ContactUs />
        },
        {
          path: "/order",
          element: <Order />
        },
        {
          path: "/kanban",
          element: <KanBan />
        },
        {
          path: "/calendar",
          element: <Calendar />
        },
        {
          path: "*",
          element: <Missing />
        }
      ],
    },
    {
      path: '/login',
      element: <Login />
    }
  ]);

  return <RouterProvider router={router} />
}

export default App
