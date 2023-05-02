import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from "./app/layouts/Header";
// @ts-ignore
import Footer from "./app/layouts/Footer";
import {Grid, Switch} from "@mui/material";
import Card from "./app/components/Card";
//import bg from "./app/util/bgggjpg.jpg";
import eu from "./app/util/europe.png";
import CardPage from "./app/components/CardPage";
import Form from "./app/components/Form";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookATicketPage from "./app/pages/BookATicketPage";
import AboutPage from "./app/pages/AboutPage";
import ContactPage from "./app/pages/ContactPage";
import Login from "./app/components/Login";
import Home from "./app/pages/Home";
import {SnackbarProvider} from "notistack";


function App() {
  const [count, setCount] = useState(0)

  // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    // @ts-ignore
    return (
        <div>
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/booking" element={<BookATicketPage/>} />
                        <Route path="/about" element={<AboutPage/>} />
                        <Route path="/contact" element={<ContactPage/>} />
                        <Route path="/login" element={
                            <SnackbarProvider maxSnack={3}>
                                <Login />
                            </SnackbarProvider>
                            } />
                    </Routes>
                </BrowserRouter>
            </div>

        </div>

  )
}

export default App
