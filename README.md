# WFL - Wells Fargo Login Page (Updated)

A local copy of the Wells Fargo login page with modifications.

## Features

- Static Wells Fargo login interface
- Disabled external link navigation (all links are prevented from redirecting away from this page)
- Local hosting support

## Running Locally

To run this website locally, use Python's built-in HTTP server:

```bash
cd "F:\Web Apps\WFL - Updt"
python -m http.server 8000
```

Then open your browser and navigate to:
```
http://localhost:8000/WFL.html
```

## Files

- `WFL.html` - Main login page
- `WFL_files/` - Supporting assets (CSS, JavaScript, images)

## Notes

- This is a static HTML archive and does not connect to actual Wells Fargo services
- All external navigation links are disabled to keep users on this page
- External API calls and third-party resources may not load due to CORS restrictions

## License

This is a demonstration/educational copy of the Wells Fargo login interface.
