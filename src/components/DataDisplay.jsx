import React, { useContext, useState } from 'react';
import { Table, Pagination } from 'antd';
import { DataContext } from '../context/DataContext';

const DataDisplay = () => {
  const { data } = useContext(DataContext);
  const [current, setCurrent] = useState(1);
  const pageSize = 10;

  const columns = data.length
    ? Object.keys(data[0]).map((key) => ({
        title: key,
        dataIndex: key,
        key,
      }))
    : [];

  return (
    <div>
      <Table
        dataSource={data.slice((current - 1) * pageSize, current * pageSize)}
        columns={columns}
        rowKey={(record, index) => index}
        pagination={false}
      />
      <Pagination
        current={current}
        total={data.length}
        pageSize={pageSize}
        onChange={setCurrent}
      />
    </div>
  );
};

export default DataDisplay;
