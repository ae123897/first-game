# 🪙 Мини-игра: Собирай монеты (Coin Collection Mini-Game)

A simple and fun browser-based mini-game where you control a character to collect coins. Built with HTML, CSS, and JavaScript.

## 🎮 Game Description

Control a character using arrow keys to collect coins scattered around the game area. Each coin you collect increases your score, and new coins spawn to keep the game going!

## 🚀 Features

- **Simple Controls**: Use arrow keys to move your character
- **Coin Collection**: Collect coins to increase your score
- **Dynamic Spawning**: New coins spawn automatically when collected
- **Real-time Score**: Watch your score increase as you play
- **Responsive Design**: Works on different screen sizes

## 🎯 How to Play

1. **Open** `index.html` in your web browser
2. **Use arrow keys** to move your character:
   - ⬆️ Up Arrow: Move up
   - ⬇️ Down Arrow: Move down
   - ⬅️ Left Arrow: Move left
   - ➡️ Right Arrow: Move right
3. **Collect coins** by touching them with your character
4. **Watch your score** increase with each coin collected
5. **Keep playing** - new coins will spawn to replace collected ones!

## 📁 Project Structure

```
first_game/
├── index.html          # Main HTML file
├── style.css           # CSS styling
├── script.js           # Game logic
├── images/             # Game assets
│   ├── fc792f5f29dde0f6532217908663e19e.jpg
│   └── images.jpg
└── README.md           # This file
```

## 🛠️ Technical Details

### Game Mechanics
- **Player Movement**: 10px per key press
- **Game Area**: 1100x1100 pixels
- **Player Size**: 80x80 pixels
- **Coin Size**: 20x20 pixels
- **Initial Coins**: 8 coins spawned at start
- **Collision Detection**: Rectangle-based collision system

### Technologies Used
- **HTML5**: Structure and game elements
- **CSS3**: Styling and animations
- **JavaScript**: Game logic and interactivity

## 🎨 Customization

You can easily customize the game by modifying:

- **Game speed**: Change the `step` variable in `script.js`
- **Game area size**: Modify `areaSize` variable
- **Number of coins**: Adjust `coinCount` variable
- **Player/coin sizes**: Update `playerSize` and `coinSize` variables
- **Visual appearance**: Edit `style.css` for colors and styling

## 🌐 Browser Compatibility

This game works in all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## 📝 Future Enhancements

Potential improvements for the game:
- [ ] Add obstacles
- [ ] Implement time limits
- [ ] Add sound effects
- [ ] Create different coin types with different point values
- [ ] Add power-ups
- [ ] Implement a high score system
- [ ] Add mobile touch controls

## 👨‍💻 Development

### Running Locally
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Start playing!

### Making Changes
1. Edit the files as needed
2. Refresh your browser to see changes
3. Test the game functionality

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

---

**Enjoy playing! 🎮**
