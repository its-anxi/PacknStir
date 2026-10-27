#!/usr/bin/env python3
"""
EcoPack Studio - Local Development Server
Serves the modern ES modules web application with proper MIME types.
"""

import http.server
import socketserver
import os
import sys

PORT = 3000

class EcoPackHTTPHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Enable CORS and caching headers for local development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        # Ensure JavaScript modules and SVG have correct MIME types
        if path.endswith('.js') or path.endswith('.mjs'):
            return 'application/javascript'
        if path.endswith('.svg'):
            return 'image/svg+xml'
        if path.endswith('.json'):
            return 'application/json'
        if path.endswith('.css'):
            return 'text/css'
        return super().guess_type(path)

def run():
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    handler = EcoPackHTTPHandler
    socketserver.TCPServer.allow_reuse_address = True

    port = PORT
    for attempt in range(5):
        try:
            with socketserver.TCPServer(("", port), handler) as httpd:
                print("\n" + "="*60)
                print(" 🌱 ECOPACK STUDIO - SUSTAINABLE PACKAGING WEB APPLICATION")
                print("="*60)
                print(f"  • Local URL:      http://localhost:{port}")
                print(f"  • Network URL:    http://127.0.0.1:{port}")
                print(f"  • Serving from:   {os.getcwd()}")
                print("="*60)
                print("  Press Ctrl+C to stop the development server.\n")
                httpd.serve_forever()
                break
        except OSError as e:
            if "Address already in use" in str(e):
                port += 1
            else:
                raise e

if __name__ == '__main__':
    run()
