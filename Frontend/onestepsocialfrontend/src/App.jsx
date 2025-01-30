/* eslint-disable no-unused-vars */
import './App.css'
import Newsfeed from './components/Newsfeed.component'
import newsimg from './images/newsimg.jpeg'
import Onestepsocial from './components/Onestepsocial.component'
import CrowdfundingPage from './pages/CrowdFunding/Crowdfunding.page'
import Layout from "./components/Layout/Layout";
import ImagesAndVideosPath from './api/carousel.api'
import Analysis from './pages/CrowdFunding/Analysis.page'
import Consultancy from './pages/Consultancy'


function App() {

  


  return (
    <>

      <Layout >

        {/* <Onestepsocial /> */}

        {/* <Analysis/> */}
      
        {/* <CrowdfundingPage /> */}

        <Consultancy></Consultancy>

      </Layout>


     

      
    </>
  )
}

export default App



