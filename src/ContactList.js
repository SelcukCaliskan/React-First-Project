import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

export const ContactList = ({ value, setContacts }) => {
    const [characters, updateCharacters] = useState(value);

    useEffect(() => {
        if (characters.length !== value.length || characters.find((character) => {
            return !value.find((it) => it === character)
        }) === -1) {
            updateCharacters(value);
        }
    });

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        items.map((value, index) => {
            value.phoneNumber = index;
        });
        updateCharacters(items);
        setContacts(items);
    }

    return (
        <div className="App"  >
            <header className="App-header">
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {characters?.map(({ id, fullName, address, phoneNumber, email }, index) => {
                                    return (
                                        <Draggable key={id} draggableId={id} index={index}>
                                            {(provided) => (
                                                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <p>
                                                        {fullName}
                                                    </p>
                                                </li>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
        </div>
    );
}
