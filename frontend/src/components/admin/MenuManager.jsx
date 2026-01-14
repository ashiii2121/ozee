import React, { useState } from "react";
import "./MenuManager.css";

const MenuManager = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [showAddModal, setShowAddModal] = useState(false);
    const [editingItem, setEditingItem] = useState(null);

    // Sample menu data (in production, this would come from a backend)
    const [menuItems, setMenuItems] = useState([
        { id: 1, name: "Veg Wrap", category: "Wraps", price: "₹50", status: "active" },
        { id: 2, name: "Chicken Wrap", category: "Wraps", price: "₹50", status: "active" },
        { id: 3, name: "Hexa Burger", category: "Burger", price: "₹400", status: "active" },
        { id: 4, name: "Cold Coffee", category: "Milk Shake", price: "₹50", status: "active" },
        { id: 5, name: "Pizza Supreme", category: "Pizzas", price: "₹290", status: "active" },
    ]);

    const categories = ["all", "Wraps", "Burger", "Pizzas", "Milk Shake", "Momos", "Falooda"];

    const filteredItems = menuItems.filter(item => {
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this item?")) {
            setMenuItems(menuItems.filter(item => item.id !== id));
        }
    };

    const handleEdit = (item) => {
        setEditingItem(item);
        setShowAddModal(true);
    };

    const handleToggleStatus = (id) => {
        setMenuItems(menuItems.map(item =>
            item.id === id
                ? { ...item, status: item.status === "active" ? "inactive" : "active" }
                : item
        ));
    };

    return (
        <div className="menu-manager-container">
            <div className="menu-manager-header">
                <div>
                    <h1>Menu Manager</h1>
                    <p>Manage your cafe menu items and categories</p>
                </div>
                <button className="add-item-btn" onClick={() => setShowAddModal(true)}>
                    <span>➕</span>
                    Add New Item
                </button>
            </div>

            {/* Filters */}
            <div className="menu-filters">
                <div className="search-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search menu items..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="category-filters">
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`category-filter ${selectedCategory === category ? "active" : ""}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category === "all" ? "All Items" : category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Menu Items Table */}
            <div className="menu-table-container">
                <table className="menu-table">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredItems.map(item => (
                            <tr key={item.id}>
                                <td>
                                    <div className="item-name-cell">
                                        <div className="item-avatar">{item.name.charAt(0)}</div>
                                        <span>{item.name}</span>
                                    </div>
                                </td>
                                <td>
                                    <span className="category-badge">{item.category}</span>
                                </td>
                                <td className="price-cell">{item.price}</td>
                                <td>
                                    <button
                                        className={`status-toggle ${item.status}`}
                                        onClick={() => handleToggleStatus(item.id)}
                                    >
                                        {item.status === "active" ? "Active" : "Inactive"}
                                    </button>
                                </td>
                                <td>
                                    <div className="action-buttons">
                                        <button
                                            className="action-btn edit"
                                            onClick={() => handleEdit(item)}
                                            title="Edit"
                                        >
                                            ✏️
                                        </button>
                                        <button
                                            className="action-btn delete"
                                            onClick={() => handleDelete(item.id)}
                                            title="Delete"
                                        >
                                            🗑️
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {filteredItems.length === 0 && (
                    <div className="empty-state">
                        <div className="empty-icon">🔍</div>
                        <h3>No items found</h3>
                        <p>Try adjusting your search or filters</p>
                    </div>
                )}
            </div>

            {/* Add/Edit Modal */}
            {showAddModal && (
                <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="modal-header">
                            <h2>{editingItem ? "Edit Menu Item" : "Add New Menu Item"}</h2>
                            <button className="close-btn" onClick={() => setShowAddModal(false)}>
                                ✕
                            </button>
                        </div>

                        <form className="modal-form">
                            <div className="form-group">
                                <label>Item Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter item name"
                                    defaultValue={editingItem?.name}
                                />
                            </div>

                            <div className="form-group">
                                <label>Category</label>
                                <select defaultValue={editingItem?.category}>
                                    <option value="">Select category</option>
                                    {categories.filter(c => c !== "all").map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Price</label>
                                <input
                                    type="text"
                                    placeholder="₹0"
                                    defaultValue={editingItem?.price}
                                />
                            </div>

                            <div className="form-group">
                                <label>Description (Optional)</label>
                                <textarea
                                    rows="3"
                                    placeholder="Enter item description"
                                ></textarea>
                            </div>

                            <div className="modal-actions">
                                <button type="button" className="cancel-btn" onClick={() => setShowAddModal(false)}>
                                    Cancel
                                </button>
                                <button type="submit" className="submit-btn">
                                    {editingItem ? "Update Item" : "Add Item"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MenuManager;
