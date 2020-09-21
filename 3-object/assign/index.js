export default function addSerialNumber(source) {
  const addData = {
    serialNumber: '12345',
    properties: {
      color: 'green',
      status: 'processed'
    }
  };
  return Object.assign(source, addData);
}
