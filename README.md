This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


# Overview

This is a simple e-commerce site developed using Next.js, Tailwind CSS, TypeScript, and App Router. The project includes features such as product listing, product details, shopping cart management, and order checkout.

## Run Locally

Clone the project

```bash
  git clone https://github.com/vinaybhamre/dilfood-ecommerce-task.git
```

Go to the project directory

```bash
  cd dilfood-ecommerce-task
```

Install dependencies

```bash
  npm install or yarn
```

Start the server

```bash
  npm run dev or yarn dev
```


## Usage/Examples

- Product Listing:

    - The home page displays products in a 4-column grid.
    - Each product card includes details such as name, image, price, and an "Add to Cart" button.
    - Clicking on a product card navigates to the product details page.
    
- Product Details:

    - Displays detailed information about a product, including description.
    - Includes an "Add to Cart" button to add the product directly to the cart.
    - Also includes a "Go to Cart" button to navigate to the cart page.

- Shopping Cart:

    - The cart page displays all added products with quantity and total price.
    - Users can increase/decrease product quantity or remove a product from the cart.
    - Clicking on the "Checkout" button navigates to the order checkout page.

- Order Checkout:

    - Users fill in their details in the form (dummy form for assignment purposes).
    - Clicking on "Place Order" simulates placing an order.
    - Users are redirected to the "Thank You" page.


## Tech Stack

Nextjs, Redux-toolkit, TailwindCSS, TypeScript




## Features

- Product listing and details pages.
- Shopping cart management with quantity adjustment and product removal.
- Order checkout page with a dummy form for user details.


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
