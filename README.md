# Lyrics Card Maker

A React component for creating beautiful, customizable lyrics cards. Perfect for social media sharing, music blogs, or any platform where you want to showcase lyrics in a visually appealing way.

![Demo](https://github.com/placecardus/lyrics-card-maker/raw/main/demo.gif)

## 🌟 Features

- 🎨 Fully customizable design
  - Background color
  - Text color
  - Font size
  - Card layout
- 📝 Rich text formatting for lyrics
- 🖼️ Export cards as images
- 📱 Responsive design
- 🎯 Easy to integrate
- 🌈 Multiple themes support
- 🔄 Real-time preview
- ⌨️ Keyboard shortcuts support
- 📦 Zero dependencies (except peer dependencies)

## 📦 Installation

```bash
npm install lyrics-card-maker
# or
yarn add lyrics-card-maker
# or
pnpm add lyrics-card-maker
```

## 🚀 Quick Start

```jsx
import { LyricsCardMaker } from 'lyrics-card-maker';

function App() {
  return (
    <LyricsCardMaker />
  );
}
```

## 🛠️ Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultTitle` | string | `''` | Default song title |
| `defaultArtist` | string | `''` | Default artist name |
| `defaultLyrics` | string | `''` | Default lyrics text |
| `theme` | 'light' \| 'dark' | `'light'` | Color theme |
| `onSave` | function | `undefined` | Callback when card is saved |
| `customFonts` | string[] | `[]` | Additional fonts to use |
| `maxWidth` | number | `600` | Maximum width of the card |
| `maxHeight` | number | `800` | Maximum height of the card |

## 🎨 Custom Styling

You can customize the appearance using CSS variables:

```css
.lyrics-card-maker {
  --lcm-primary-color: #007bff;
  --lcm-secondary-color: #6c757d;
  --lcm-font-family: 'Arial', sans-serif;
  --lcm-border-radius: 8px;
}
```

## 🌐 Live Demo

Check out our live demo at: [https://lyric-card-maker.vercel.app](https://lyric-card-maker.vercel.app)

## 📚 Examples

### Basic Usage
```jsx
import { LyricsCardMaker } from 'lyrics-card-maker';

function BasicExample() {
  return (
    <LyricsCardMaker
      defaultTitle="Yesterday"
      defaultArtist="The Beatles"
      theme="light"
    />
  );
}
```

### With Custom Theme
```jsx
function CustomThemeExample() {
  return (
    <LyricsCardMaker
      theme="dark"
      customFonts={['Roboto', 'Open Sans']}
      onSave={(image) => {
        console.log('Card saved!', image);
      }}
    />
  );
}
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl/Cmd + S` | Save card |
| `Ctrl/Cmd + Z` | Undo |
| `Ctrl/Cmd + Shift + Z` | Redo |
| `Ctrl/Cmd + B` | Toggle bold text |
| `Ctrl/Cmd + I` | Toggle italic text |

## 🤝 Contributing

We welcome contributions! Please see our [contributing guidelines](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [html2canvas](https://html2canvas.hertzen.com/) for image export functionality
- All our contributors and users

## 🐛 Bug Reports

Please use the [GitHub Issues](https://github.com/placecardus/lyrics-card-maker/issues) page to report any bugs.

## 📫 Contact

- Twitter: [@mark_homaa](https://twitter.com/mark_homaa)
- GitHub: [placecardus](https://github.com/placecardus)
