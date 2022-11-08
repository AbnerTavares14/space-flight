import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {
    return (
        <Paper
            component="form"
            sx={{ p: '1px 4px', display: 'flex', alignItems: 'center', width: 200, marginLeft: 10, marginTop: 2, border: '1px solid #9F9F9F', boxSizing: 'border-box' }}
        >
            <InputBase
                sx={{ ml: 2, flex: 2 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="button" aria-label="search">
                <SearchIcon sx={{ backgroundColor: '#1E2022', color: '#FFFF', width: 30, height: 30 }} />
            </IconButton>
        </Paper>
    );
}