import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const SearchStub = ({setItemList}) => {

  const [value, setValue] = React.useState(''); //value for search bar

  const handleChange = (event) => {
    if (event.key === 'Enter') {
      console.log('do validate: ', value);
    } else {
      const targetVal = event.target.value;
      setValue(targetVal);
    }
  };

  const handleSearch = () => {
    console.log('searching for: ', value);
    axios.get(`/search/${value}`)
      .then(result => {
        setValue('');
        setItemList(result.data);
      })
      .catch(err => console.log('error in handleSearch: ', err, `/search/${value}`));
  };

  React.useEffect(() => {
    return;
  }, [value]);

  return (

    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        onChange={handleChange}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
      />
    </Search>
  );
};

export default SearchStub;