import Newsfeed from './components/Newsfeed.component'
import newsimg from './images/newsimg.jpeg'
import Onestepsocial from './components/Onestepsocial.component'
import CrowdfundingPage from './pages/CrowdFunding/Crowdfunding.page'
import Layout from "./components/Layout/Layout";
import ImagesAndVideosPath from './api/Carousel.api'
import ControlFlow from './components/CarouselControlFlow.component';
import Analysis from './pages/CrowdFunding/Analysis.page';
import GenerateFundForm from './pages/CrowdFunding/GenerateFundForm.page';


function App() {

  


  return (
    <>

      <Layout >

         <Onestepsocial />
      
         {/* <CrowdfundingPage UpdatesAndStories={ImagesAndVideosPath}/> */}

        {/* <ControlFlow
        ImagesAndVideosPath = {ImagesAndVideosPath}
        /> */}


         {/* <Analysis /> */}

        {/* <GenerateFundForm /> */}

        




      </Layout>


     

      
    </>
  )
}

export default App



