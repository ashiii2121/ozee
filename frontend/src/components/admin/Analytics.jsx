import React from "react";
import "./Analytics.css";

const Analytics = () => {
    // Sample analytics data
    const stats = [
        {
            title: "Total Menu Items",
            value: "156",
            change: "+12",
            trend: "up",
            icon: "🍽️",
            color: "#667eea"
        },
        {
            title: "Categories",
            value: "15",
            change: "+2",
            trend: "up",
            icon: "📁",
            color: "#48bb78"
        },
        {
            title: "Popular Items",
            value: "42",
            change: "+8",
            trend: "up",
            icon: "⭐",
            color: "#ed8936"
        },
        {
            title: "Avg. Price",
            value: "₹85",
            change: "+5%",
            trend: "up",
            icon: "💰",
            color: "#9f7aea"
        }
    ];

    const topCategories = [
        { name: "Burgers", items: 9, percentage: 85 },
        { name: "Wraps", items: 7, percentage: 75 },
        { name: "Milk Shake", items: 17, percentage: 90 },
        { name: "Momos", items: 7, percentage: 70 },
        { name: "Falooda", items: 9, percentage: 80 }
    ];

    const recentActivity = [
        { action: "Menu item added", item: "Hexa Burger", time: "2 hours ago", type: "add" },
        { action: "Price updated", item: "Chicken Wrap", time: "5 hours ago", type: "edit" },
        { action: "Category created", item: "Ice Creams", time: "1 day ago", type: "add" },
        { action: "Menu item removed", item: "Old Item", time: "2 days ago", type: "delete" },
        { action: "Price updated", item: "Pizza Supreme", time: "3 days ago", type: "edit" }
    ];

    return (
        <div className="analytics-container">
            <div className="analytics-header">
                <h1>Dashboard Analytics</h1>
                <p>Overview of your cafe menu and performance</p>
            </div>

            {/* Stats Grid */}
            <div className="stats-grid">
                {stats.map((stat, index) => (
                    <div key={index} className="stat-card" style={{ borderTopColor: stat.color }}>
                        <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
                            {stat.icon}
                        </div>
                        <div className="stat-content">
                            <p className="stat-title">{stat.title}</p>
                            <h2 className="stat-value">{stat.value}</h2>
                            <div className={`stat-change ${stat.trend}`}>
                                <span className="change-arrow">{stat.trend === "up" ? "↑" : "↓"}</span>
                                <span>{stat.change} this month</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="analytics-grid">
                {/* Top Categories */}
                <div className="analytics-card">
                    <div className="card-header">
                        <h3>Top Categories</h3>
                        <span className="card-badge">By Items</span>
                    </div>
                    <div className="categories-list">
                        {topCategories.map((category, index) => (
                            <div key={index} className="category-item">
                                <div className="category-info">
                                    <span className="category-rank">#{index + 1}</span>
                                    <div>
                                        <p className="category-name">{category.name}</p>
                                        <p className="category-count">{category.items} items</p>
                                    </div>
                                </div>
                                <div className="category-progress">
                                    <div className="progress-bar">
                                        <div
                                            className="progress-fill"
                                            style={{ width: `${category.percentage}%` }}
                                        ></div>
                                    </div>
                                    <span className="progress-value">{category.percentage}%</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="analytics-card">
                    <div className="card-header">
                        <h3>Recent Activity</h3>
                        <span className="card-badge">Last 7 days</span>
                    </div>
                    <div className="activity-list">
                        {recentActivity.map((activity, index) => (
                            <div key={index} className="activity-item">
                                <div className={`activity-icon ${activity.type}`}>
                                    {activity.type === "add" && "➕"}
                                    {activity.type === "edit" && "✏️"}
                                    {activity.type === "delete" && "🗑️"}
                                </div>
                                <div className="activity-content">
                                    <p className="activity-action">{activity.action}</p>
                                    <p className="activity-item-name">{activity.item}</p>
                                </div>
                                <span className="activity-time">{activity.time}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="quick-actions">
                <h3>Quick Actions</h3>
                <div className="actions-grid">
                    <button className="action-btn primary">
                        <span className="action-icon">➕</span>
                        <span>Add Menu Item</span>
                    </button>
                    <button className="action-btn secondary">
                        <span className="action-icon">📁</span>
                        <span>New Category</span>
                    </button>
                    <button className="action-btn tertiary">
                        <span className="action-icon">📊</span>
                        <span>Export Data</span>
                    </button>
                    <button className="action-btn quaternary">
                        <span className="action-icon">⚙️</span>
                        <span>Settings</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
