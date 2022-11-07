import React, { memo } from 'react';

function UseCallbackChild() {
    console.log("reloading");
    return (
        <div>
        <h1>child</h1>
        </div>
    )
}

export default memo(UseCallbackChild);