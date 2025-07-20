# Diversion-Extension

## Overview

Diversion-Extension is a browser extension designed to enhance workflow on the TradingView website. It enables direct injection of Pine Script code into the TradingView Pine Editor, streamlining the process of testing and deploying trading strategies or indicators. This extension is suited for those who frequently work with Pine Script on TradingView and require a faster, more efficient method for code input.

## Features

- **TradingView Integration:** Inject Pine Script code directly into the TradingView Pine Editor with a single click.
- **Popup Interface:** Simple and intuitive popup for quick access to code injection and extension controls.
- **Customizable Settings:** Save and manage multiple Pine Script snippets for easy reuse.
- **Streamlined Workflow:** Eliminate manual copy-pasting and reduce errors when working with Pine Script.

## Installation

1. Download or clone this repository.
2. Open the browser and navigate to the extensions page (e.g., `chrome://extensions` for Chrome).
3. Enable "Developer mode" (usually in the top right corner).
4. Click "Load unpacked" and select the `Diversion-Extension-main` folder.
5. The extension should now appear in the browser's extension list.
6. Navigate to [TradingView](https://www.tradingview.com/) and open the Pine Editor to access the extension's features.

## Usage

1. Go to [TradingView](https://www.tradingview.com/) and open the Pine Editor.
2. Click the Diversion-Extension icon in the browser toolbar to open the popup.
3. Paste or select Pine Script code in the extension popup.
4. Click the "Inject" button to automatically insert the code into the TradingView Pine Editor.
5. Optionally, save and manage multiple Pine Script snippets for future use.

## File Structure

- `background.js`: Handles background tasks and communication between the popup and content scripts.
- `content.js` / `contentScript.js`: Injects Pine Script code into the TradingView Pine Editor and manages page interactions.
- `manifest.json`: Extension manifest file defining permissions and resources.
- `popup.html` / `popup.js`: Popup UI and logic for interaction, including code input and injection controls.
- `style.css`: Styles for the popup interface.
- `README.md`: Project documentation.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create a new branch for the feature or bugfix.
3. Make changes and submit a pull request with a clear description.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details. 