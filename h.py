import os
from dotenv import load_dotenv
from groq import Groq

# Load environment variables from .env file
load_dotenv()

# Initialize the Groq client with API key from environment variable
client = Groq(api_key=os.environ.get("GROQ_API_KEY"))

# While loop to continuously prompt for user input
while True:
    # Get user input
    user_input = input("You: ")
    
    # Exit condition
    if user_input.lower() in ['exit', 'quit', 'q']:
        print("Thank You, feel free to ask me anything anytime!")
        break
    
    try:
        # Make request to the Groq API
        chat_completion = client.chat.completions.create(
            messages=[
                {
                    "role": "user",
                    "content": user_input,
                }
            ],
            model="llama3-8b-8192",
        )
        
        # Print the response from the API
        response_content = chat_completion.choices[0].message.content
        print(f"Groq: {response_content}")
    
    except Exception as e:
        print(f"Error: {str(e)}")
