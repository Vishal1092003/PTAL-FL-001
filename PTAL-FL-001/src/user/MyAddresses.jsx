import { useState } from "react";
import { Plus, Edit, Trash2, Check, X, MapPin } from "lucide-react";

export default function MyAddresses() {
  // Mock data for addresses
  const initialAddresses = [
    {
      id: 1,
      type: "home",
      name: "Home",
      address: "123 Main St, Apt 4B, New York, NY 10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "work",
      name: "Work",
      address: "456 Business Ave, Floor 12, New York, NY 10005",
      isDefault: false,
    },
    {
      id: 3,
      type: "other",
      name: "Vacation Home",
      address: "789 Beach Blvd, Miami, FL 33139",
      isDefault: false,
    },
  ];

  const [addresses, setAddresses] = useState(initialAddresses);
  const [editingId, setEditingId] = useState(null);
  const [editedAddress, setEditedAddress] = useState({});
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [newAddress, setNewAddress] = useState({
    type: "home",
    name: "",
    address: "",
    isDefault: false,
  });

  const handleEdit = (id) => {
    setEditingId(id);
    const addressToEdit = addresses.find((addr) => addr.id === id);
    setEditedAddress({ ...addressToEdit });
  };

  const handleSaveEdit = () => {
    setAddresses(
      addresses.map((addr) =>
        addr.id === editingId ? { ...editedAddress } : addr
      )
    );
    setEditingId(null);
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleDelete = (id) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
    // If deleting default, set the first remaining as default
    if (addresses.find((addr) => addr.id === id)?.isDefault) {
      if (addresses.length > 1) {
        const newDefaultId = addresses.find((addr) => addr.id !== id).id;
        setAddresses(
          addresses
            .filter((addr) => addr.id !== id)
            .map((addr, index) => ({
              ...addr,
              isDefault: index === 0,
            }))
        );
      }
    }
  };

  const handleSetDefault = (id) => {
    setAddresses(
      addresses.map((addr) => ({
        ...addr,
        isDefault: addr.id === id,
      }))
    );
  };

  const handleAddNew = () => {
    setIsAddingNew(true);
    setNewAddress({
      type: "home",
      name: "",
      address: "",
      isDefault: false,
    });
  };

  const handleSaveNew = () => {
    const newId = Math.max(...addresses.map((addr) => addr.id), 0) + 1;
    const updatedAddresses = [
      ...addresses.map((addr) => ({
        ...addr,
        isDefault: newAddress.isDefault ? false : addr.isDefault,
      })),
      {
        ...newAddress,
        id: newId,
      },
    ];
    setAddresses(updatedAddresses);
    setIsAddingNew(false);
  };

  const handleCancelNew = () => {
    setIsAddingNew(false);
  };

  const getTypeColor = (type) => {
    switch (type) {
      case "home":
        return "bg-blue-100 text-blue-800";
      case "work":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">My Addresses</h2>
        <button
          onClick={handleAddNew}
          className="flex items-center gap-2 bg-[#b3332b] text-white px-4 py-2 rounded-md hover:bg-[#9a2b24] transition-colors"
        >
          <Plus size={18} />
          Add New Address
        </button>
      </div>

      {/* Add New Address Form */}
      {isAddingNew && (
        <div className="bg-white rounded-lg shadow-md p-5 mb-6 border border-gray-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <MapPin size={18} className="text-[#b3332b]" />
            Add New Address
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Type
                </label>
                <select
                  value={newAddress.type}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, type: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                >
                  <option value="home">Home</option>
                  <option value="work">Work</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Name
                </label>
                <input
                  type="text"
                  value={newAddress.name}
                  onChange={(e) =>
                    setNewAddress({ ...newAddress, name: e.target.value })
                  }
                  placeholder="e.g. Summer House"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Address
              </label>
              <textarea
                rows={3}
                value={newAddress.address}
                onChange={(e) =>
                  setNewAddress({ ...newAddress, address: e.target.value })
                }
                placeholder="Street, City, State, ZIP Code"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
              />
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={newAddress.isDefault}
                  onChange={(e) =>
                    setNewAddress({
                      ...newAddress,
                      isDefault: e.target.checked,
                    })
                  }
                  className="h-4 w-4 text-[#b3332b] focus:ring-[#b3332b] border-gray-300 rounded"
                />
                <span className="text-sm text-gray-700">
                  Set as default address
                </span>
              </label>
              <div className="flex gap-2">
                <button
                  onClick={handleCancelNew}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveNew}
                  className="px-4 py-2 bg-[#b3332b] text-white rounded-md hover:bg-[#9a2b24]"
                >
                  Save Address
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Address List */}
      <div className="space-y-4">
        {addresses.length === 0 ? (
          <div className="text-center py-10 bg-white rounded-lg shadow-sm">
            <p className="text-gray-500">
              You don't have any saved addresses yet.
            </p>
          </div>
        ) : (
          addresses.map((address) => (
            <div
              key={address.id}
              className={`bg-white rounded-lg shadow-sm p-5 border ${
                address.isDefault ? "border-[#b3332b]" : "border-gray-200"
              }`}
            >
              {editingId === address.id ? (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Type
                      </label>
                      <select
                        value={editedAddress.type}
                        onChange={(e) =>
                          setEditedAddress({
                            ...editedAddress,
                            type: e.target.value,
                          })
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                      >
                        <option value="home">Home</option>
                        <option value="work">Work</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Address Name
                      </label>
                      <input
                        type="text"
                        value={editedAddress.name}
                        onChange={(e) =>
                          setEditedAddress({
                            ...editedAddress,
                            name: e.target.value,
                          })
                        }
                        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Address
                    </label>
                    <textarea
                      rows={3}
                      value={editedAddress.address}
                      onChange={(e) =>
                        setEditedAddress({
                          ...editedAddress,
                          address: e.target.value,
                        })
                      }
                      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-[#b3332b] focus:border-transparent"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={editedAddress.isDefault}
                        onChange={(e) =>
                          setEditedAddress({
                            ...editedAddress,
                            isDefault: e.target.checked,
                          })
                        }
                        className="h-4 w-4 text-[#b3332b] focus:ring-[#b3332b] border-gray-300 rounded"
                      />
                      <span className="text-sm text-gray-700">
                        Set as default address
                      </span>
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={handleCancelEdit}
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveEdit}
                        className="px-4 py-2 bg-[#b3332b] text-white rounded-md hover:bg-[#9a2b24]"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          address.type
                        )}`}
                      >
                        {address.type.charAt(0).toUpperCase() +
                          address.type.slice(1)}
                      </span>
                      {address.isDefault && (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEdit(address.id)}
                        className="text-gray-500 hover:text-[#b3332b] p-1"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDelete(address.id)}
                        className="text-gray-500 hover:text-red-600 p-1"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold">{address.name}</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {address.address}
                  </p>
                  {!address.isDefault && (
                    <button
                      onClick={() => handleSetDefault(address.id)}
                      className="mt-3 text-sm text-[#b3332b] hover:underline"
                    >
                      Set as default
                    </button>
                  )}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
