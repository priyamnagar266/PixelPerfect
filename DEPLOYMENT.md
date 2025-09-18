# Deployment Instructions

## Frontend (Netlify)
1. Go to https://app.netlify.com/ and sign in or create an account.
2. Click "Add new site" > "Import an existing project".
3. Connect your GitHub repo or drag-and-drop your project folder.
4. Set build command: `npm run build`
5. Set publish directory: `dist/public`
6. (Optional) Add environment variables if needed.
7. Deploy the site.

## Backend (Render)
1. Go to https://dashboard.render.com/ and sign in or create an account.
2. Click "New" > "Web Service".
3. Connect your GitHub repo or select "Manual Deploy" and upload your backend code.
4. Set build command: `npm run build`
5. Set start command: `npm start`
6. Add environment variables (e.g., database URLs, CORS origins).
7. Deploy the service.

## Notes
- Make sure your frontend uses the Render backend URL for API calls (set as an environment variable in Netlify).
- Ensure CORS is enabled on your backend for your Netlify domain.
- For Vite, you may need to set `VITE_API_URL` in Netlify's environment variables.
