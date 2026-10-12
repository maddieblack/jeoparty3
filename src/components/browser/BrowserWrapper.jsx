import React, { useContext, useEffect } from 'react';

import { SocketContext } from '../../context/socket';
import { useOverride } from './hooks/useOverride';
import BrowserOverrideModal from './BrowserOverrideModal';

import backgroundMusicSound from '../../assets/audio/backgroundMusic.mp3';

const BrowserWrapper = (props) => {
    const socket = useContext(SocketContext);
    const { isOverrideOpen, closeOverrideModal } = useOverride();

    useEffect(() => {
        socket.on('disconnect', () => {
            window.location.reload();
        });

        socket.on('board_revealed', (doubleJeoparty) => {
            if (!doubleJeoparty) {
                // const backgroundMusicAudio = new Audio(backgroundMusicSound);
                //
                // backgroundMusicAudio.loop = true;
                // backgroundMusicAudio.volume = 0.04;
                //
                // backgroundMusicAudio.play();
            }
        });

        return () => {
            socket.off('board_revealed');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {props.children}
            <BrowserOverrideModal isOpen={isOverrideOpen} onClose={closeOverrideModal} />
        </div>
    );
};

export default BrowserWrapper;
