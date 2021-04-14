import React, { useRef, useCallback, useState } from 'react'
import { useDrag, useDrop} from 'react-dnd';
import update from 'immutability-helper';
import FieldPanel from '../ui-components/fieldPanel';
import { Box, Flex } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';


const ItemTypes = {
    CARD: 'card',
}

const Card = ({ id, name, placeholder, label, type, rules, index,sendRequest, deleteCard, updateCard, moveCard }) => {
    const ref = useRef(null);
    const [{ handlerId }, drop] = useDrop({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover(item, monitor) {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;
            // Don't replace items with themselves
            if (dragIndex === hoverIndex) {
                return;
            }
            // Determine rectangle on screen
            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            // Get vertical middle
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
            // Determine mouse position
            const clientOffset = monitor.getClientOffset();
            // Get pixels to the top
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;
            // Only perform the move when the mouse has crossed half of the items height
            // When dragging downwards, only move when the cursor is below 50%
            // When dragging upwards, only move when the cursor is above 50%
            // Dragging downwards
            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            // Dragging upwards
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            // Time to actually perform the action
            moveCard(dragIndex, hoverIndex);
            // Note: we're mutating the monitor item here!
            // Generally it's better to avoid mutations,
            // but it's good here for the sake of performance
            // to avoid expensive index searches.
            item.index = hoverIndex;
        },
    });
    const [{ isDragging }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });
    const opacity = isDragging ? 0 : 1;
    drag(drop(ref));
    return (<div ref={ref} style={{opacity }} data-handler-id={handlerId}>
			<FieldPanel onDelete={deleteCard} onChange={sendRequest} onUpdate={updateCard} id={id} name={name} placeholder={placeholder} rules={rules} label={label} type={type}></FieldPanel>
		</div>);
};
const SchemaEditor = ({data, onUpdate}) => {
    {

        const [fields, setFields] = useState([
            {
                id: 0,
                label: "Name",
                type: "text",
                rules: "required|string"
            },
            {
                id: 1,
                label: "Email",
                type: "email",
                rules: "required|email"
            },
            {
                id: 2,
                label: "Message",
                type: "text",
                rules: "required|string"
            }
           
        ]);

        const [status, setStatus] = useState("Default")

        const moveCard = useCallback((dragIndex, hoverIndex) => {
            const dragCard = fields[dragIndex];
            setFields(update(fields, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, dragCard],
                ],
            }));
            sendRequest()
        }, [fields]);

        const updateCard = (id, data) => {
            var newFields = fields
            newFields[id] = data
        }

        const sendRequest = () => {
            console.log("Sending Request");
            setStatus("Saving")
            setTimeout(() => {
                setStatus("Saved")
            }, 2000)
        }

        const deleteCard = (id) => {
            setFields(fields.filter(field => field.id !== id))
            sendRequest()
        }

        const renderField = (field, index) => {
            return (<Card key={field.id} index={index} sendRequest={sendRequest} deleteCard={deleteCard} updateCard={updateCard} moveCard={moveCard} {...field} />);
        };
        return (<>
            <Box py={4}>
                {status === "Default" && "No Changes Yet."}
                {status === "Saving" && "Saving changes..."}
                {status === "Saved" && "All Changes Saved"}
            </Box>
            {fields.map((field, i) => renderField(field, i))}
            <Flex my={4}>
                <Input borderWidth={0} p={8} fontSize="lg" fontWeight="bold" onKeyDown={(ev) => {
                    if (ev.key === 'Enter' && ev.target.value) {
                          setFields([...fields, {
                              id: Math.round(new Date),
                              label: ev.target.value,
                              type: "text",
                              rules: ''
                          }])
                        ev.target.value = ''
                        sendRequest()
                    }
                }} placeholder="Type the name of new field and press enter"></Input>
            </Flex>
        </>);
    }
};

export default SchemaEditor