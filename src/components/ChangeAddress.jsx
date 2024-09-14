import React, { useState } from 'react';

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
    const [newAddress, setNewAddress] = useState("");

    const handleSave = () => {
        if (newAddress.trim() !== "") {
            setAddress(newAddress);
        }
        setIsModalOpen(false);
        setNewAddress(""); // Clear the input after saving
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Enter new address"
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end">
                <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={() => setIsModalOpen(false)}>
                    Cancel
                </button>
                <button className="bg-blue-500 text-white py-2 px-4 rounded" onClick={handleSave}>
                    Save Address
                </button>
            </div>
        </div>
    );
};

export default ChangeAddress;
