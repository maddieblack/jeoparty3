import React, { useContext, useEffect, useState } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import _ from 'lodash';

import { SocketContext } from '../../context/socket';

const modalStyle = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1000,
    },
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '40em',
        backgroundColor: '#060ce9',
        border: '0.2em solid black',
        boxShadow: '0.4em 0.4em black',
        color: 'white',
        fontFamily: 'clue, serif',
    },
};

const Header = styled.h2`
    font-family: board, serif;
    margin-bottom: 0.5em;
`;

const AttemptRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1em;
    padding: 0.5em 0;
    border-bottom: 0.1em solid rgba(255, 255, 255, 0.3);
`;

const AttemptInfo = styled.div`
    flex: 1;
    text-align: left;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const PlayerName = styled.div`
    font-weight: bold;
`;

const AnswerText = styled.div`
    font-style: italic;
    opacity: 0.85;
`;

const DollarValue = styled.span`
    font-family: board, serif;
    color: #d69f4c;
    margin-left: 0.5em;
`;

const ToggleButton = styled.button`
    font-family: clue, serif;
    font-weight: bold;
    padding: 0.4em 0.8em;
    margin-left: 0.3em;
    border: 0.15em solid black;
    cursor: pointer;
    opacity: ${(props) => (props.active ? 1 : 0.4)};
    background-color: ${(props) => (props.correct ? '#009966' : '#CC3333')};
    color: white;
`;

const EmptyMessage = styled.div`
    padding: 1em 0;
`;

const CloseButton = styled.button`
    font-family: clue, serif;
    font-weight: bold;
    padding: 0.4em 1em;
    margin-top: 1em;
    border: 0.15em solid black;
    cursor: pointer;
    background-color: white;
    color: black;
`;

const BrowserOverrideModal = (props) => {
    const socket = useContext(SocketContext);
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        socket.on('override_data', (newAttempts) => {
            setAttempts(newAttempts);
        });

        return () => {
            socket.off('override_data');
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (props.isOpen) {
            socket.emit('request_override_data');
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.isOpen]);

    const handleToggle = (socketId, isCorrect) => {
        socket.emit('override_decision', socketId, isCorrect);
    };

    return (
        <Modal isOpen={props.isOpen} onRequestClose={props.onClose} style={modalStyle} contentLabel={'Score Override'}>
            <Header>Score Override</Header>

            {_.isEmpty(attempts) ?
                <EmptyMessage>No answer from the current clue to override.</EmptyMessage> :
                attempts.map((attempt) => (
                    <AttemptRow key={attempt.socketId}>
                        <AttemptInfo>
                            <PlayerName>{attempt.name}<DollarValue>${attempt.dollarValue}</DollarValue></PlayerName>
                            <AnswerText>{attempt.answer}</AnswerText>
                        </AttemptInfo>

                        <div>
                            <ToggleButton correct active={attempt.isCorrect} onClick={() => handleToggle(attempt.socketId, true)}>Correct</ToggleButton>
                            <ToggleButton active={!attempt.isCorrect} onClick={() => handleToggle(attempt.socketId, false)}>Incorrect</ToggleButton>
                        </div>
                    </AttemptRow>
                ))
            }

            <CloseButton onClick={props.onClose}>Close</CloseButton>
        </Modal>
    );
};

BrowserOverrideModal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

BrowserOverrideModal.defaultProps = {
    isOpen: false,
    onClose: () => {},
};

export default BrowserOverrideModal;
