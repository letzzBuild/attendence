import React from 'react';
import Button from '@material-ui/core/Button';

function SecondaryButton({name}) {
    return (
        <div>
            <Button type="submit" variant="contained" color="primary" style={{fontWeight: 'bold'}}>{name}</Button>
        </div>
    )
}

export default SecondaryButton
