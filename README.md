# Minecraft schematic server decoder

This is a local Node.js server made to decode minecraft `.schematic` or `.schem` files for the use of my roblox plugin.

## Getting started 🚀

### 1. Download the files
Create a new folder with the following files inside:
- `decode-server.js`
- `package.json`

### 2. Install Node.js
Download and install Node.js from [https://nodejs.org/en/download](https://nodejs.org/en/download)

### 3. Open the folder you created
Open **Windows PowerShell** and goto your folder location:
*Example:* `powershell
cd "C:\Users\YOURNAME\Downloads\decode-server"`

### 4. Install dependancies
Run: `npm install`

### 5. Run the server
Run: `npm run`

The server should start and output something like this: `Your app is listening on http://localhost:49842`
if it does, then your done and you can now run the plugin with no issues.

## Creating a standalone executable 🦆

### 1. Open the folder you created
Open **Windows PowerShell** and goto your folder location:
*Example:* `powershell
cd "C:\Users\YOURNAME\Downloads\decode-server"`

### 2. Install `pkg`
Run: `npm install -g pkg`

### 3. Build the executable
Run: `pkg decode-server.js --targets node18-win-x64 --output minecraft-decode-server.exe`

If everything worked correctly, inside of the folder you created should be a executable. You are now done and can use the executable whenever you use the plugin.

## Notes

You may see some errors when installing or building the executable, but most errors are really just warnings and shoud still work without issue.

## Credits

Credits goes to https://devforum.roblox.com/t/minecraft-schematic-importer/1613029 for creating the files
