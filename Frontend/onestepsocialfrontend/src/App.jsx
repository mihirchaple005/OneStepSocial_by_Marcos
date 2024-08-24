/* eslint-disable no-unused-vars */
import Newsfeed from './components/Newsfeed.component'
import Consultancy1 from './pages/Consultancy1'
import newsimg from './images/newsimg.jpeg'
import Onestepsocial from './components/Onestepsocial.component'
import CrowdfundingPage from './pages/Crowdfunding.page'
import Layout from "./components/Layout/Layout";
import ImagesAndVideosPath from './api/carousel.api'
import Sanrakshak from './components/Sanrakshak'
import StatusViewer from './components/Stories/StatusViewer'
import statuses from './api/stories.api'
import React from 'react';

function App() {
  return (
    <>
      <Layout >
        <StatusViewer statuses={statuses}></StatusViewer>
      </Layout>
    </>
  )
}

export default App



