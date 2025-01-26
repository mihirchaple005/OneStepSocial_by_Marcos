import './App.css'
import Newsfeed from './components/Newsfeed.component'
import newsimg from './images/newsimg.jpeg'
import Onestepsocial from './components/Onestepsocial.component'
import CrowdfundingPage from './pages/Crowdfunding.page'
import Layout from "./components/Layout/Layout";
import ImagesAndVideosPath from './api/carousel.api'


function App() {

  


  return (
    <>

      <Layout >

        {/* <Onestepsocial /> */}
      
        <CrowdfundingPage />



      </Layout>


     

      
    </>
  )
}

export default App



