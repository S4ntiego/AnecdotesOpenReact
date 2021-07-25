import React from 'react'

const Statistic = (props) => {
    return (
        <tr>
            <th>{props.text}</th>
            <td>{props.value}</td>
        </tr>
    )
}
export default Statistic