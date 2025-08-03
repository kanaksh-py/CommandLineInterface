CLI File Utility Tool

This is a simple command-line interface (CLI) tool built with Node.js and the commander library. It provides a set of commands for performing common file and directory operations directly from your terminal.

Features

    Create a file: Create a new file with specified content.

    Rename a file: Change the name of an existing file.

    Append to a file: Add the content of one file to another.

    Remove a file: Delete a file from the file system.

    Count lines: Get the total number of lines in a file.

    Count words: Count the total number of words in a file.

    Count specific word: Find how many times a specific word appears in a file.

    List files: Display all files in the current directory.

    Get file stats: View detailed statistics (size, creation date, modification date) for a file.

    Create a directory: Make a new directory.

    Remove a directory: Delete a directory and its contents.

Installation

    Make sure you have Node.js installed on your system.

    Save the provided code in a file named cli.js.

    Install the package by running the following command in your terminal:
    Bash

    npm install 

    To make the script executable, you can add a shebang line #!/usr/bin/env node at the top of the file and set the file permissions.

Usage

You can run the script by using node cli.js followed by the command and its arguments.

Available Commands

Here is a list of all the commands you can use with this CLI tool:

create-file <file> <content>

Creates a new file with the specified content.

    <file>: The name of the new file.

    <content>: The text to write into the file.

Example:
Bash

node cli.js create-file my-new-file.txt "Hello, this is a test file."

rename-file <oldName> <newName>

Renames an existing file.

    <oldName>: The current name of the file.

    <newName>: The new name for the file.

Example:
Bash

node cli.js rename-file my-new-file.txt renamed-file.txt

append-file <source> <destination>

Appends the content of the source file to the end of the destination file.

    <source>: The file to read content from.

    <destination>: The file to append content to.

Example:
Bash

node cli.js append-file file1.txt file2.txt

remove-file <file>

Deletes the specified file.

    <file>: The name of the file to delete.

Example:
Bash

node cli.js remove-file temp-file.txt

count-lines <file>

Counts and displays the number of lines in a file.

    <file>: The name of the file to count lines from.

Example:
Bash

node cli.js count-lines my-text-document.md

total-words <file>

Counts and displays the total number of words in a file.

    <file>: The name of the file to count words from.

Example:
Bash

node cli.js total-words report.txt

count-word <file> <word>

Counts and displays the number of times a specific word appears in a file. The search is case-insensitive.

    <file>: The name of the file to search in.

    <word>: The specific word to count.

Example:
Bash

node cli.js count-word essay.txt "the"

list-files

Lists all files and directories in the current working directory.

Example:
Bash

node cli.js list-files

file-stats <file>

Displays statistics for a file, including its size, creation time, and last modification time.

    <file>: The name of the file to get statistics for.

Example:
Bash

node cli.js file-stats log.txt

make-dir <dir>

Creates a new directory. It can create nested directories if they don't exist.

    <dir>: The name of the directory to create.

Example:
Bash

node cli.js make-dir new-project/src

remove-dir <dir>

Removes a directory and all its contents recursively.

    <dir>: The name of the directory to remove.

Example:
Bash

node cli.js remove-dir old-directory

Viewing Help

You can view the help menu for the CLI by using the -h or --help flag.

Example:
Bash

node cli.js --help
