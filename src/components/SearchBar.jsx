import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
import { SearchContext } from '../context/SearchContext';
import { useContext } from 'react';

export default function SearchBar() {
    const { search, setSearch, setClicked } = useContext(SearchContext);

    const matches = useMediaQuery(
        json2mq({
            minWidth: 800,
        }),
    );
    return !matches ? (
        <Paper
            component="form"
            sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 200, marginLeft: 10, marginTop: 2, border: '1px solid #9F9F9F', boxSizing: 'border-box', }}
        >
            <InputBase
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                sx={{ ml: 2, flex: 2 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton onClick={() => setClicked(true)} type="button" aria-label="search">
                <SearchIcon sx={{ backgroundColor: '#1E2022', color: '#FFFF', width: 30, height: 30 }} />
            </IconButton>
        </Paper>
    )
        :
        (
            <Paper
                component="form"
                sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 200, marginLeft: 190, marginTop: 2, border: '1px solid #9F9F9F', boxSizing: 'border-box', }}
            >
                <InputBase
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                    sx={{ ml: 2, flex: 2 }}
                    placeholder="Search"
                    inputProps={{ 'aria-label': 'search' }}
                />
                <IconButton onClick={() => setClicked(true)} type="button" aria-label="search">
                    <SearchIcon sx={{ backgroundColor: '#1E2022', color: '#FFFF', width: 30, height: 30 }} />
                </IconButton>
            </Paper>
        );
}