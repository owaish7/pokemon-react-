// List.js

import React from 'react';

const List = ({ pokemon }) => {
  return (
    <table style={styles.table}>
      <thead>
        <tr>
          <th style={styles.tableHeader}>Pokemon Name</th>
        </tr>
      </thead>
      <tbody>
        {pokemon.map((name, index) => (
          <tr key={index}>
            <td style={styles.tableData}>{name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  },
  tableHeader: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  },
  tableData: {
    border: '1px solid #ddd',
    padding: '10px',
  },
};

export default List;
