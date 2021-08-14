# Myshop Ecommerce
This is used only for demo purposes

# Derived the Test Cases

### 1. Verify the user can login to the MyShop.com

- Enter the user name as admin
- Enter the password as 123
- Click Login

Expected - Should be able to login

### 2. Verify the user cannot login to the [MyShop.com](http://myshop.com) with a wrong password

- Enter the user name as admin
- Enter the password as 1234
- Click Login

Expected - Should not be able to login

### 3. Verify the user cannot login to the [MyShop.com](http://myshop.com) with a wrong username

- Enter the user name as user
- Enter the password as 123
- Click Login

Expected - Should not be able to login

### 4. Verify the user can Signup to the MyShop.com

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click on SignUp link from the home page
- Enter the user name as Admin
- Enter the password as 123
- Enter the re-password as 123
- Click Register

Expected - Should display the successful alert

### 5. Verify the user cannot Signup to the [MyShop.com](http://myshop.com) when re-enter password is different

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click on SignUp link from the home page
- Enter the user name as Admin
- Enter the password as 123
- Enter the re-password as 1234
- Click Register

Expected - Should display the alert Entered passwords are different.

### 6. Verify the user cannot Signup to the [MyShop.com](http://myshop.com) without entering password

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click on SignUp link from the home page
- Enter the user name as Admin
- Leave the password blank
- Leave the password re-enter blank
- Click Register

Expected - Should display the alert Please enter a passwords to proceed.

### 7. Verify the user can view product details

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click on the See Details button of a product

Expected - User should be able to view the product details

### 8. Verify the user name is shown after login

- Enter the user name as admin
- Enter the password as 123
- Click Login

Expected - Hi John, Welcome back ! message should be shown to the user

### 9. Verify the user can go logout

Precondition - user should login

- Logout link should be visible
- Click on the Logout link

Expected - user should navigate to the Home page

### 10.Verify user can click buy and proceed to buy screen

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details
- Click Buy

Expected - User should go to the buy screen

### 11.Verify user can specify the quantity in the buy screen

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details
- Click Buy
- Enter quantity as 10
- Click Buy

Expected - Entered quantity should be  10

### 12.Verify user cannot enter letters in the quantity fields

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details
- Click Buy
- Enter quantity as  abc
- Click Buy

Expected - Field should not accept any letters

### 13.Verify user can view the total amount going to spend

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details for the THUNGSTON BULB, 40W
- Click Buy
- Enter quantity as 10
- Click Buy

Expected - Total amount should be Rs. 9500

### 14.Verify user can checkout and enter shipping details

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details for the THUNGSTON BULB, 40W
- Click Buy
- Enter quantity as 10
- Click Buy
- Click Checkout
- Enter house number, street, town and country
- Click Submit

Expected - Successfully Saved alert should be displayed

### 15.Verify a validation message is shown when the house number is empty

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details for the THUNGSTON BULB, 40W
- Click Buy
- Enter quantity as 10
- Click Buy
- Click Checkout
- Do not enter house number
- Click Submit

Expected - Please enter a house number to proceed message should appear

### 16.Verify a validation message is shown when the country is empty

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details for the THUNGSTON BULB, 40W
- Click Buy
- Enter quantity as 10
- Click Buy
- Click Checkout
- Enter house number as 1
- Click Submit

Expected - Please enter a country to proceed message should appear

### 17.Verify a validation message is shown when entered digits for the country

- Go to [https://sajithatharaka.github.io/myshop_ecommerce/](https://sajithatharaka.github.io/myshop_ecommerce/)
- Click See Details for the THUNGSTON BULB, 40W
- Click Buy
- Enter quantity as 10
- Click Buy
- Click Checkout
- Enter house number as 1
- Enter country as 123
- Click Submit

Expected - Please enter a correct name for the country to proceed message should appear
