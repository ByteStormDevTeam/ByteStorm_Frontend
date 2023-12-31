import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './containers/HomePage.tsx';
import BlogPage from './containers/BlogPage.tsx';
import LeaderboardPage from './containers/LeaderboardPage.tsx';
import ScorePage from './containers/ScorePage.tsx';
import NewBlogPage from './containers/NewBlogPage.tsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {},
        mutations: {},
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<HomePage />} />
                        <Route
                            path="blogpost/:id"
                            element={<BlogPage />}></Route>
                        <Route
                            path="newblogpost_bytestormdevteam123"
                            element={<NewBlogPage />}
                        />
                        <Route path="leaderboard" element={<LeaderboardPage />}>
                            <Route path=":id" element={<ScorePage />} />
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
