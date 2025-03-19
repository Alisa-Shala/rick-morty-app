# Rick & Morty Characters App - Internship Task for Pabau

This is a **React.js** and **GraphQL**-based application that displays a list of characters from the **Rick & Morty** series. The data is fetched from the [Rick and Morty GraphQL API](https://rickandmortyapi.com/graphql).

This project was developed as part of the **Software Engineer Internship Task for Pabau**.

---

## 🛠 **Technologies Used**
- **React.js** - Frontend framework  
- **Apollo Client** - GraphQL integration  
- **Material-UI** - UI styling and components  
- **GraphQL API** - Data source  

---

##  **Features**
✔️ Fetch and display Rick & Morty characters  
✔️ Sort characters by **Name** or **Origin**  
✔️ Filter characters by **Status** and **Species**  
✔️ Infinite Scrolling for Pagination  
✔️ Multi-language support (**English & German**)  
✔️ Fully responsive design using **Material-UI**  

---

## ⚙ **Setup Instructions**

### **1️⃣ Prerequisites**
Ensure you have the following installed before proceeding:  

- **[Node.js](https://nodejs.org/) (Latest LTS version)**  
- **[Git](https://git-scm.com/downloads)**  

You can verify the installation using the following commands(using command prompt) :  

```sh
node -v    # Should return Node.js version
npm -v     # Should return npm version
git --version  # Should return Git version
```

---

### **2️⃣ Clone the Repository**
First, clone the project repository from GitHub:  

```sh
git clone https://github.com/Alisa-Shala/rick-morty-app.git
cd rick-morty-app
```

---

### **3️⃣ Install Dependencies**
Once inside the project directory, install the required dependencies:  

```sh
npm install --legacy-peer-deps
```
This will install all necessary Node.js packages required for the project. If you face dependency issues, run:

```sh
npm install react-scripts@5.0.1 --legacy-peer-deps
```

---

### **4️⃣ Start the Development Server**
To start the application locally, run:  

```sh
npm start
```
The application will be available at:  
👉 [http://localhost:3000/](http://localhost:3000/)  

---

## 🔄 **How to Use the App**
1️⃣ The homepage displays a list of characters.  
2️⃣ Use the **Sort By** buttons to sort characters by **Name** or **Origin**.  
3️⃣ Use the **Status & Species** filters to dynamically filter characters.  
4️⃣ Scroll down to load more characters dynamically (**Infinite Scrolling**).  
5️⃣ Use the **Language Switcher** at the bottom to change the language (**English / German**).  

---

## ** Viewing the Code in VS Code
1️⃣ Open via VS Code Interface
Make sure you remember the directory where you cloned the repository.
Open VS Code.
Click on File > Open Folder....
Navigate to the folder where you cloned the project (e.g., C:\Users\YourName\rick-morty-app).
Select the folder and click Open.
---
