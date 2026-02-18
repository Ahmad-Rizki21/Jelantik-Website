Creat ai agent Customer service in the website Jelantik, and user input name to question jelantik.com please help me,

The base URL for the region where the API key was created:

Singapore: https://dashscope-intl.aliyuncs.com/compatible-mode/v1

/chat/completions
import OpenAI from "openai";

const openai = new OpenAI(
{
// If you do not configure an environment variable, replace the following line with your Model Studio API key: apiKey: "sk-xxx",
// API keys for the Singapore/Virginia and Beijing regions are different. Get an API key: https://www.alibabacloud.com/help/en/model-studio/get-api-key
apiKey: process.env.DASHSCOPE_API_KEY,
// The following is the base_url for the Singapore region.
baseURL: "https://dashscope-intl.aliyuncs.com/compatible-mode/v1"
}
);

async function main() {
const completion = await openai.chat.completions.create({
model: "qwen-plus", //This example uses qwen-plus. You can change the model name as needed. For a list of models, see https://www.alibabacloud.com/help/en/model-studio/getting-started/models
messages: [
{ role: "system", content: "You are a helpful assistant." },
{ role: "user", content: "Who are you?" }
],
});
console.log(JSON.stringify(completion))
}

main();

OpenAI Respons
import OpenAI from "openai";

const openai = new OpenAI({
// If environment variable is not set, replace with: apiKey: "sk-xxx"
apiKey: process.env.DASHSCOPE_API_KEY,
baseURL: "https://dashscope-intl.aliyuncs.com/api/v2/apps/protocols/compatible-mode/v1"
});

async function main() {
const response = await openai.responses.create({
model: "qwen3.5-plus",
input: "What can you do?"
});

    // Get model response
    console.log(response.output_text);

}

main();

API KEY : sk-9f389e2e18b546ab81b7471ff942b5c6

API Code example

from openai import OpenAI
import os

client = OpenAI( # If the environment variable is not set, replace it with your Model Studio API key: api_key="sk-xxx"
api_key=os.getenv("DASHSCOPE_API_KEY"),
base_url="https://dashscope-intl.aliyuncs.com/compatible-mode/v1",
)

messages = [{"role": "user", "content": "Who are you"}]
completion = client.chat.completions.create(
model="qwen-plus", # You can replace this with another deep thinking models
messages=messages,
extra_body={"enable_thinking": True},
stream=True
)
is_answering = False # Indicates whether the response phase has started
print("\n" + "=" _ 20 + "Thinking process" + "=" _ 20)
for chunk in completion:
delta = chunk.choices[0].delta
if hasattr(delta, "reasoning_content") and delta.reasoning_content is not None:
if not is_answering:
print(delta.reasoning_content, end="", flush=True)
if hasattr(delta, "content") and delta.content:
if not is_answering:
print("\n" + "=" _ 20 + "Full response" + "=" _ 20)
is_answering = True
print(delta.content, end="", flush=True)

and dashcope

import os
from dashscope import Generation
import dashscope
dashscope.base_http_api_url = 'https://dashscope-intl.aliyuncs.com/api/v1'

messages = [
{"role": "system", "content": "You are a helpful assistant."},
{"role": "user", "content": "Who are you?"},
]
response = Generation.call( # If the environment variable is not set, replace it with your Model Studio API key: api_key = "sk-xxx",
api_key=os.getenv("DASHSCOPE_API_KEY"),
model="qwen-plus",
messages=messages,
result_format="message", # Enable deep thinking
enable_thinking=True,
)

if response.status_code == 200: # Print thinking process
print("=" _ 20 + "Thinking process" + "=" _ 20)
print(response.output.choices[0].message.reasoning_content)

    # Print response
    print("=" * 20 + "Full response" + "=" * 20)
    print(response.output.choices[0].message.content)

else:
print(f"HTTP return code: {response.status_code}")
print(f"Error code: {response.code}")
print(f"Error message: {response.message}")
