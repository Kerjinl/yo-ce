import { Routes, Route } from 'react-router-dom';

import App from '../App';
import Home from '../views/home';

export default function router () {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  )
}