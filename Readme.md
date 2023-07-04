# ToDo List App

This is a simple ToDo List application implemented in TypeScript. It provides functionality to add tasks, complete tasks, delete tasks, and display all tasks.

## Prerequisites

Before running the application, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/): A JavaScript runtime environment.
- [npm](https://www.npmjs.com/package/npm): The package manager for Node.js.

## Installation

To get started with the ToDo List app, follow these steps:

1. Clone the repository:

   ```shell
   git clone https://github.com/GalisJordi/ToDo-list
   ```

2. Navigate to the project directory:

   ```shell
   cd yourcomputerpath/ToDo-list
   ```

3. Install the dependencies:

   ```shell
   npm install
   ```

## Usage with CLI

The application can be used through the command-line interface (CLI). Follow the steps below to interact with the CLI:

1. Start the CLI application:

   ```shell
   node /dist/cli.js
   ```

2. Follow the prompts to perform various operations:
   - Enter "a" to add a task
   - Enter "c" to complete a task
   - Enter "d" to delete a task
   - Enter "s" to show all tasks
   - Enter "e" to exit

## Usage with a Browser

The ToDo List app can also be used in a web browser. Follow the steps below to run the application in a browser:

1. Open `index.html` using a Live Server or any local server of your choice.
2. Use the provided interface to add tasks, mark them as completed, delete tasks, or add new tasks.

## Project Structure

The project structure is as follows:

- `app.ts`: This file contains the `Task` interface and the `TodoList` class, responsible for managing tasks.
- `cli.ts`: This file implements the command-line interface (CLI) for user interaction.
- `index.ts`: This is the entry point of the application.

## Contributing

Contributions to the ToDo List app are welcome! If you encounter any issues or want to add new features, feel free to open an issue or submit a pull request. Your contributions will be greatly appreciated.