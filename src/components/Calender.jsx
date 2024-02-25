import React from 'react';
import Event from './Event';

const Calender = () => {
    return (
        <div className="Calender">
            {/* create a table */}
            <table>
                <thead>
                    {/* inside the table, create a row with 7 days */}
                    <tr>
                        {/*  create the table header for each day */}  
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        
                    </tr>
                </thead>
                    {/*  create a table body */}
                    <tbody>
                        {/*  inside the table body, create 10 rows for the activities */}
                        <tr>
                            {/*  inside each table row, create 8 table data cells */}
                            <td className="time">8 am</td>
                            <Event event='Ba Na Hills ⛰️' color ='green'/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='Be Man 🦀' color ='green'/>
                            <td></td>
                            
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">9 am</td>
                            <td></td>
                            <Event event='Cong caphe ☕' color ='pink'/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">10 am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">11 am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='Linh Ung Pagoda' color ='green'/>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">12 pm</td>
                            <td></td>
                            <td></td>
                            <Event event='My Khe Beach 🏖️' color ='blue'/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">1 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='Dragon Bridge 🌉' color ='blue'/>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">2 pm</td>
                            <td></td>
                            <Event event='Marble Mt. 🏔️' color ='blue'/>
                            <td></td>
                            <td></td>

                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">3 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">4 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <Event event='Han Market 🛒' color ='blue'/>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td className="time">5 pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            
                            <td></td>
                            <Event event='Cham Museum' color ='pink'/>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
            </table>
        </div>
    )

}

export default Calender;