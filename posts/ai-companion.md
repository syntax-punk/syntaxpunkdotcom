---
title: 'AI Chat Companion with Python'
date: '2023-10-22'
short: "Step-by-step guide to making a neat AI chatbot."
hashtags: "tech,dev,ai,python"
---

Ever thought about building an AI chatbot? This guide shows you how to build one, step by step. Let's dive right in.

**TLDR:** [Check the Github repo](https://github.com/syntax-punk/ai-companion) {.margin1}

## **Prep Work** {.hero-margin}

Before anything else, make sure you've got **Python** ready on your machine. And, for installing some tools, ensure you have `pip` up and running.

## **Setting Up Essential Tools and Integrating OpenAI** {.hero-margin}

Here's a breakdown of the main tools our chatbot will leverage:

- **dotenv**: It's a utility that helps us manage environment variables in our Python projects. Instead of hardcoding sensitive information directly into our scripts, `dotenv`{.codeword} allows us to store them in a separate `.env`{.codeword} file, ensuring better security and easier configuration management.

- **langchain**: This is a robust library tailored for building AI chatbots. From loading data to indexing and managing chat interactions, `langchain`{.codeword} handles the heavy lifting, letting us focus on the chatbot's functionality.

- **openai**: A leading name in AI, the `openai`{.codeword} package connects our project to powerful pre-trained models like GPT-3, empowering our chatbot with top-notch conversational abilities.

First up, installation:

```bash
pip install python-dotenv langchain openai
```

To use the capabilities of `openai`{.codeword}, you'll need an API key. This key provides access to OpenAI's vast range of models. Here's how you obtain it:

1. Head to [OpenAI's registration page](https://beta.openai.com/signup/).
2. Complete the sign-up.
3. Inside your account dashboard, go to the API section to create and retrieve your key.

After getting the key, you'll store it in the `.env`{.codeword} file for our project. Here's the format:

```bash
OPENAI_API_KEY=your-api-key
```

Replace `your-api-key`{.codeword} with your actual key. The `dotenv`{.codeword} package ensures our code reads this key, enabling the `openai`{.codeword} functionalities.

## **Kicking Off the Code** {.hero-margin}

Time to roll up our sleeves and start coding. First, we'll import the modules we need:

```python
import sys
from dotenv import load_dotenv
from langchain.document_loaders import TextLoader, DirectoryLoader
from langchain.indexes import VectorstoreIndexCreator
from langchain.llms import OpenAI
from langchain.chat_models import ChatOpenAI
```

These are the building blocks. Each one has its role, helping us load data, manage chat models, and more.

## **Environment Setup** {.hero-margin}

We'll use a `.env`{.codeword} file to store any config or sensitive data. It's a neat way to keep things organized.
So after we've placed your OpenAI API key in the `.env`{.codeword} file. Now, you might be wondering how exactly our Python script knows to look there and fetch the key. Here is the piece of code that does the magic:

```python
load_dotenv()
```

1. **Loading the .env**: At the beginning of our main script, we have the line `load_dotenv()`{.codeword}. When this function is called, it looks for a file named `.env` in the script's directory.

2. **Fetching Values**: Once it finds the `.env`{.codeword} file, `dotenv`{.codeword} loads the key-value pairs defined in it into the environment variables. In our context, it will read the line `OPENAI_API_KEY=your-api-key`{.codeword} and store `your-api-key`{.codeword} as the value for the `OPENAI_API_KEY`{.codeword} environment variable.

3. **Access in Code**: Within our Python code, anytime we need to use the OpenAI API key, it's fetched from the environment variables, making it both secure and convenient.

By using this approach, sensitive information like API keys stays out of the main codebase, reducing risks and making configuration management simpler. If you're using a version control system like Git, you can also add the `.env`{.codeword} file to the `.gitignore`{.codeword} file, ensuring it doesn't get pushed to the remote repository.

## **Data Loaders** {margin1}

Our bot needs some knowledge. For this, we'll pull in documents as its base. Could be a single file or a whole folder as in the example below:

```python
loader = DirectoryLoader('./collection', glob='*.txt')
``` 

In this example we are loading all the `.txt`{.codeword} files in the `collection`{.codeword} folder. In my case the folder contains 2 files; one of them is contacts list and another is just a list of fruits and our goal is to make a chatbot that can answer questions about these two topics.

_Note: You can also load a single file like this_: {.margin1}
```python
loader = TextLoader('./collection/file.txt')
```


## **Setting Up the Index** {.hero-margin}

Once our data's in, we need a way to quickly sift through it. That's where indexing comes in:

```python
index = VectorstoreIndexCreator().from_loaders([loader])
```

## **The Chat Loop** {.hero-margin}

Now the fun part! Let's set up a loop where you can chat with the AI:

```python
def start_chattin():
  print("-> Yo this is your AI companion. Type 'exit' to quit.")

  while True:
    query = input("[you]: ").lower()
  if query == 'exit':
    break

  response = index.query(query, llm=ChatOpenAI())
  print("[ai]: " + response)
```

## **Let's Chat!** {.hero-margin}

Everything's set. Let's fire it up:

```python
if __name__ == '__main__':
    start_chattin()
```

## **Wrap Up** {.hero-margin}

Now you can run your app in the terminal:
```bash
  python app.py
```

and now you can chat with your AI companion, asking questions about the data you loaded. Here's a sample conversation:

```text
-> Yo this is your AI companion. Type 'exit' to quit.

[you]: how many apples do I have?
[ai]: 3
[you]: what's the name of the first person on my contacts list?
[ai]: Erik Olsen
[you]: exit
```

 And there you have it! Your very own AI chat companion. 


You can find the project in the [Github repo here](https://github.com/syntax-punk/ai-companion) or get the full version of the code below:

```python
  import sys

  from dotenv import load_dotenv
  from langchain.document_loaders import TextLoader
  from langchain.document_loaders import DirectoryLoader
  from langchain.indexes import VectorstoreIndexCreator
  from langchain.llms import OpenAI
  from langchain.chat_models import ChatOpenAI

  load_dotenv()

  loader = DirectoryLoader('./collection', glob='*.txt')
  index = VectorstoreIndexCreator().from_loaders([loader])

  def start_chattin():
    print("-> Yo this is your AI companion. Type 'exit' to quit.")
    while True:
      query = input("[you]: ").lower()
      if query == 'exit':
        break

      response = index.query(query, llm=ChatOpenAI())
      print("[ai]: " + response)


  if __name__ == '__main__':
      start_chattin()
```

Keep in mind, this is a basic setup, so feel free to add more features, integrate it with other systems, or just play around.

Happy coding! {.margin2}
