import React, { useEffect } from 'react'
import { Button, ButtonGroup, Collapse, Editable, EditableInput, EditablePreview, Icon, Input, InputGroup, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup, NumberInput, NumberInputField, Select, Switch } from "@chakra-ui/react"
import { Box, Divider, Flex, Heading, HStack, Text} from '@chakra-ui/layout'
import { useColorModeValue } from '@chakra-ui/color-mode'
import { GrDrag } from 'react-icons/gr'
import { FaCaretDown, FaCaretUp, FaTrash } from 'react-icons/fa'

function FieldPanel({id, label, type, rules, onDelete, onChange, onUpdate}) {

    const [showRules, setShowRules] = React.useState(false)
    const [fieldType, setFieldType] = React.useState(type)
    const [fieldLabel, setFieldLabel] = React.useState(label)
    const [fieldRules, setFieldRules] = React.useState(rules)
    const [min, setMin] = React.useState(fieldRules.min || 0)
    const [max, setMax] = React.useState(fieldRules.max || 0)
    const [after, setAfter] = React.useState(fieldRules.after || null)
    const [before, setBefore] = React.useState(fieldRules.before || null)
    const [formats, setFormats] = React.useState(fieldRules.formats || [])
    const [options, setOptions] = React.useState(fieldRules.in || "")
    const [required, setRequired] = React.useState(fieldRules.required || false)

    useEffect(() => {

        setFieldRules({
            required,
            min,
            max,
            before,
            after,
            formats,
            options
        })

        onUpdate(id, {id,
            label: fieldLabel,
            rules: fieldRules,
            type: fieldType
        })

    }, [fieldType])

    return (
        <Box width={["100%","100%","100%","100%","66%"]}my={4} bg={useColorModeValue("#fff", "black")} borderWidth={1} rounded="md">
            <Flex p={4} _hover={!showRules && {background:"#88888811"} } cursor="pointer" onClick={() => setShowRules(true)} alignItems="center" justifyContent="space-between" >
                <Flex alignItems="center">
                    <Icon as={GrDrag} size="24px" cursor="move"></Icon>
                        <Heading mx={4} size="md" >
                            <Editable width="100%" onSubmit={(value) => {
                                    setFieldLabel(value)
                                    onChange()
                                }} defaultValue={label}>
                                <EditablePreview />
                                <EditableInput />
                            </Editable>
                        </Heading>
                </Flex>
                <ButtonGroup>
                    <Select border="none" maxW="128px" defaultValue={fieldType} mr={4} onChange={(e) => {
                        setFieldType(e.target.value)
                        onChange()
                    }} placeholder="Select option">
                        <option value="text">Text</option>
                        <option value="email">Email</option>
                        <option value="html">HTML</option>
                        <option value="image">Image</option>
                        <option value="file">File</option>
                        <option value="array">Array</option>
                        <option value="number">Number</option>
                        <option value="date">Date</option>
                        <option value="select">Select</option>
                    </Select>
                </ButtonGroup>
            </Flex>
            <Collapse in={showRules}>
                <Box my={4} px={8}>
                    <Divider></Divider>
                    {(fieldType === "text" || fieldType === "array" || fieldType === "number" || fieldType === "html" || fieldType === "email") && <Flex borderBottomWidth={1} py={4} alignItems="center" justifyContent="space-between">
                        <Heading size="sm">Range</Heading>
                        <HStack>
                            <NumberInput value={min} onChange={(s, value) => {
                                setMin(value)
                                onChange()
                            }} width="128px">
                                <NumberInputField placeholder="Min"></NumberInputField>
                            </NumberInput>
                            <NumberInput value={max} onChange={(s, value) => {
                                setMax(value)
                                onChange()
                            }} width="128px">
                                <NumberInputField placeholder="Max"></NumberInputField>
                            </NumberInput>
                        </HStack>
                    </Flex>}
                    {fieldType === "date" && <Flex borderBottomWidth={1} py={4} alignItems="center" justifyContent="space-between">
                        <Heading size="sm">Range</Heading>
                        <HStack>
                            <Input value={before} onChange={(e) => {
                                setBefore(e.target.value)
                                onChange()
                            }} type="date"></Input>
                            <Input value={after} onChange={(e) => {
                                setAfter(e.target.value)
                                onChange()
                            }} type="date"></Input>
                        </HStack>
                    </Flex>}
                    {(fieldType === "array" || fieldType === "select") && <Flex borderBottomWidth={1} py={4} alignItems="center" justifyContent="space-between">
                        <Heading size="sm">Options</Heading>
                        <Input value={options} onChange={(e) => {
                                setOptions(e.target.value)
                                onChange()
                            }} placeholder="Values seprated by commas" maxW="320px"></Input>
                    </Flex>}
                    {(fieldType === "file" || fieldType === "image") && <Flex borderBottomWidth={1} py={4} alignItems="center" justifyContent="space-between">
                        <Heading size="sm">Accepted Formats</Heading>
                        <Menu closeOnSelect={false}>
                            <MenuButton as={Button} variant="ghost">
                                png, jpeg, pdf
                            </MenuButton>
                            <MenuList minWidth="240px">
                                <MenuOptionGroup value={formats} onChange={(value) => {
                                    setFormats(value)
                                    onChange()
                                }} title="Images" type="checkbox">
                                    <MenuItemOption value="png">PNG</MenuItemOption>
                                    <MenuItemOption value="jpeg">JPEG</MenuItemOption>
                                    <MenuItemOption value="jpg">JPG</MenuItemOption>
                                    <MenuItemOption value="bmp">BMP</MenuItemOption>
                                    <MenuItemOption value="svg">SVG</MenuItemOption>
                                    <MenuItemOption value="gif">GIF</MenuItemOption>
                                    <MenuItemOption value="webp">WEBP</MenuItemOption>
                                </MenuOptionGroup>
                            </MenuList>
                        </Menu>
                    </Flex>}
                    <Flex pt={4} alignItems="center" justifyContent="space-between">
                        <Button variant="ghost" onClick={() => setShowRules(false)} rightIcon={<FaCaretUp></FaCaretUp>}>Hide</Button>
                        <Flex alignItems="center">
                            <Switch></Switch>
                            <Heading mx={4} mb={1} size="sm">Required</Heading>
                            <Box pl={2} borderStartWidth={1}>
                                <Button minW="48px" variant="ghost" onClick={() => onDelete(id)} ><FaTrash size="16px"></FaTrash></Button>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Collapse>
        </Box>
    )
}

export default FieldPanel