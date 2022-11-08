import React, { useEffect } from 'react';


    const UseTitle = title => {
        useEffect(() =>{
            document.title = `${title}- Home Food`
        },[title])
    };


export default UseTitle;