# FoodieGo Project

Application for food delivery and takeout.

![FoodieGo Project preview image](./project-preview.jpeg)

## Project brief

**FoodieGo** is an engaging project that simulates a real-world food delivery and takeout application. This project provides an opportunity to develop a responsive web application where users can browse different types of cuisines, filter restaurants based on various criteria, and place orders for their favorite dishes. The aim is to replicate the experience of popular food delivery apps, making it a great project to enhance your web development skills.

### What you will learn

- **Responsive Web Design**: Learn to create a user-friendly interface that adapts seamlessly to different screen sizes and devices, ensuring an optimal experience for all users, whether they are on a desktop, tablet, or smartphone.

- **Filtering and Sorting Techniques**: Implement advanced filtering and sorting functionalities that allow users to easily navigate and find restaurants or dishes based on preferences such as cuisine type, delivery time, and customer ratings.

- **State Management in JavaScript**: Gain experience in managing application state effectively using JavaScript. You'll handle dynamic data updates, manage the state of filters and user selections, and ensure a smooth and interactive user experience.

- **Order Processing and Management**: Develop a complete order management system that tracks user orders from selection to checkout. Learn to handle the complexity of real-time order updates, inventory management, and payment processing.

- **CSS Frameworks for UI Design**: Use CSS frameworks like Tailwind or Bootstrap to build a clean, professional, and visually appealing UI. Learn to customize these frameworks to match the specific needs of your application.

- **User Interaction and Feedback**: Enhance user experience by implementing interactive elements such as toggles for delivery options, ratings, and reviews. Provide visual feedback for user actions to create an engaging and intuitive interface.

By the end of this project, you'll have a fully functional and visually compelling food delivery application, gaining practical experience in web development and understanding the intricacies of creating user-centered web applications.

### Requirements

**Note**: Authentication and User Management are not necessary for this practice application, you can mock the UI states for it, similarly, there is no API for restaurants and restaurant menus, all of it can be mocked or use JSON dummy placeholder data. However, if you want to go deep enough in this project, feel free to extend it as you wish by e.g. making user authentication and your own API. There are some existing restaurant APIs worth to explore as well!

- Add a navigation bar with the FoodieGo logo, delivery/pickup selection toggle, address field (use geolocation API if available, or hardcode a default), a cart icon showing the number of items, and sign-in/create account links.
- Implement a food filter section with selectable categories (e.g., Breakfast, Pizza, Sushi), allowing users to select one category at a time; include a carousel with right arrow for additional categories.
- Create a main content area with a white background card that includes toggles for "Open now" and "Free delivery" (only if delivery is selected), a rating filter with stars from 0 to 5, and a search/sorting feature that can open a popup for options like "Recommended," "Alphabetical," "Distance," with apply/cancel buttons.
- Display a list of restaurants with the header "Order from X places"; each restaurant should be shown as a card with a left-aligned image, title, description, rating, delivery time, and cost (free/paid), with address shown if pickup is selected; sort and filter results based on selected options.
- Include a search function with an empty state message when no results are found, and a reset button to clear the search term and filters.
- Develop a restaurant details page that opens upon selecting a restaurant from the list; maintain the navigation bar and include a larger image, title, description, and other details from the card, displayed in a top-down layout.
- Add shortcuts (e.g., Popular, Lunch) in the restaurant details page that scroll to the respective section in the menu; implement these as a carousel, allowing selection of only one shortcut at a time.
- Show the restaurant's menu items under categories like "Lunch," each with a title, price, description, and an image on the right; include a "+" icon to add items, changing to "- 1 +" when selected, to allow users to increase or decrease the quantity.
- Display a checkout cart icon in the navigation bar that updates with the number of items added; clicking the cart shows a list of selected items with the restaurant name, item count (e.g., 1x Salmon Futomaki), individual prices, a subtotal, delivery cost (if applicable), and a total amount, along with a "Go to Checkout" button (mocked UI).
- Adapt the main view for mobile with a top-down layout; ensure the navigation is responsive, with sign-in/create account links moved to a hamburger menu, and additional filters hidden initially (food filters remain as a carousel, search remains visible).
- Implement a mobile filter view accessible via a back arrow labeled "Filters," featuring sorting options and toggles for "Open now," "Free delivery," and "Rating," similar to the desktop version.
- Show an empty cart state when the cart icon is clicked with 0 items; display a back arrow and "Shopping Cart" label, similar to the desktop layout.
- Optimize the restaurant menu for mobile with a top-down layout; maintain carousel shortcuts for categories like Popular and Lunch, and allow users to add items as before, with the same increase/decrease functionality.
- Implement a mobile shopping cart view for checkout, showing restaurant name, itemized list with quantities, subtotal, delivery costs (if applicable), total amount, and a "Check Out" button.

