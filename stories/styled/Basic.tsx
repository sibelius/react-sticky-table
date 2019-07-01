import React from 'react';
import styled from 'styled-components';

import { StickyTable, Row, Cell } from '../../src/styled';

const CustomCell = styled(Cell)`
  padding: 0.5rem 0.75rem;
  border-bottom: 2px solid #e5e5e5;
  background-color: #fff;
`;

const Basic = () => {
  const renderData = () => {
    const rows = [...Array(50).keys()];
    const cells = [...Array(50).keys()];

    return (
      <>
        {rows.map((_, r) => (
          <Row key={r}>
            {cells.map((_, c) => (
              <CustomCell key={c}>
                {(r === 0 ? 'Header ' : 'Cell ') + c}
              </CustomCell>
            ))}
          </Row>
        ))}
      </>
    );
  };

  return (
    <div>
      <div style={{width: '100%', height: '200px'}}>
        <StickyTable>
          {renderData()}
        </StickyTable>
      </div>
    </div>
  );
};

export default Basic;
