import React, { useContext, useState } from 'react';
import { Upload, Button, Progress, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import Papa from 'papaparse';
import { DataContext } from '../context/DataContext';

const CSVUpload = () => {
  const { setData } = useContext(DataContext);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleUpload = ({ file }) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      Papa.parse(e.target.result, {
        header: true,
        skipEmptyLines: true,
        step: (results) => {
          setUploadProgress((prev) => prev + (100 / file.size));
        },
        complete: (results) => {
          setData(results.data);
          setUploadProgress(100);
          message.success('CSV upload complete');
        },
        error: () => {
          message.error('Error during upload');
        },
      });
    };
    reader.readAsText(file);
  };

  return (
    <div>
      <Upload
        customRequest={handleUpload}
        accept=".csv"
        showUploadList={false}
      >
        <Button icon={<UploadOutlined />}>Upload CSV</Button>
      </Upload>
      {uploadProgress > 0 && <Progress percent={uploadProgress} />}
    </div>
  );
};

export default CSVUpload;
