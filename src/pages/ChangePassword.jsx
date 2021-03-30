import React from 'react';
import SecondaryButton from '../components/SecondaryButton';
import Box from '@material-ui/core/Box';

function ChangePassword() {
    return (
        <div className="changePasswordOuterContainer">
            <div className="changePasswordInnerContainer">
                <h2>Forgot/Change Password</h2>
                <div className="innerContainerContent">
                    <Box m={1}><SecondaryButton name="Change Password" /></Box>
                    <Box m={1}><SecondaryButton name="Forgot Password" /></Box>
                </div>
            </div>
        </div>
    )
}

export default ChangePassword
