import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Landing from './pages/landing';
import NotFound from './pages/not-found';
import SignIn from './pages/sign-in';
import SignUp from './pages/sign-up';
import Diary from './pages/diary';
import DiaryDetail from './pages/diary-detail';
import DiaryRegister from './pages/diary-register';
import Profile from './pages/profile';
import PublicDiary from './pages/public-diary';
import WriteHereMaP from './pages/write-here-map';
import DiaryCalendar from './pages/calendar';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/diary-detail" element={<DiaryDetail />} />
          <Route path="/diary-register" element={<DiaryRegister />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/public-diary" element={<PublicDiary />} />
          <Route path="/write-here-map" element={<WriteHereMaP />} />
          <Route path="/diary-calendar" element={<DiaryCalendar />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
