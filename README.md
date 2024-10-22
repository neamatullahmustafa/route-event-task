# Customer Transactions

This project is a simple React application that retrieves customer and transaction data from a provided API endpoint and displays it in a user-friendly format. The app includes features like filtering the table by customer name or transaction amount and displaying a graph of the total transaction amount per day for a selected customer.

## Features

- Display a list of customers along with their transaction data.
- Filter the table by customer name or transaction amount.
- Display a graph of the total transaction amount per day for a selected customer.

## Tech Stack

- React
- Chart.js
- Tailwind CSS

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have the following installed on your machine:

- Node.js
- npm (or yarn)
- Docker (optional, for Docker support)

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/yourusername/route-event-task.git
    cd route-event-task
    ```

2. **Install the dependencies**:

    ```bash
    npm install
    # or
    yarn install
    ```

3. **Start the local server to host the JSON data**:

    ```bash
    npx json-server --watch db.json --port 3001
    ```

4. **Start the React application**:

    ```bash
    npm start
    # or
    yarn start
    ```

The application should now be running on `http://localhost:3000`.

## Usage

- Open `http://localhost:3000` in your browser.
- Use the dropdown menu to filter transactions by customer.
- Use the input box to filter transactions by amount.
- Select a customer from the second dropdown to display the graph of total transaction amounts per day for that customer.

## Docker Support

To run the project using Docker, you can use the provided `Dockerfile`.

1. **Build the Docker image**:

    ```bash
    docker build -t route-event-task .
    ```

2. **Run the Docker container**:

    ```bash
    docker run -p 3000:3000 route-event-task
    ```

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to all contributors and supporters.

#   r o u t e - e v e n t - t a s k 
 
 
