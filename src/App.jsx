import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { SearchProvider } from './context/SearchContext';

export default function App() {
    return (
        <>
            <BrowserRouter>
                <SearchProvider>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </SearchProvider>
            </BrowserRouter>
        </>
    )
}