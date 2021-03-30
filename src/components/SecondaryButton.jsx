import React from 'react';
import Button from '@material-ui/core/Button';

function SecondaryButton({name}) {
    return (
        <div>
            <Button type="submit" variant="contained" style={{fontWeight: 'bold'}} color="secondary">{name}</Button>
        </div>
    )
}

export default SecondaryButton
