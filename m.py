from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os
from dotenv import load_dotenv
from groq import Groq

GROQ_API_KEY='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'
load_dotenv()
print("GROQ_API_KEY:", os.getenv("GROQ_API_KEY"))  # This should print your API key or None



api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise ValueError("GROQ_API_KEY environment variable not set or incorrect")

client = Groq(api_key=api_key)



# Load environment variables from .env file


# Verify API Key is loaded correctly
api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    raise ValueError("GROQ_API_KEY environment variable not set or incorrect")

# Initialize FastAPI
app = FastAPI()

# Initialize the Groq client with API key from environment variable
client = Groq(api_key=api_key)

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
