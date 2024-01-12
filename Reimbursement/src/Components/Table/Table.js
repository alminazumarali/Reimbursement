import React from 'react';
import Search from '../Search/Search';
import './Table.scss'
import { IoEye } from "react-icons/io5";

function Table({ Data }) {
    const headers = Object.keys(Data[0]);

    return (
        <div className='TableContainer'>
        <table>
            <thead>
            <tr>
                {headers.map((key, index) => (
                <th key={index}>{key}</th>
                ))}
                <th>
                    Action
                </th>
            </tr>
            </thead>
            <tbody className='tbody'>
            {Data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                {headers.map((key, cellIndex) => (
                    <td key={cellIndex}>{row[key]}</td>
                ))}
                <td><IoEye /></td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Table;
