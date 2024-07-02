"use client";
"use strict";
import './globals.css'
import { Inter } from 'next/font/google';
import Nav from "./components/navbar/Navbar";
import { store } from './redux/store';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import Footer from './components/footer/Footer';
import Script from "next/script";
import "./assets/css/bootstrap.css";
import "./assets/css/LineIcons.css";
import "./assets/css/animate.css";
import "./assets/css/main.css";

const inter = Inter({ subsets: ['latin'] })

let persistor = persistStore(store)



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
        <Nav />
        {children}
        <Footer />
        </PersistGate>
        </Provider>
        <Script src="js/bootstrap.js" />
        <Script src="js/count.js" />
        <Script src="js/wow.js" />
        <Script src="js/main.js" /> 
        </body>
    </html>
  )
}
