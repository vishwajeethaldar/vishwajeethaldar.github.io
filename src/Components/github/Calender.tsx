import { Box } from '@chakra-ui/react';
import React from 'react'
import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from 'react-tooltip';
import themeColor from '../../utils/Colors';
export default function Calender() {
  return (
    <Box border={`1px double ${themeColor().color2}`} p={"10px"} borderRadius={"10px"}>
        <GitHubCalendar  username='vishwajeethaldar' 
        hideTotalCount 
        hideColorLegend />
        <ReactTooltip/>
    </Box>
  )
}
