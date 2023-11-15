import { BTCar } from './BTCar/BTCar'
import { BTComponent } from './BTComponent/BTComponent'
import { BTForm } from './BTForm/BTForm'
import { BTMovie } from './BTMovie/BTMovie'
import { BTMovieBooking } from './BTMovieBooking/BTMovieBooking'
import { BTPhone } from './BTPhone/BTPhone'
import { BTShoeShop } from './BTShoeShop/BTShoeShop'
import { DemoRedux } from './DemoRedux/DemoRedux'
import { DemoState } from './DemoState/DemoState'
import { DemoUseEffect } from './DemoUseEffect/DemoUseEffect'
import { HandleEvent } from './HandleEvent/HandleEvent'
import { DemoProps } from './Props/DemoProps'
import ReduxThunk from './ReduxTrunk/ReduxTrunk'
import { RenderWithCondition } from './RenderWithCondition/RenderWithCondition'
import { RenderWithMap } from './RenderWithMap/RenderWithMap'
import { StyleComponent } from './StyleComponent/StyleComponent'
import { Databinding } from './databinding/Databinding'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AdminPage from './pages/AdminPage'
import UserLayout from "./layouts/UserLayout";
import MainLayout from "./layouts/AdminLayout";
import AnimalDetails from "./pages/AnimalDetails";
import DemoTailwincss from "./pages/DemoTailwindcss/DemoTailwincss";
import DemoRef from './pages/DemoRef'
import CustomHooks from "./pages/CustomHooks";
function App() {
    return (
        <div className="description" tabIndex="1">

            {/* <BTComponent />
            <Databinding/>
            <RenderWithCondition/>
            <HandleEvent/>
            <RenderWithMap/>
            <BTMovie/>
            <StyleComponent/>
            <DemoState/>
            <BTCar/>
            <DemoProps/>
            <BTShoeShop/>
            <DemoRedux/>
            <BTPhone/>
            <BTMovieBooking/>
            <BTForm/>
            <DemoUseEffect/>  */}
             {/* <ReduxThunk/> */}
       
       < BrowserRouter>
        {/* <Header /> */}
        <Routes>
          {/* <Route path="/" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="admin/dashboard" element={<AdminPage />} />
          <Route path="*" element={<NotFound />} /> */}
  
          {/* Nested Router */}
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="animals" element={<ReduxThunk />} />
            <Route path="demo-tailwind" element={<DemoTailwincss />} />
             <Route path='demo-ref' element={<DemoRef/>}/> 
             <Route path="demo-custom-hooks" element={<CustomHooks />} />
       
                 {/* Dynamic segments */}
          {/* animals/1 , animals/2 , animals/3 */}
          <Route path="animals/:id" element={<AnimalDetails />} />
          </Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      </div>
    )
}

export default App
