# **Ecommerce Platform**

Welcome to the **Ecommerce Platform**! This project is a full-stack, modern e-commerce solution built using **ASP.NET Core** for the backend and **React.js** for the frontend. The platform is designed to provide a seamless experience for both **merchants** and **customers**, allowing them to manage and browse products, apply discounts, handle payments, and much more.

Whether you're a small business looking to expand your online presence or a large enterprise wanting a robust, scalable solution, this platform is built to meet your needs.

---

## **Key Features**

- **Merchants Management**: I can effortlessly manage merchant profiles, their products, payment methods, and shipping methods.
- **Product Catalog**: I can showcase products with detailed information such as name, price, description, rating, and images.
- **Discount Codes**: I can easily generate and manage discount codes that can be applied at checkout to provide discounts on products.
- **Payment Methods**: I can configure various payment methods for merchants to receive payments.
- **Shipping Methods**: I can set up different shipping options for products to ensure timely and efficient delivery.
- **User Accounts**: I provide seamless user registration, login, and profile management. Admins and merchants can manage roles and access.

---

## **Tech Stack**

This platform utilizes a combination of modern technologies and frameworks to deliver a powerful e-commerce experience.

### **Backend**

- **ASP.NET Core**: A robust framework for building modern web APIs.
- **Entity Framework Core**: For interacting with the database and handling migrations.
- **SQL Server**: Reliable relational database management for storing user, product, and transaction data.

### **Frontend**

- **React.js**: A powerful JavaScript library for building interactive user interfaces.
- **React Router**: For handling seamless navigation between pages.
- **Axios**: To make HTTP requests to the backend API.
- **CSS (Custom Styling)**: Ensures a clean and responsive design.

### **Authentication & Security**

- **JWT (JSON Web Tokens)**: Secure authentication mechanism for user roles and access control.

---

## **Project Structure**

### **Backend (API)**

The backend is built using **ASP.NET Core** and exposes a set of **RESTful APIs** to manage all resources, including products, users, and merchants. The core controllers include:

- **DiscountCodeController**: Handles CRUD operations for discount codes.
- **MerchantController**: Manages merchant data, including their profile, products, and shipping/payment methods.
- **PaymentMethodController**: Manages different payment methods that merchants can use.
- **ProductController**: Handles the creation, retrieval, update, and deletion of products.
- **ShippingMethodController**: Manages different shipping options available for products.
- **UserController**: Manages user registration, login, and role-based access.

### **Frontend (UI)**

The frontend, built using **React.js**, offers a user-friendly interface for both **merchants** and **customers**. Key components include:

---

### **Main Page and User Experience**
1. **Home**: The homepage of the platform showcasing featured products.
2. **ProductList**: Displays a list of all available products.
3. **ProductCard**: Displays individual product details like image, price, and description.
4. **SearchAndFilter**: Allows users to search and filter products based on various criteria.
5. **AddToCartButton**: Button that allows users to add products to their shopping cart.
6. **DiscountCodeList**: Displays all active discount codes available for customers.
7. **DiscountPrice**: Displays the discounted price when a discount code is applied.
8. **Rating**: Displays product ratings based on customer feedback.

---

### **Merchant Management and Content**
9. **AddMerchant**: Form for adding new merchants to the platform.
10. **MerchantList**: Displays a list of merchants on the platform.
11. **PaymentMethodList**: Displays a list of available payment methods for merchants.
12. **ShippingMethodList**: Displays a list of available shipping methods for merchants.

---

### **User and Admin Operations**
13. **AddUser**: Form for adding new users to the platform.
14. **UserList**: Admin panel to manage user accounts and roles.

---

### **Navigation and Information**
15. **Navbar**: A navigation bar for accessing various parts of the platform.
16. **About**: Information about the platform.
17. **Contact**: Contact information and a form for inquiries.

---

## **Setup Instructions**

To get the project up and running, follow the steps below:

### **Prerequisites**

Ensure you have the following installed:
- **Node.js** (for running the frontend)
- **ASP.NET Core SDK** (for running the backend)
- **SQL Server** (for the database)

### **Backend Setup**

1. Clone the repository:
    ```bash
    git clone https://github.com/egemenenis/ECommerce.git
    ```
2. Navigate to the backend folder:
    ```bash
    cd EcommerceBackend
    ```
3. Restore the dependencies:
    ```bash
    dotnet restore
    ```
4. Apply the database migrations:
    ```bash
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```
5. **Important Configuration**: 
    Open the `appsettings.json` file in the `EcommerceBackend` project and find the line below and fill in the missing information based on your local SQL Server configuration:
    ```json
    "ECommerceConnectionString": "Server=(localdb)\\**SERVER NAME**;Database=**DATABASE NAME**;Trusted_Connection=True;"
    ```
6. Run the backend server:
    ```bash
    dotnet run
    ```

### **Frontend Setup**

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

### **Configuration**

Ensure that the frontend is configured to communicate with the backend by updating the API URL in the frontend code. Typically, you can set this in a `.env` file:

---

## **Why Choose This Ecommerce Platform?**

- **Scalable**: Built with modern technologies, this platform is designed to scale with your business.
- **Modular**: Easily add or update features such as payment gateways, product categories, or user management.
- **Secure**: Implements **JWT** authentication to ensure secure access and user management.
- **Responsive**: The UI is designed to be mobile-friendly, providing an excellent experience across devices.
- **Extensible**: Easily extendable backend and frontend, making it simple to add new features or integrations.

---

## **Contributing**

I welcome contributions to this project! If you'd like to improve or extend the platform, feel free to fork the repository and submit a pull request. Please make sure to follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-name`)
5. Create a new Pull Request

---

## **Contact**

For questions, suggestions, or any problems, feel free to contact me:

- **Email**: [enis.egemen25@gmail.com](mailto:enis.egemen25@gmail.com)

---

Thank you for discovering **E-commerce Platform**!
