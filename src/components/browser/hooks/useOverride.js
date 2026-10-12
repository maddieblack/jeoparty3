import React, {useCallback, useEffect, useState} from 'react';

export const useOverride = () => {
    const [isOverrideOpen, changeShowOverrideModal] = useState(false)

    const handleKeyPress = useCallback((event) => {
        if(event.keyCode === 79){ // "o" for override
            changeShowOverrideModal(true)
        }
    }, []);

    const closeOverrideModal = () => changeShowOverrideModal(false)

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return {isOverrideOpen, closeOverrideModal}
};

