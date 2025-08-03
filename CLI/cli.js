const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

 program.command('Append-file')
    .description('Append one file to another file')
    .argument('<source>', 'file to append from')
    .argument('<destination>', 'file to append to')
    .action((source, destination) => {
        fs.readFile(source, 'utf8', (err, data) => {
            if (err) {
                console.log(err);
                return;
            }
            fs.appendFile(destination, data, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log(`Content of ${source} appended to ${destination}`);
                }
            });
        });
    });

  program.command('Count-lines')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const lines = data.split('\n').length;
        console.log(`There are ${lines} lines in ${file}`);
      }
    });
  });

program.command('Count-word')
  .description('Count the number of specific word in a file')
  .argument('<file>', 'file to count')
  .argument('<word>', 'word to count')
  .action((file, word) => {
    fs.readFile(file, 'utf8', (err, data) => {
        if (err){
            console.log(err);
            return;
        }
        const words = data.split(/\b/);

        let count = 0;
        for(let i = 0; i < words.length; i++) {
            if (words[i].toLowerCase() === word.toLowerCase()) {
                count++;
            }
        }
        console.log(`The word "${word}" appears ${count} times in ${file}`);
    });
  })

program.command('Create-file')
  .description('Create a new file with specified content')
  .argument('<file>', 'file to create')
  .argument('<content>', 'content to write in the file')
  .action((file, content) => {
    fs.writeFile(file, content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`File ${file} created with content: ${content}`);
      }
    });
  });

  program.command('File-stats')
    .description('Get statistics of a file')
    .argument('<file>', 'file to get stats')
    .action((file) => {
        fs.stat(file, (err, stats) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`File: ${file}`);
                console.log(`Size: ${stats.size} bytes`);
                console.log(`Created: ${stats.birthtime}`);
                console.log(`Modified: ${stats.mtime}`);
            }
        });
    });

program.command('List-files')
    .description('List all files in the current directory')
    .action(() => {
        fs.readdir('.', (err, files) => {
            if (err) {
                console.log(err);
            } else {
                console.log('Files in the current directory:');
                files.forEach(file => {
                    console.log(file);
                });
            }
        });
    });

    program.command('Make-dir')
    .description('Create a new directory')
    .argument('<dir>', 'directory to create')
    .action((dir) => {
        fs.mkdir(dir, { recursive: true }, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`Directory ${dir} created successfully`);
            }
        });
    })

        program.command('Remove-dir')
    .description('Remove a directory')
    .argument('<dir>', 'directory to delete')
    .action((dir) => {
        fs.rm(dir, { recursive: true }, (err) => {
            if(err) {
                console.log(err);
            } else {
                console.log(`Directory ${dir} deleted successfully`);
            }
        })
    })

 program.command('Remove-file')
    .description('Remove a file')
    .argument('<file>', 'file to delete')
    .action((file) => {
        fs.unlink(file, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`File ${file} deleted successfully`);
            }
        });
    }); 


    program.command('Rename-file')
    .description('Rename a file')
    .argument('<oldName>', 'current file name')
    .argument('<newName>', 'new file name')
    .action((oldName, newName) => {
        fs.rename(oldName, newName, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log(`File renamed from ${oldName} to ${newName}`);
            }
        });
    });


    program.command('Total-words')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });

program.parse();