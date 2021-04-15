import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { AgGridReact} from 'ag-grid-react';
import 'ag-grid-enterprise';
import { Box} from '@chakra-ui/layout';
import { useColorModeValue } from '@chakra-ui/color-mode';
;

const AgTable = forwardRef((props, ref) => {

  const [gridApi, setGridApi] = useState(null);
  // const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    setGridApi(params.api);
    // setGridColumnApi(params.columnApi);
  };

  useImperativeHandle(ref, () => ({

    exportExcel(){
        gridApi.exportDataAsExcel();
    }

  }))

  
  return (
      <Box
        id="myGrid"
        height={`calc(100vh - ${props.offsetY ? props.offsetY : 76 }px)`}
        width="100%"
        style={{borderWidth: 0}}
        borderWidth={0}
        className={useColorModeValue("ag-theme-alpine", "ag-theme-alpine-dark")}
      >
        <AgGridReact
          rowHeight={60}
          rowSelection={props.rowSelection}
          rowData={props.rowData}
          defaultColDef={{
            flex: 1,
            minWidth: props.minWidth || 128,
            sortable: props.sortable || true,
            filter: props.filter || true
          }}
          onGridReady={onGridReady}
        >
          {props.children}
          
        </AgGridReact>
      </Box>
  );
});

export default AgTable