import { Box } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
export default function Calender() {
  return (
    <Box>
        <GitHubCalendar  username='vishwajeethaldar' 
        hideTotalCount 
        hideColorLegend />
        <ReactTooltip/>
    </Box>
  )
}
