import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as XLSX from 'xlsx';

function Admin() {
  const [instrumentName, setInstrumentName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [instruments, setInstruments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedInstrument, setSelectedInstrument] = useState(null);

  useEffect(() => {
    const storedInstruments = JSON.parse(localStorage.getItem('instruments'));
    if (storedInstruments) {
      setInstruments(storedInstruments);
    }
  }, []);

  const handleInsert = () => {
    if (instrumentName.trim() && quantity.trim() && price.trim()) {
      // All fields are filled
      const existingInstrument = instruments.find(item => item.instrumentName === instrumentName);
      if (existingInstrument) {
        // Update existing entry
        const updatedInstruments = instruments.map(item => {
          if (item.instrumentName === instrumentName) {
            return {
              ...item,
              quantity: parseInt(quantity),
              price: parseFloat(price)
            };
          }
          return item;
        });
        setInstruments(updatedInstruments);
        localStorage.setItem('instruments', JSON.stringify(updatedInstruments));
        toast.success('Instrument updated successfully!');
      } else {
        // Insert new entry
        const newInstrument = {
          id: Date.now(),
          instrumentName,
          quantity: parseInt(quantity),
          price: parseFloat(price)
        };
        const updatedInstruments = [...instruments, newInstrument];
        setInstruments(updatedInstruments);
        localStorage.setItem('instruments', JSON.stringify(updatedInstruments));
        toast.success('Instrument inserted successfully!');
      }
      setInstrumentName('');
      setQuantity('');
      setPrice('');
    } else {
      // One or more fields are empty
      toast.error('Please fill in all fields.');
    }
  };
  

  const handleDelete = (id) => {
    const updatedInstruments = instruments.filter(item => item.id !== id);
    setInstruments(updatedInstruments);
    localStorage.setItem('instruments', JSON.stringify(updatedInstruments));
    toast.success('Instrument deleted successfully!');
  };

  const handleEdit = (instrument) => {
    setSelectedInstrument(instrument);
    setInstrumentName(instrument.instrumentName);
    setQuantity(instrument.quantity.toString());
    setPrice(instrument.price.toString());
    setShowModal(true);
  };

  const handleUpdate = () => {
    if (instrumentName && quantity && price && selectedInstrument) {
      const updatedInstruments = instruments.map(item => {
        if (item.id === selectedInstrument.id) {
          return {
            ...item,
            instrumentName,
            quantity: parseInt(quantity),
            price: parseFloat(price)
          };
        }
        return item;
      });
      setInstruments(updatedInstruments);
      localStorage.setItem('instruments', JSON.stringify(updatedInstruments));
      setShowModal(false);
      setSelectedInstrument(null);
      setInstrumentName('');
      setQuantity('');
      setPrice('');
      toast.success('Instrument updated successfully!');
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedInstrument(null);
    setInstrumentName('');
    setQuantity('');
    setPrice('');
  };


  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(instruments);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Instruments');
    XLSX.writeFile(workbook, 'instruments.xlsx');
  };


  return (
    <div className="container mx-auto ">
      <div className="flex mb-4 text-center my-5 flex justify-center items-center">
        <input type="text" className="p-2 mr-2 border rounded" placeholder="Instrument Name" value={instrumentName} onChange={(e) => setInstrumentName(e.target.value)} />
        <input type="number" className="p-2 mr-2 border rounded" placeholder="Quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        <input type="number" className="p-2 mr-2 border rounded" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} />
        <button className="p-2 bg-blue-500 text-white rounded" onClick={selectedInstrument ? handleUpdate : handleInsert}>{selectedInstrument ? 'Update' : 'Insert'}</button>
        <button className="mx-5 p-2 bg-green-500 text-white rounded mr-2" onClick={exportToExcel}>
          Export to Excel
        </button>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2"># ID</th>
            <th className="border px-4 py-2">Instrument Name</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {instruments.map(instrument => (
            <tr key={instrument.id}>
              <td className="border px-4 py-2">{instrument.id}</td>
              <td className="border px-4 py-2">{instrument.instrumentName}</td>
              <td className="border px-4 py-2">{instrument.quantity}</td>
              <td className="border px-4 py-2">{instrument.price}</td>
              <td className="border px-4 py-2">
                <button className="mr-2 px-2 py-1 bg-green-500 text-white rounded" onClick={() => handleEdit(instrument)}>Edit</button>
                <button className="px-2 py-1 bg-red-500 text-white rounded" onClick={() => handleDelete(instrument.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-8 rounded shadow-lg">
            <h2 className="text-xl font-bold mb-4">Edit Instrument</h2>
            <label className="block mb-2">Instrument Name:</label>
            <input type="text" className="p-2 mb-2 border rounded w-full" value={instrumentName} onChange={(e) => setInstrumentName(e.target.value)} />
            <label className="block mb-2">Quantity:</label>
            <input type="number" className="p-2 mb-2 border rounded w-full" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
            <label className="block mb-2">Price:</label>
            <input type="number" className="p-2 mb-2 border rounded w-full" value={price} onChange={(e) => setPrice(e.target.value)} />
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleUpdate}>Update</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded ml-2" onClick={closeModal}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  );
}

export default Admin;
