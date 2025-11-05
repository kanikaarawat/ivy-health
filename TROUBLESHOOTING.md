# 🔧 Troubleshooting Guide

## Common Issues and Solutions

### 1. White Screen / React Version Errors

**Problem:**
- White screen on `localhost:5173`
- Console error: `Cannot read properties of undefined (reading 'ReactCurrentOwner')`
- Build fails with React version mismatches

**Solution:**
This is a React version compatibility issue. The project uses **React 18.3.1** with compatible versions of React Three Fiber.

**Correct versions:**
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `@react-three/fiber`: ^8.15.0
- `@react-three/drei`: ^9.88.0
- `three`: ^0.158.0

**Fix:**
```bash
# Install correct versions
npm install react@18.3.1 react-dom@18.3.1 @react-three/fiber@^8.15.0 @react-three/drei@^9.88.0 three@^0.158.0 --legacy-peer-deps

# Restart dev server
npm run dev
```

---

### 2. Missing Icon Errors

**Problem:**
- Error: `The requested module does not provide an export named 'Flask'`
- Or similar errors for other icons

**Solution:**
Some icon names in `lucide-react` may not exist. Use valid icon names.

**Valid alternatives:**
- `Flask` → `TestTube`
- `Beaker` → `Microscope`
- Check [Lucide React Icons](https://lucide.dev/icons/) for valid names

---

### 3. Port Already in Use

**Problem:**
- Error: `Port 5173 is already in use`

**Solution (Windows):**
```bash
# Find process using port 5173
netstat -ano | findstr :5173

# Kill the process (replace PID with actual process ID)
taskkill /PID [PID_NUMBER] /F

# Restart server
npm run dev
```

**Solution (Mac/Linux):**
```bash
# Find and kill process
lsof -ti:5173 | xargs kill -9

# Restart server
npm run dev
```

---

### 4. 3D Scenes Not Rendering

**Problem:**
- 3D elements appear black or don't render
- Console errors related to WebGL

**Solution:**
1. **Check Browser Support:** Ensure WebGL is supported
   - Visit: https://get.webgl.org/
   
2. **Enable GPU Acceleration:**
   - Chrome: `chrome://settings/` → Advanced → System → Enable hardware acceleration
   - Firefox: `about:config` → `webgl.disabled` → Set to `false`

3. **Try Different Browser:** Chrome usually has the best WebGL support

---

### 5. Slow Performance / Choppy Animations

**Problem:**
- Animations are laggy
- 3D scenes have low FPS

**Solution:**
1. **Close Other Applications:** Free up CPU/GPU resources
2. **Disable Browser Extensions:** Some extensions can interfere
3. **Check Dev Tools:** Close console/inspector when not needed
4. **Reduce Scene Complexity:** Edit 3D components to use fewer objects

---

### 6. Images Not Loading

**Problem:**
- Product images or placeholders not showing
- Broken image icons

**Solution:**
1. **Check Internet Connection:** Unsplash images require internet
2. **Replace with Local Images:** 
   ```javascript
   // In src/content/data.js
   image: '/images/product.jpg' // instead of Unsplash URL
   ```
3. **Add Images to `public/` Folder:**
   ```
   public/
   └── images/
       ├── product1.jpg
       ├── product2.jpg
       └── ...
   ```

---

### 7. Tailwind Styles Not Applying

**Problem:**
- Classes not working
- No styling visible

**Solution:**
1. **Check Tailwind Config:**
   ```javascript
   // tailwind.config.js should include:
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ]
   ```

2. **Restart Dev Server:**
   ```bash
   # Stop server (Ctrl+C)
   npm run dev
   ```

3. **Clear Cache:**
   ```bash
   rm -rf node_modules/.vite
   npm run dev
   ```

---

### 8. Framer Motion Animation Issues

**Problem:**
- Animations not triggering
- `whileInView` not working

**Solution:**
1. **Check Scroll Position:** Ensure section is in viewport
2. **Adjust Viewport Amount:**
   ```jsx
   viewport={{ once: true, amount: 0.1 }} // Lower threshold
   ```
3. **Add Key Prop:** For dynamic content
   ```jsx
   <motion.div key={id} ...>
   ```

---

### 9. Build Errors

**Problem:**
- `npm run build` fails
- Type errors or import issues

**Solution:**
1. **Clear Dependencies:**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm install --legacy-peer-deps
   ```

2. **Check Import Paths:** Ensure all imports are correct
3. **Fix Linting Errors:**
   ```bash
   npm run lint
   ```

---

### 10. Router Not Working

**Problem:**
- Pages not loading
- 404 errors on refresh

**Solution:**
1. **Development:** Should work automatically with Vite
2. **Production:** Configure server for SPA routing
   
   **Netlify:** Add `_redirects` file:
   ```
   /* /index.html 200
   ```
   
   **Vercel:** Add `vercel.json`:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/" }]
   }
   ```

---

## Still Having Issues?

### Debug Checklist

- [ ] Running Node.js v16+
- [ ] Correct React versions installed (18.3.1)
- [ ] No console errors
- [ ] Internet connection active
- [ ] Port 5173 is available
- [ ] WebGL is supported
- [ ] Browser is up to date

### Get More Help

1. **Check Console:** Browser DevTools (F12) → Console tab
2. **Check Terminal:** Look for error messages
3. **Review Recent Changes:** What was the last thing you changed?
4. **Try Clean Install:**
   ```bash
   rm -rf node_modules
   rm package-lock.json
   npm install --legacy-peer-deps
   npm run dev
   ```

---

## Version Requirements

| Package | Version | Why |
|---------|---------|-----|
| Node.js | v16+ | Required for Vite |
| React | 18.3.1 | Compatible with R3F v8 |
| React Three Fiber | 8.15.0 | Works with React 18 |
| Three.js | 0.158.0 | Compatible with R3F v8 |

---

**Need more help?** Check the console logs and error messages - they usually point to the exact issue!

