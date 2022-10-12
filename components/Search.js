import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  search: {
    width: '300px',
    color: 'secondary',
    backgroundColor: 'primary',
    border: '1px solid #fff',
    borderRadius: '10px',
    padding: '10px 15px',
    [theme.breakpoints.down(750)]: {
      width: '250px',
    },
  },
}));

const Search = () => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${search}`);
  };
  const classes = useStyles();
  return (
    <Box component="form" noValidate autoComplete="on" onSubmit={handleSubmit}>
      <input
        placeholder="Search Events ... "
        className={classes.search}
        onChange={handleChange}
      />
    </Box>
  );
};

export default Search;
