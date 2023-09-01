import { Box, Button, Stack } from '@mui/material'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout/Layout'
import LandingPage from './pages/LandingPage'
import Blogs from "./pages/Blogs"
import DashBoard from "./pages/DashBoard"
import PlayGround from "./pages/PlayGround"
import Privacy from "./pages/Privacy"
import Membership from "./pages/Membership"
import { ThemeProviderWrapper } from './ThemeProvider'
import Community from './pages/Community'
import Auth from './pages/Auth'
import Stories from './components/Stories'
import DevGuide from './pages/DevGuide'
import UserProfile from './pages/UserProfile'
import { BrowserRouter } from 'react-router-dom'
import BlogArticle from './pages/BlogArticle'
import { AuthProvider } from './AuthProvider'
import MyStory from './pages/MyStory'
import CreateArticle from './pages/CreateArticle'
import Chat from './pages/Chat'
import Message from './pages/Message'
import MessageLayout from './Layout/MessageLayout'


function App() {
  return (
    <AuthProvider>
      <ThemeProviderWrapper>
        <BrowserRouter>
          <Routes >
            <Route path='/' element={<Layout />}>
              <Route index element={<LandingPage />} />
              <Route path='/blog' element={<Blogs />} />
              <Route path='/blog/:id' element={<BlogArticle />} />
              <Route path='/dashboard' element={<DashBoard />} />
              <Route path='/playground' element={<PlayGround />} />
              <Route path='/privacy' element={<Privacy />} />
              <Route path='/membership' element={<Membership />} />
              <Route path='/community' element={<Community />} />
              <Route path='/chat' element={<Chat />} />
              <Route path='/auth' element={<Auth />} />
              <Route path='/stories' element={<Stories />} />
              <Route path='/story/:id' element={<MyStory />} />
              <Route path='/devguide' element={<DevGuide />} />
              <Route path='/:id' element={<UserProfile />} />
              <Route path='/create-article' element={<CreateArticle />} />
              <Route path='/404' element={<>Error 404</>} />
            </Route>
            <Route path='/' element={<MessageLayout />}>
              <Route path='/message/:id' element={<Message />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProviderWrapper>
    </AuthProvider>

  )
}

export default App
