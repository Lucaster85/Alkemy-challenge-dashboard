import React from 'react';
import classes from './TableHead.module.css';

const tableHead = props => {
    let ths = props.data.map((th, i) => {
        return <th key={th + i}>{th}</th>
    })
    console.log(props.data);
    return(
    <thead className={classes.TableHead}>
        <tr> {/* colspan="2" */}
            {ths}
        </tr>
    </thead>
)};

export default tableHead;