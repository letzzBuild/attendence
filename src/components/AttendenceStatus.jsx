import React from 'react'

function AttendenceStatus() {
    return (
        <div>
            <table style={{padding:10,marginLeft:10,marginTop:0}}>
                <th>Percentage</th>
                <th>Status</th>
                <tr>
                    <td>85%-100%</td>
                    <td>Excellent</td>
                </tr>
                <tr>
                    <td>70%-85%</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>50%-70%</td>
                    <td>Bad</td>
                </tr>
                <tr>
                   <td>&lt50%</td>
                    <td>Bad</td>
                </tr>
            </table>
        </div>
    )
}

export default AttendenceStatus
