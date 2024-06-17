import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Index from './pages/index';
import Index2 from './pages/index-2';
import Index3 from './pages/index-3';
import Index4 from './pages/index-4';
import Onepage from './pages/onepage';
import RtlHome from './pages/rtl-home';
import Error404 from './pages/404';
import About from './pages/about'
import BlogDestails from './pages/blog-details'
import BlogGrid from './pages/blog-grid'
import BlogStandard from './pages/blog-standard'
import Careers from './pages/careers'
import Checkout from './pages/checkout'
import Contact from './pages/contact'
import Faq from './pages/faq'
import Portfolio1 from './pages/portfolio-1'
import Portfolio2 from './pages/portfolio-2'
import PortfolioDetails from './pages/portfolio-details'
import ProductDetails from './pages/product-details'
import Services from './pages/services'
import Units from './pages/units'
import ServicesDetails from './pages/services-details'
import Shop from './pages/shop'
import ShoppingCart from './pages/shopping-cart'
import TeamDetails from './pages/team-details'
import Team from './pages/team';
import Testimonial1 from './element/testimonial1'
import BackToTop from './layout/backToTop'
import Reports from './pages/reports';
import EdoInnovates from './pages/sublets/innovates';
import EdoJobcenter from './pages/sublets/jobcenter';
import VictorUwaifoHub from './pages/sublets/victoruwaifohub';
import VocationalSkills from './pages/sublets/vocationalskills';
import CreativeHub from './pages/sublets/victoruwaifohub';
import EdoFAC from './pages/sublets/fac';
import Entrepreneurship from './pages/sublets/entrepreneurship';
import MSME from './pages/sublets/msme';


const Router = () => {
    return (

        <BrowserRouter basename="/">
            <div div class="page-wrapper" >

                <Switch>
                    <Route path='/' exact component={Index} />
                    {/* <Route path='/index-2' component={Index2} />
                    <Route path='/index-3' component={Index3} />
                    <Route path='/index-4' component={Index4} />
                    <Route path='/onepage' component={Onepage} /> */}

                    <Route path='/about' component={About} />
                    <Route path='/blog-details' component={BlogDestails} />
                    <Route path='/blog-grid' component={BlogGrid} />
                    <Route path='/blog-standard' component={BlogStandard} />
                    <Route path='/careers' component={Careers} />
                    {/* <Route path='/checkout' component={Checkout} /> */}
                    <Route path='/contact' component={Contact} />
                    <Route path='/faq' component={Faq} />
                    {/* <Route path='/portfolio-1' component={Portfolio1} />
                    <Route path='/portfolio-2' component={Portfolio2} />
                    <Route path='/portfolio-details' component={PortfolioDetails} />
                    <Route path='/product-details' component={ProductDetails} /> */}
                    <Route path='/publications' component={Reports} />
                    <Route path='/services' component={Services} />
                    {/* <Route path='/services-details' component={ServicesDetails} />
                    <Route path='/shop' component={Shop} />
                    <Route path='/shopping-cart' component={ShoppingCart} />
                    <Route path='/team-details' component={TeamDetails} />
                    
                    <Route path='/test' component={Testimonial1} /> */}
                    <Route path='/team' component={Team} />
                    <Route exact path='/units' component={Units} />
                    <Route exact path='/units/edoinnovates' component={EdoInnovates} />
                    <Route exact path='/units/edojobcenter' component={EdoJobcenter} />
                    <Route exact path='/units/edofac' component={EdoFAC} />
                    <Route exact path='/units/msme' component={MSME} />
                    <Route exact path='/units/entrepreneurship' component={Entrepreneurship} />
                    <Route exact path='/units/edocreativehub' component={CreativeHub} />
                    <Route exact path='/units/vocationalskills' component={VocationalSkills} />

                    <Route path='/*' component={Error404} />

                </Switch>

                <BackToTop />

            </div>
        </BrowserRouter >

    )
}


export default Router;