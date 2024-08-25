from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from groq import Groq

# Load environment variables from .env file
load_dotenv()

# Initialize FastAPI
app = FastAPI()

# Initialize the Groq client with API key from environment variable
client = Groq(api_key=os.getenv("GROQ_API_KEY"))

# Define the request model
class MessageRequest(BaseModel):
    content: str

# Endpoint to generate chat completion
@app.post("/generate-response/")
async def generate_response(request: MessageRequest):
    try:
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": request.content,
                }
            ],
            model="llama3-8b-8192",
        )
        response_content = chat_completion.choices[0].message.content
        return {"response": response_content}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

# Endpoint to check server health
@app.get("/health")
async def health_check():
    return {"status": "ok"}
