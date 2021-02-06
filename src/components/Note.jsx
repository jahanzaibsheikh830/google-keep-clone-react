import React from 'react'
import '../index.css'
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
export default function Note(props) {

    function delNote() {
        props.del(props.id)
    }
    return (
        <div className="container">
            <div className="notes">
                <h3>{props.title}</h3>
                <p>{props.des}</p>
                <Button variant="contained" color="primary" className="btn1" onClick={delNote}>
                    <DeleteIcon />
                </Button>
            </div>
        </div>
    )
}