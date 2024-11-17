# client.py
import asyncio
import websockets

async def client_handler(prompt):
    uri = "ws://localhost:8665"  # Connect to the tunnel on localhost
    async with websockets.connect(uri,  timeout=180) as websocket:
        await websocket.send(prompt)
        print("prompt sent")

	# Open a file to save the received image data
        with open("received_image.png", "wb") as image_file:
            while True:
                chunk = await websocket.recv()
                if chunk == "END":
                    break  # Stop receiving when 'END' message is received
                image_file.write(chunk)
                print(f"Received a chunk of {len(chunk)} bytes")

        print("Image received and saved as received_image.png")




if __name__ == "__main__":
    prompt = "The Moon"
    asyncio.run(client_handler(prompt))

