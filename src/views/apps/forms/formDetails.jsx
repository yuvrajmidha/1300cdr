import { Button, ButtonGroup } from '@chakra-ui/button'
import React, { useRef } from 'react'
import { BiExport } from 'react-icons/bi'
import { FaFileExcel, FaFileExport } from 'react-icons/fa'
import { MdSettings } from 'react-icons/md'
import { useHistory } from 'react-router'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import PageHeader from '../../../components/layout-components/pageHeader'
import GridExample from '../../../components/codbrix-components/table'

function FormDetails() {

    const tableRef = useRef();
    let history = useHistory()

    return (
        <>
            <PageHeader back="/app/forms/list" title={"Form Title"} extras={
                <ButtonGroup>
                    <Button onClick={() => history.push("/app/forms/settings/gst-registration")} leftIcon={<MdSettings></MdSettings>}>Settings</Button>
                    <Button onClick={() => tableRef.current.exportExcel()} leftIcon={<FaFileExcel></FaFileExcel>}>Export CSV</Button>
                </ButtonGroup>
            }>

            </PageHeader>
            <GridExample ref={tableRef}></GridExample>
        </>
    )
}

export default FormDetails
