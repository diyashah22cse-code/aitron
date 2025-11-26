# VS Code Shell Integration & Development Setup

## ✅ Enabled Features

Your VS Code workspace now has advanced shell integration enabled for better command detection and productivity.

### Shell Integration Benefits
- ✅ **Automatic command detection** - VS Code recognizes command exits and failures
- ✅ **Prompt decoration** - Visual indicators for command status
- ✅ **Session recording** - Tracks terminal history intelligently
- ✅ **Quick navigation** - Jump between command outputs
- ✅ **Notification on completion** - Get alerted when long-running tasks finish

---

## 🎯 Quick Keyboard Shortcuts

### Terminal Navigation
| Shortcut | Action |
|----------|--------|
| `Ctrl+`` | Toggle terminal |
| `Ctrl+Shift+`` | New terminal |
| `Ctrl+Alt+↑/↓` | Move terminal up/down |
| `Ctrl+Shift+X` | Close terminal |

### Command Execution
| Shortcut | Action |
|----------|--------|
| `Ctrl+K` | Clear terminal |
| `↑/↓` | Command history |
| `Ctrl+R` | Search history |

### Task Execution (from Command Palette)
| Shortcut | Command |
|----------|---------|
| `Ctrl+Shift+B` | Run Build Task |
| `Ctrl+Shift+T` | Run Test Task |
| `Ctrl+Shift+P` → `Tasks: Run Task` | Select any task |

---

## 📋 Available VS Code Tasks

### Quick Access
Press `Ctrl+Shift+P` and type `Tasks: Run Task` to see all available tasks:

#### Development Tasks
1. **npm: dev** - Start development server
   - Runs on http://localhost:3000
   - Auto-restarts on file changes
   - Watches for TypeScript errors

2. **npm: build** - Production build
   - Optimizes for deployment
   - Checks TypeScript
   - Generates static assets

3. **npm: lint** - Run linter
   - Checks code quality
   - Fixes formatting issues
   - Enforces style rules

#### Testing Tasks
4. **npm: test** - Run unit tests
   - Executes test suites
   - Shows coverage reports
   - Watches for changes

5. **Playwright: Run Tests** - E2E testing
   - Tests user flows
   - Chrome automation
   - Visual regression checks

6. **Playwright: Debug Tests** - Debug E2E tests
   - Step through code
   - Inspect elements
   - Check assertions

#### Utility Tasks
7. **Clean Build** - Fresh build
   - Removes .next folder
   - Clears cache
   - Rebuilds from scratch

8. **Format Code** - Auto-format all files
   - Prettier formatting
   - Consistent code style
   - Automatic fixes

---

## 🔧 Configuration Files Created

### `.vscode/settings.json`
- Shell integration enabled
- PowerShell configured as default
- Auto-format on save
- TypeScript tooling setup
- File exclusions optimized

### `.vscode/extensions.json`
- Team extension recommendations
- Auto-installs when workspace opens
- Includes: ESLint, Prettier, Tailwind, Playwright, etc.

### `.vscode/launch.json`
- Debug Next.js dev server
- Debug Playwright tests
- Chrome DevTools attach config
- Compound debug configurations

### `.vscode/tasks.json`
- 8 pre-configured tasks
- All common workflows automated
- Background task support
- Error detection patterns

---

## 🚀 Using Shell Integration

### Method 1: Direct Command (Fastest)
```powershell
npm run dev
npm run build
npm run lint
npx playwright test
```

### Method 2: VS Code Tasks
1. Press `Ctrl+Shift+P`
2. Type `Tasks: Run Task`
3. Select task from list
4. Watch for completion notification

### Method 3: Terminal Panel
1. Open terminal: `Ctrl+``
2. Type command directly
3. Shell integration auto-detects exit status
4. Green ✓ for success, Red ✗ for failure

---

## 📊 Terminal Features

### Command Status Indicators
```
✓ Success (green)  - Command completed successfully
✗ Failure (red)    - Command exited with error
⏳ Running (yellow) - Command still executing
```

### Command History
- Press `↑` to navigate previous commands
- Press `Ctrl+R` to search history
- Use `Ctrl+Shift+P` → `Terminal: Run Recent Command`

### Multi-Line Paste
- Paste multi-line code without warnings
- Shell integration handles smart pasting
- Preserves indentation

---

## 🎓 Workflow Examples

### Start Development Session
```powershell
# Option 1: Use task
Press Ctrl+Shift+P → "Tasks: Run Task" → "npm: dev"

# Option 2: Terminal command
npm run dev
```

### Build for Production
```powershell
# Via task (includes type checking)
Press Ctrl+Shift+P → "Tasks: Run Task" → "npm: build"

# Or directly
npm run build
```

### Run Tests with Debug
```powershell
# Via task
Press Ctrl+Shift+P → "Tasks: Run Task" → "Playwright: Debug Tests"

# Or directly
npx playwright test --debug
```

### Clean & Rebuild
```powershell
# Via task (removes cache, rebuilds)
Press Ctrl+Shift+P → "Tasks: Run Task" → "Clean Build"
```

### Format All Code
```powershell
# Via task
Press Ctrl+Shift+P → "Tasks: Run Task" → "Format Code"

# Or directly
npx prettier --write .
```

---

## 🔍 Debugging with Shell Integration

### Debug Next.js
1. Click on `.vscode/launch.json` or press `F5`
2. Select "Next.js Dev Server"
3. Sets breakpoints and inspects code
4. Logs appear in integrated terminal

### Debug Tests
1. Press `F5`
2. Select "Debug Playwright Tests"
3. Step through test execution
4. Inspect page state

### Debug with Chrome DevTools
1. Start dev server: `npm run dev`
2. Open http://localhost:3000
3. Press `F12` to open DevTools
4. Inspector, Console, Network tabs available

---

## 🛠️ Troubleshooting

### Commands Not Recognized
- Ensure you're in workspace folder
- Check terminal shows correct path
- Reload window: `Ctrl+Shift+P` → "Reload Window"

### Tasks Don't Appear
- Check `.vscode/tasks.json` exists
- Reload window
- Verify VS Code version is latest

### Shell Integration Not Working
- Reload window: `Ctrl+Shift+P` → "Reload Window"
- Close and reopen terminal
- Check settings in `.vscode/settings.json`

### Slow Performance
- Exclude node_modules from search: Already configured
- Exclude .next folder: Already configured
- Reduce open files: Close unused editors

---

## 📚 Additional Resources

- [VS Code Terminal Docs](https://code.visualstudio.com/docs/terminal/basics)
- [Shell Integration Guide](https://code.visualstudio.com/docs/terminal/shell-integration)
- [VS Code Debugging](https://code.visualstudio.com/docs/editor/debugging)
- [VS Code Tasks](https://code.visualstudio.com/docs/editor/tasks)

---

## ✨ Pro Tips

1. **Auto-run on startup**: Use `"runOptions": { "runOn": "folderOpen" }`
2. **Background tasks**: Keep dev server running while coding
3. **Quick focus**: Click on output to focus that task
4. **Terminal as editor**: Drag terminal to split screen
5. **Save before build**: Enable auto-save for smooth workflow

---

## 📝 Team Setup

When team members open this workspace:
1. VS Code prompts to install recommended extensions
2. Click "Install All" to get full setup
3. Shell integration auto-activates
4. All tasks immediately available

---

*Last Updated: November 26, 2025*
