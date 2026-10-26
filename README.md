# Amazon Clone

A small Amazon-inspired storefront built with plain HTML, CSS, and JavaScript. The project includes a product listing page, cart management, checkout summary, order history, and delivery tracking mocks.

## Overview

This repository is a front-end e-commerce demo designed to teach browser-based app development with JavaScript. It uses static assets and browser `localStorage` to simulate a shopping cart and persistent cart state without a backend server.

## Features

- Product grid with item pricing and ratings
- Add-to-cart interactions
- Cart quantity badge in the header
- Checkout summary and payment section
- Order history page
- Tracking page mockup
- Responsive layout for different screen sizes
- Test suite for cart and checkout logic

## Tech Stack

- HTML
- CSS
- JavaScript
- Jasmine (for tests)

## Project Structure

```text
amazon-clone/
├── amazon.html
├── checkout.html
├── orders.html
├── tracking.html
├── data/
│   ├── cart.js
│   ├── cart-oop.js
│   ├── deliveryOptions.js
│   └── products.js
├── scripts/
│   ├── amazon.js
│   ├── checkout.js
│   ├── checkout/
│   └── utils/
├── styles/
│   ├── pages/
│   └── shared/
├── images/
├── backend/
│   └── products.json
├── tests/
├── initial files/
└── README.md
```

## How to Run

Because this is a static front-end project, you can run it locally with a simple web server:

```bash
cd amazon-clone
python3 -m http.server 8000
```

Then open:

```text
http://localhost:8000/amazon.html
```

## Notes

- Cart state is stored in browser `localStorage`.
- There is no real backend or database in this project.
- The `backend/products.json` file is included as static data and is not actively connected to the UI.

## Testing

The repo includes Jasmine-based tests under the `tests/` folder. You can open the test HTML files in a browser to run the suite.

## Purpose

This repo is mainly a learning project that demonstrates:

- DOM rendering
- event handling
- dynamic UI updates
- state management in the browser
- responsive CSS layout

## License

This project does not currently include an explicit license file.
