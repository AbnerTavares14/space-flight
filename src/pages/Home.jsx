import SearchBar from "../components/SearchBar";
import SelectButton from "../components/SelectButton";
import styled from "styled-components";
import Button from '@mui/material/Button';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Divider from '@mui/material/Divider';
import { useState, useEffect } from 'react';
import axios from 'axios';
import api from "../services/api";
import Articles from "../components/Articles";
import { margin } from "@mui/system";

export default function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const { data } = await api.getArticles();
                setArticles(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            <Div>
                <SearchBar />
                <SelectButton />
            </Div>
            <Logo>
                <Circule>
                    <RocketLaunchIcon sx={{ width: 100, height: 50, color: '#1E2022' }} />
                </Circule>
                <h1>Space Flight News</h1>
            </Logo>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="horizontal" />
            {articles.map((article, idx) => {
                return (
                    <Articles idx={idx} publishedAt={article.publishedAt} image={article.imageUrl} title={article.title} summary={article.summary} newsSite={article.newsSite} url={article.url} />
                )
            })
            }
            <Point />
            <Point />
            <Point />
            <ContainerButton>

                <Button variant="outlined" sx={{ justifyContent: 'center' }}>
                    Carregar Mais
                </Button>
            </ContainerButton>
        </>
    );
}


const Div = styled.div`
    display: flex;
`

const Point = styled.div`
    width: 20px;
    height: 20px;
    margin: 10px auto;
    /* margin-top: 10px; */
    background-color: #302E53;
`

const ContainerButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 40px;
`

const Circule = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 360px;
    border: 1px solid #1E2022;
    width: 100px;
    height: 100px;
    margin-top: 50px;
`

const Logo = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        font-family: 'Roboto Condensed', sans-serif;
        color: #1E2022;
        font-weight: 400;
        font-size: 26px;
        margin-top: 30px;
    }
`