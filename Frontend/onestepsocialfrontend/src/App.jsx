import './App.css'
import Layout from './components/Layout/Layout'
import UserProfilePage from './pages/UserProfilePage'


function App() {
  return (
    <>
    <Layout>
      {/* Tested Profile page and its responsiveness */}
      <UserProfilePage></UserProfilePage>
    </Layout>
    </>
  )
}

export default App



