// https://fullcalendar.io/demos

import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import formatDate  from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";

//test
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  /**
   * When you click on the calendar, this function will trigger.
   * @param {*} selected
   */
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event.");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect(); //once we click on the date, we can unselect it immidiately.

    if (title) {
      calendarApi.addEvent({
        //this will add the event in to the calendar.
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  /**
   * This function will trigger if you click on an event.
   */
  const handleEventclick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event? '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };
  return (
    <Box m="20px">
      <Header title="CALENDAR" subtitle="Full Calendar Interactive Page" />
      <Box display="flex" justifyContent="space-between">
        {/* CALENDAR SIDEBAR */}
        {/* This flex syntax represents "grow", "shrink" and percentage of space */}
        <Box
          flex="1 1 20%"
          backgroundColor={colors.primary[400]}
          p="15px"
          borderRadius="4px"
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {/* Want to map through the events. */}
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {
                        formatDate(event.start,
                        {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })
                      }
                      
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Box>
        {/* CALENDAR */}
        <Box flex = "1 1 100%" ml="15px">
            <FullCalendar
                heigth="75vh"
                plugins={[
                    dayGridPlugin,
                    timeGridPlugin,
                    interactionPlugin,
                    listPlugin
                ]}
                headerToolbar={{
                    left: "prev, next today",
                    center: "title",
                    right: "dayGridMonth, timeGridWeek, timeGridDay, listMonth"
                }}
                initialView="dayGridMonth" //default setting of the month
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                select={handleDateClick} //running the event handler when the date gets clicked.
                eventClick={handleDateClick}
                eventsSet={(events) => setCurrentEvents(events)} 
                initialEvents={[
                    {id: "1234", title:"Bursdag", date:"2023-03-21"},
                    {id: "4321", title:"Engelsktest", date:"2023-02-18"}
                ]}
            />

        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
