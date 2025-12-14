import React, { useState, useRef } from 'react';
import { useProductContext } from '../context/ProductContext';
import { Save, Search, Upload, X, PlusCircle, Trash2 } from 'lucide-react';

const AdminPanel = () => {
    const { products, categories, updateProduct, addProduct, deleteProduct } = useProductContext();
    const [searchTerm, setSearchTerm] = useState('');
    const [editingId, setEditingId] = useState(null);
    const [editForm, setEditForm] = useState({});
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProductForm, setNewProductForm] = useState({
        name: '',
        category: 'sofas',
        subCategory: '',
        image: '',
        description: '',
        price: 'Custom'
    });
    const fileInputRef = useRef(null);
    const newProductFileInputRef = useRef(null);

    // Custom modal states
    const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
    const [deleteConfirm, setDeleteConfirm] = useState({ show: false, productId: null, productName: '' });

    // Filter products
    const filteredProducts = products.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toString().includes(searchTerm)
    );

    const handleEditClick = (product) => {
        setEditingId(product.id);
        setEditForm(product);
    };

    const handleSave = () => {
        updateProduct(editForm);
        setEditingId(null);
        setNotification({ show: true, message: 'Product updated successfully!', type: 'success' });
        setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
    };

    // Compress and convert image to Base64
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                // Resize logic to prevent LocalStorage quota overflow
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;
                const scaleSize = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleSize;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7); // 70% quality
                setEditForm({ ...editForm, image: compressedBase64 });
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    // Handle new product image upload
    const handleNewProductImageUpload = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                const MAX_WIDTH = 800;
                const scaleSize = MAX_WIDTH / img.width;
                canvas.width = MAX_WIDTH;
                canvas.height = img.height * scaleSize;

                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

                const compressedBase64 = canvas.toDataURL('image/jpeg', 0.7);
                setNewProductForm({ ...newProductForm, image: compressedBase64 });
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    };

    // Handle adding new product
    const handleAddProduct = () => {
        if (!newProductForm.name || !newProductForm.image || !newProductForm.description) {
            setNotification({ show: true, message: 'Please fill in all required fields', type: 'error' });
            setTimeout(() => setNotification({ show: false, message: '', type: 'error' }), 3000);
            return;
        }

        addProduct(newProductForm);
        setShowAddModal(false);
        setNewProductForm({
            name: '',
            category: 'sofas',
            subCategory: '',
            image: '',
            description: '',
            price: 'Custom'
        });
        setNotification({ show: true, message: 'New product added successfully!', type: 'success' });
        setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
    };

    // Get subcategories for selected category
    const getSubCategories = (categoryId) => {
        const category = categories.find(c => c.id === categoryId);
        return category?.subCategories || [];
    };

    // Handle delete with confirmation
    const handleDelete = (productId, productName) => {
        setDeleteConfirm({ show: true, productId, productName });
    };

    // Confirm delete action
    const confirmDelete = () => {
        deleteProduct(deleteConfirm.productId);
        setDeleteConfirm({ show: false, productId: null, productName: '' });
        setNotification({ show: true, message: 'Product deleted successfully!', type: 'success' });
        setTimeout(() => setNotification({ show: false, message: '', type: 'success' }), 3000);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-10">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900">Product Manager</h1>
                        <p className="text-sm text-gray-500 mt-1">
                            Local Admin Mode. Images are compressed and saved to browser storage.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowAddModal(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-lg transition-all"
                    >
                        <PlusCircle size={20} />
                        Add New Product
                    </button>
                </div>

                {/* Search */}
                <div className="bg-white p-4 rounded-xl shadow-sm mb-6 flex items-center gap-4">
                    <Search className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products by name or ID..."
                        className="flex-1 outline-none text-gray-700"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                {/* List */}
                <div className="grid grid-cols-1 gap-6">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
                            {/* Image Preview */}
                            <div className="w-full md:w-48 h-48 bg-gray-100 shrink-0 relative flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-full object-contain p-2"
                                />
                                <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                                    ID: {product.id}
                                </div>
                            </div>

                            {/* Edit Form or Display */}
                            <div className="p-6 flex-1">
                                {editingId === product.id ? (
                                    <div className="space-y-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
                                            <input
                                                type="text"
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                value={editForm.name}
                                                onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                                            />
                                        </div>

                                        {/* Image Upload Input */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                                            <div className="flex items-center gap-4">
                                                <input
                                                    type="file"
                                                    ref={fileInputRef}
                                                    onChange={handleImageUpload}
                                                    accept="image/*"
                                                    className="hidden"
                                                />
                                                <button
                                                    onClick={() => fileInputRef.current.click()}
                                                    className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors"
                                                >
                                                    <Upload size={16} />
                                                    {editForm.image && editForm.image.startsWith('data:') ? 'Change Image' : 'Upload New Image'}
                                                </button>

                                                {/* Mini preview of selected image */}
                                                {editForm.image && (
                                                    <div className="h-12 w-12 rounded overflow-hidden border border-gray-200">
                                                        <img src={editForm.image} alt="Preview" className="w-full h-full object-cover" />
                                                    </div>
                                                )}
                                            </div>
                                            <p className="text-xs text-gray-500 mt-2">
                                                Supported formats: JPG, PNG. Image will be auto-resized to optimize storage.
                                            </p>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                            <textarea
                                                className="w-full p-2 border border-gray-300 rounded-md"
                                                rows="2"
                                                value={editForm.description}
                                                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                                            />
                                        </div>
                                        <div className="flex gap-3 mt-4">
                                            <button
                                                onClick={handleSave}
                                                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                                            >
                                                <Save size={18} /> Save Changes
                                            </button>
                                            <button
                                                onClick={() => setEditingId(null)}
                                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="flex justify-between h-full">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                                            <p className="text-sm text-gray-500 mb-2 capitalize">{product.category} • {product.subCategory}</p>
                                            <p className="text-gray-600">{product.description}</p>
                                        </div>
                                        <div className="ml-4 flex flex-col gap-2">
                                            <button
                                                onClick={() => handleEditClick(product)}
                                                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 font-medium transition-colors"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(product.id, product.name)}
                                                className="px-4 py-2 border border-red-600 text-red-600 rounded-lg hover:bg-red-50 font-medium transition-colors flex items-center justify-center gap-2"
                                            >
                                                <Trash2 size={16} />
                                                Delete
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Add New Product Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
                                <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
                                <button
                                    onClick={() => setShowAddModal(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="p-6 space-y-4">
                                {/* Product Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        placeholder="e.g., Premium Leather Sofa"
                                        value={newProductForm.name}
                                        onChange={(e) => setNewProductForm({ ...newProductForm, name: e.target.value })}
                                    />
                                </div>

                                {/* Category */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                    <select
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        value={newProductForm.category}
                                        onChange={(e) => setNewProductForm({
                                            ...newProductForm,
                                            category: e.target.value,
                                            subCategory: ''
                                        })}
                                    >
                                        {categories.filter(c => c.id !== 'all').map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Sub-Category */}
                                {getSubCategories(newProductForm.category).length > 0 && (
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-1">Sub-Category</label>
                                        <select
                                            className="w-full p-2 border border-gray-300 rounded-md"
                                            value={newProductForm.subCategory}
                                            onChange={(e) => setNewProductForm({ ...newProductForm, subCategory: e.target.value })}
                                        >
                                            <option value="">Select Sub-Category</option>
                                            {getSubCategories(newProductForm.category).map(sub => (
                                                <option key={sub.id} value={sub.id}>{sub.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                )}

                                {/* Image Upload */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Image <span className="text-red-500">*</span>
                                    </label>
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="file"
                                            ref={newProductFileInputRef}
                                            onChange={handleNewProductImageUpload}
                                            accept="image/*"
                                            className="hidden"
                                        />
                                        <button
                                            onClick={() => newProductFileInputRef.current.click()}
                                            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 text-gray-700 text-sm font-medium transition-colors"
                                        >
                                            <Upload size={16} />
                                            {newProductForm.image ? 'Change Image' : 'Upload Image'}
                                        </button>

                                        {newProductForm.image && (
                                            <div className="h-16 w-16 rounded overflow-hidden border border-gray-200">
                                                <img src={newProductForm.image} alt="Preview" className="w-full h-full object-cover" />
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-xs text-gray-500 mt-2">
                                        Supported formats: JPG, PNG. Image will be auto-resized.
                                    </p>
                                </div>

                                {/* Description */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Description <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        className="w-full p-2 border border-gray-300 rounded-md"
                                        rows="3"
                                        placeholder="Brief description of the product..."
                                        value={newProductForm.description}
                                        onChange={(e) => setNewProductForm({ ...newProductForm, description: e.target.value })}
                                    />
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3 pt-4">
                                    <button
                                        onClick={handleAddProduct}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                                    >
                                        <Save size={18} /> Add Product
                                    </button>
                                    <button
                                        onClick={() => setShowAddModal(false)}
                                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Custom Notification Toast */}
                {notification.show && (
                    <div className="fixed top-4 right-4 z-50 animate-fade-in">
                        <div className={`px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 ${notification.type === 'success'
                                ? 'bg-green-600 text-white'
                                : 'bg-red-600 text-white'
                            }`}>
                            {notification.type === 'success' ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            )}
                            <span className="font-medium">{notification.message}</span>
                        </div>
                    </div>
                )}

                {/* Custom Delete Confirmation Modal */}
                {deleteConfirm.show && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-fade-in">
                            <div className="p-6">
                                <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
                                    <Trash2 className="w-6 h-6 text-red-600" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 text-center mb-2">
                                    Delete Product
                                </h3>
                                <p className="text-gray-600 text-center mb-6">
                                    Are you sure you want to delete <span className="font-semibold">"{deleteConfirm.productName}"</span>?
                                    <br />
                                    <span className="text-sm text-red-600">This action cannot be undone.</span>
                                </p>
                                <div className="flex gap-3">
                                    <button
                                        onClick={() => setDeleteConfirm({ show: false, productId: null, productName: '' })}
                                        className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 font-medium transition-colors"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={confirmDelete}
                                        className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
