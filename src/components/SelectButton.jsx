import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { SearchContext } from '../context/SearchContext';
import { useContext, useState } from 'react';

export default function SelectButton() {
    const { setSort, sort } = useContext(SearchContext);

    const handleChange = (event) => {
        setSort(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120, ml: 1, mt: 2 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort}
                    label="Sort"
                    onChange={handleChange}
                >
                    <MenuItem value={'asc'}>Mais antigas</MenuItem>
                    <MenuItem value={'desc'}>Mais novas</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}