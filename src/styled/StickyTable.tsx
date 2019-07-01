import React from 'react';

import styled from 'styled-components';

export const Row = styled.div`
  display: table-row;
`;

export const Cell = styled.div`
  display: table-cell;
  box-sizing: border-box;
`;

export const Table = styled.div`
  display: table;
  box-sizing: border-box;
`;

const WrapperTable = styled.div<Props>`
  position: relative;
  overflow: auto;
  height: 100%;
  box-sizing: border-box; 
  & ${Row}:nth-child(-n+${props => props.stickyHeaderCount}) ${Cell} {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index: 2;
  }
  & ${Row} ${Cell}:nth-child(-n+${props => props.stickyColumnCount}) {
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 2;
  }
  & ${Row}:nth-child(-n+${props => props.stickyHeaderCount}) ${Cell}:nth-child(-n+${props => props.stickyColumnCount}) {
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 3;
  }
`;

/**
 * StickyTable Component
 * Responsive, dynamically sized fixed headers and columns for tables
 * ------------------------------------------------------------------
 * Intentionally not setting state because we don't want to require
 * a full re-render every time the user scrolls or changes the
 * width of a cell.
 */
type Props = {
  stickyHeaderCount: number,
  stickyColumnCount: number,
  onScroll: () => void,
  children: React.ReactNode,
};
const StickyTable = (props: Props) => {
  /**
   * Get the column and header to render
   * @returns {undefined}
   */
  const stickyColumnCount = Math.min(props.stickyColumnCount || 1, 1);
  const stickyHeaderCount = Math.min(props.stickyHeaderCount || 1, 1);

  return (
    <WrapperTable
      stickyColumnCount={stickyColumnCount}
      stickyHeaderCount={stickyHeaderCount}
    >
      <Table>
        {props.children}
      </Table>
    </WrapperTable>
  );
};

export default StickyTable;
