# mock8-olx


# OLX Classifieds (FullStack)

# `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it and then code it.
- Don’t jump directly into the code.
- Commit your code every hour with a proper commit message to your repository (we will monitor every commit)
- Use **HTML,CSS and JS** for the frontend.
- Use **Node, Express, Mongo (NEM)** for backend.

---

# `**Problem Statement**`

- The task is to build a full stack online classifieds app like [olx.com](http://olx.com) which allows users to list ads for products and other users can buy it.
- Your app should have the following pages
    - Signup & Login
    - Post Classifieds
    - Browse Classifieds

---

## **`Signup & Login`**

- This route should have a login and register form, which the user should be able to toggle between login and register, and the corresponding form should be shown.
    
    
    ![                                                          Toggling Signup and Login Form](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/374f7f3b-743d-437f-ae3f-531636bccc26/3.gif)
    
                                                              Toggling Signup and Login Form
    

- This user should be prompted by a signup form, where the user will enter the following credentials
    - Email
    - Password
    - Confirm Password
- On form submit store this credential in your backend using the API “**/signup**”.
- Follow all the coding standards, hash the password using any encrypting library such as “**bcrypt**” or “**argon2**”  before storing in database.

- This user should be prompted by a login form, where the user will enter the following credentials
    - Email
    - Password
- On form submit, match the entered credentials with the data stored in your backend (Verify both email and password) using the backend API “**/login**”
- On successful validation alert “**Login Successful**”, generate a token for the user using **jsonwebtoken** (store the token in **localStorage)**  and redirect the user to **Post Classifieds** Route.
- On entering wrong credential, alert “**Invalid Credentials**” and re-prompt the user to enter valid credentials.

## `**Post Classifieds`**

- The user should be prompted by a form with the following details
    - Name
    - Description
    - Category (Clothing, Electronics, Furniture, Other)
    - Image URL
    - Location
    - Date
    - Price
- On form submit, store data in backend server.
- Sample Ad Model
    
    ```json
    [
    	{
    		"name": "Nike Air",
    		"description" : "Almost brand new, rarely used",
    		"category" : "clothing",
    		"image" : "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/custom-nike-air-max-90-by-you.png",
    		"location" : "india",
    		"postedAt" : "2023-02-01",
    		"price" : "7999"
    		
    	},
    	{
    		"name": "PlayStation 5",
    		"description" : "Brand new PS5 digital edition, with extra dualshock",
    		"category" : "electronics",
    		"image" : "https://5.imimg.com/data5/SELLER/Default/2022/6/TQ/TK/HJ/154727183/ps5-disc-edition-500x500.jpg",
    		"location" : "india",
    		"postedAt" : "2023-02-01",
    		"price" : "25999"
    		
    	}
    ]
    ```
    

---

## `**Browse Classifieds`**

- Fetch all the classified posted from the backend server and list them in the form of cards.
- The UI should look like

![                                                                             UI Reference Image](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5da6cef1-2312-4eb8-8876-97fbd6d833bb/Olx_Classifieds.png)

                                                                             UI Reference Image

- Your app should have the following functionalities and **should be implemented using backend.**
    - Filter by Category (Clothing, Electronics, Furniture, Other)
    - Sort by date (based on the posted date)
    - Search by product name
    - Pagination (4 Cards per page)
- Each card should have a “**Edit**” and “**Delete**” button appended to it.
- When the user clicks on "**Edit**", they should be able to modify the details of the ad. (All fields should be editable)
- By clicking on "**Delete**", the user should have the ability to remove the specific ad listing from both the user interface and the backend.

---

## `**Backend`**

- Create all relevant APIs for CRUD operations.
- Filter, Sort, Search and Pagination should be done through API. (**Doing this manually through fronted will be considered null and void**)
- Take care of all good practices - naming conventions, MVC structure etc.
