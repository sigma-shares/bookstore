import React from 'react';
import s from '../Showcase/Showcase.module.scss';
import AddIcon from '@material-ui/icons/Add';

function AddBook() {
    return (
        <button className={s.button}>
                <AddIcon color='disabled' fontSize='large' />
            </button>
    )
}

export default AddBook;