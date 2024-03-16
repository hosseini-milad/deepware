import { useState } from 'react';
import Carousel from '../../../components/Carousel/Carousel';
import ServerStatus from './ServerStatus';
import mocks from './mocks.json';
import translation from '../../../translate/server-status';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const usageValues = ['Critical', 'High', 'Normal', 'Low', 'Idle'];
const sortOptions = ['usage', 'cpu_usage', 'ram_usage'];
const filterOptions = ['network1', 'network2'];

export default function ServerStatusPane({ data, className, lang }) {
  const [sortBy, setSortBy] = useState('usage');
  const [filterBy, setFilterBy] = useState([]);

  const sortServers = (data) => {
    return data.sort((server1, server2) => {
      const value1 = server1[sortBy];
      const value2 = server2[sortBy];

      return sortBy === 'usage'
        ? usageValues.indexOf(value1) - usageValues.indexOf(value2)
        : value2 - value1;
    });
  };

  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
  };

  const filterByNetwork = (networks) => {
    return filterBy.length > 0
      ? /*data*/ mocks.filter((server) => filterBy.includes(server.network))
      : /*data*/ mocks;
  };

  const handleFilterByChange = (event) => {
    setFilterBy(event.target.value);
  };

  const Slides = sortServers(filterByNetwork(mocks)).map((status) => (
    <ServerStatus data={status} />
  ));

  return (
    <div className={`card ${className}`}>
      <div className="card-header pb-0">
        <h6>{translation.header[lang]}</h6>
      </div>

      <div className="card-body">
        <div className="d-flex gap-1">
          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="server-status-filter-label">
              {translation.filterInputLabel[lang]}
            </InputLabel>
            <Select
              labelId="server-status-filter-label"
              id="server-status-filter-input"
              label={translation.filterInputLabel[lang]}
              value={filterBy}
              multiple
              onChange={handleFilterByChange}
            >
              {filterOptions.map((filter) => (
                <MenuItem value={filter} key={filter}>
                  {filter}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 100 }}>
            <InputLabel id="server-status-sort-label">
              {translation.sortInputLabel[lang]}
            </InputLabel>
            <Select
              labelId="server-status-sort-label"
              id="server-status-sort-input"
              value={sortBy}
              label={translation.sortInputLabel[lang]}
              onChange={handleSortByChange}
            >
              {sortOptions.map((sort) => (
                <MenuItem value={sort} key={sort}>
                  {sort}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <Carousel slides={Slides}></Carousel>
      </div>
    </div>
  );
}
