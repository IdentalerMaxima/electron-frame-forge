Electron Forge Builder

Electron Forge Builder is a basic Electron frame builder. It sets up a minimal environment where an HTML, CSS, and JavaScript application are connected and rendered through Electron. Any changes made to the source files are reflected in real time. The project uses Electron Forge to build cross-platform packages for Windows and Linux (DEB and RPM).

Requirements: Before building, ensure you have Node.js (download from nodejs.org or install via your system’s package manager), npm (comes with Node.js), and Git (optional but useful).

Building on Windows:

No extra dependencies are required beyond Node.js and npm.

To build the app, run:
npm run make

Building on Linux:

Debian / Ubuntu (DEB)
Install required packages:
sudo apt update
sudo apt install -y dpkg fakeroot rpm

Clone the repository, navigate into it, and install dependencies:
git clone https://github.com/IdentalerMaxima/electron-frame-forge.git
cd electron-frame
npm install

Build the DEB package:
npm run make

The resulting .deb file will appear in out/ or dist/.

Fedora / RHEL / openSUSE (RPM)
Install required packages:
sudo dnf install -y rpm-build fakeroot dpkg

Clone the repository, navigate into it, and install dependencies:
git clone https://github.com/IdentalerMaxima/electron-frame-forge.git
cd electron-frame
npm install

Build the RPM package:
npm run make

The resulting .rpm file will appear in out/ or dist/.

Fedora 41+ Note: If you are running Fedora 41 or newer, you may need to adjust the resource path used by the rpm-builder dependency. Navigate to /electron-frame-forge/node_modules/electron-installer-redhat/resources/spec.ejs and change the following line:
cp <%= process.platform === 'darwin' ? '-R' : '-r' %> usr/* %{buildroot}/usr/
to
cp <%= process.platform === 'darwin' ? '-R' : '-r' %> ../usr/. %{buildroot}/usr/

Fedora 40 and older do not require this modification.

Usage: Clone the repository:
git clone https://github.com/IdentalerMaxima/electron-frame-forge.git
cd electron-frame

Install dependencies:
npm install

Start development mode (auto-reload on changes):
npm start

Build production packages:
npm run make

All builds will be placed in out/ or dist/ folder.

