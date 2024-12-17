# **Ecommerce Platform - Frontend**

Welcome to the **Ecommerce Platform** frontend! This section of the project is built using **React.js** and provides a user-friendly interface for customers and merchants to interact with the platform.

The frontend is designed to offer seamless navigation, product browsing, and interaction with the backend through API calls. The platform also includes merchant management capabilities for adding and managing products, as well as handling discounts, payments, and shipping methods.

---

## **Key Features**

- **Product Browsing**: Customers can browse products, view product details, and add them to the cart.
- **Search and Filter**: A search bar and filtering options help customers find products easily.
- **Discount Codes**: Customers can enter and apply discount codes at checkout.
- **Shopping Cart**: Customers can view and manage items in their shopping cart.
- **Merchant Management**: Merchants can manage their products, payment methods, and shipping options.
- **User Accounts**: Provides user login, registration, and profile management.

---

## **Tech Stack**

The frontend leverages the following technologies to create a dynamic and responsive user interface:

- **React.js**: A powerful JavaScript library for building interactive user interfaces.
- **React Router**: For handling seamless navigation between pages.
- **Axios**: For making HTTP requests to the backend API.
- **CSS (Custom Styling)**: For ensuring a clean, modern, and responsive design.

---

## **Project Structure (Frontend)**

The frontend is composed of several key components:

### **Main Page and User Experience**
1. **Home**: The homepage of the platform showcasing featured products.
2. **ProductList**: Displays a list of all available products.
3. **ProductCard**: Displays individual product details like image, price, and description.
4. **SearchAndFilter**: Allows users to search and filter products based on various criteria.
5. **AddToCartButton**: Button that allows users to add products to their shopping cart.
6. **DiscountCodeList**: Displays all active discount codes available for customers.
7. **DiscountPrice**: Displays the discounted price when a discount code is applied.
8. **Rating**: Displays product ratings based on customer feedback.

### **Merchant Management and Content**
9. **AddMerchant**: Form for adding new merchants to the platform.
10. **MerchantList**: Displays a list of merchants on the platform.
11. **PaymentMethodList**: Displays a list of available payment methods for merchants.
12. **ShippingMethodList**: Displays a list of available shipping methods for merchants.

### **User and Admin Operations**
13. **AddUser**: Form for adding new users to the platform.
14. **UserList**: Admin panel to manage user accounts and roles.

### **Navigation and Information**
15. **Navbar**: A navigation bar for accessing various parts of the platform.
16. **About**: Information about the platform.
17. **Contact**: Contact information and a form for inquiries.

---

## **Setup Instructions for Frontend**

### **Prerequisites**
Ensure you have the following installed:
- **Node.js** (for running the frontend)

### **Steps to Run the Frontend**

1. Navigate to the frontend folder:
    ```bash
    cd EcommerceFrontend
    ```
2. Install the dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm start
    ```
4. The frontend will be accessible at `http://localhost:3000`.

---

## **Configuration**

Ensure that the frontend is configured to communicate with the backend by updating the API URL in the frontend code. Typically, you can set this in a `.env` file:

