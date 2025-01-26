import './App.css'
import Newsfeed from './components/Newsfeed.component'
import newsimg from './images/newsimg.jpeg'
import Onestepsocial from './components/Onestepsocial.component'
import CrowdfundingPage from './pages/CrowdFunding/Crowdfunding.page'
import Layout from "./components/Layout/Layout";
import ImagesAndVideosPath from './api/Carousel.api'
import Analysis from './pages/CrowdFunding/Analysis.page'


function App() {

  


  return (
    <>

      <Layout >

        {/* <Onestepsocial /> */}

        <Analysis/>
      
        {/* <CrowdfundingPage /> */}



      </Layout>


     

      
    </>
  )
}

export default App



