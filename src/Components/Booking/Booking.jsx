import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRangeCalendar } from '@mui/x-date-pickers-pro/DateRangeCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import './Booking.scss';
var number = 1;
const Booking = () => {
  const [rooms, setRooms] = useState([]);


  const handleAdd = () => {
    number++;
    setRooms([...rooms, number]);
  };

  const removeRoom = () => {
    setRooms((prevRooms) => prevRooms.slice(0, prevRooms.length - 1));
  };

  return (
    <div className="booking">
      <div className='booking_upper'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div className='booking_calendar_wrapper'>
            <h2>DATES</h2>
            <DateRangeCalendar disablePast className='booking_calendar' />
          </div>
        </LocalizationProvider>
        <div className='booking_details_wrapper'>
          <div className='booking_details'>
            <h2>ROOMS AND GUESTS</h2>
            <div className='booking_detail_wrapper'>
              <div className='booking_detail'>
                <label>room 1</label>
                <div className='select_wrapper'>
                  <label htmlFor='booking_select'>Adults</label>
                  <select value={1} className='booking_select' name='adults' id=''>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select>
                </div>
                <div className='select_wrapper'>
                  <label htmlFor='booking_select'>Children</label>
                  <select value={0} className='booking_select' name='children' id=''>
                    <option value='0'></option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                  </select>
                </div>
              </div>
              {rooms.map((room, id) => (
                <div className='booking_detail_new' key={room} id={id}>
                  <label>room {id + 2}</label>
                  <div className='select_wrapper'>
                    <label htmlFor='booking_select'>Adults</label>
                    <select className='booking_select' name='adults' id=''>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                    </select>
                  </div>
                  <div className='select_wrapper'>
                    <label htmlFor='booking_select'>Children</label>
                    <select className='booking_select' name='children' id=''>
                      <option value='0'></option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                    </select>
                  </div>
                  <button onClick={() => removeRoom(room)}>
                    <i className='fa-solid fa-close'></i>
                  </button>
                </div>
              ))}
            </div>
            <button className='add_btn' onClick={handleAdd}>ADD ROOM <i className='fa-solid fa-plus'></i></button>
          </div>
        </div>
      </div>
      <div className="booking_bottom">
        <div className="availability">
          <p>check - in </p>
          <p>check - out</p>
          <button className='check-btn'>CHECK</button>
        </div>
      </div>

    </div>

  );

};

export default Booking;
