# **Ecommerce Platform - Backend**

Welcome to the **Ecommerce Platform** backend! This section of the project is built using **ASP.NET Core** and handles the server-side logic for the e-commerce platform, providing APIs for product, user, merchant, payment, and shipping management.

The backend is designed to securely manage and process data, including authentication, database interaction, and API endpoints for frontend communication.

---

## **Key Features**

- **Merchant Management**: Manages merchant data, including their profiles, products, and business-related information.
- **Product Management**: Manages the creation, modification, and deletion of products.
- **Discount Codes**: Allows merchants to create and manage discount codes for customers.
- **Payment Methods**: Configures and manages payment options for merchants.
- **Shipping Methods**: Allows merchants to configure available shipping methods for customers.
- **User Management**: Provides secure user registration, login, and role-based access control.

---

## **Tech Stack**

This section uses a set of robust tools and frameworks to build and manage the backend:

- **ASP.NET Core**: For building web APIs and handling server-side logic.
- **Entity Framework Core**: For database interactions and migrations.
- **SQL Server**: The database for storing user, merchant, product, and transaction data.
- **JWT (JSON Web Tokens)**: For secure authentication and authorization.

---

## **Project Structure (Backend)**

The backend is composed of several key controllers and services:

### **Controllers**
- **DiscountCodeController**: Manages CRUD operations for discount codes.
- **MerchantController**: Manages merchant profiles, products, and business settings.
- **PaymentMethodController**: Handles CRUD operations for payment methods.
- **ProductController**: Manages product creation, updates, retrieval, and deletion.
- **ShippingMethodController**: Handles shipping options for products.
- **UserController**: Handles user registration, login, and role management.

---

## **Setup Instructions for Backend**

### **Prerequisites**
Ensure you have the following installed:
- **ASP.NET Core SDK**
- **SQL Server** (or any other compatible database server)

### **Steps to Run the Backend**

1. Clone the repository:
    ```bash
    git clone https://github.com/egemenenis/ECommerce.git
    ```
2. Navigate to the backend folder:
    ```bash
    cd EcommerceBackend
    ```
3. Restore dependencies:
    ```bash
    dotnet restore
    ```
4. Apply migrations to create the database:
    ```bash
    dotnet ef migrations add InitialCreate
    dotnet ef database update
    ```
5. **Configure the Database Connection**: Open the `appsettings.json` file in the backend project and configure the connection string to your local SQL Server:
    ```json
    "ECommerceConnectionString": "Server=(localdb)\\**SERVER NAME**;Database=**DATABASE NAME**;Trusted_Connection=True;"
    ```
6. Run the backend server:
    ```bash
    dotnet run
    ```

