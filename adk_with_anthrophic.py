from google.adk.agents import LlmAgent
from google.adk.models.anthropic_llm import Claude # Import needed for registration
from google.adk.models.registry import LLMRegistry # Import needed for registration
from google.genai import types

# --- Register Claude class (do this once at startup) ---
LLMRegistry.register(Claude)

# --- Example Agent using Claude 3 Sonnet on Vertex AI ---

# Standard model name for Claude 3 Sonnet on Vertex AI
claude_model_vertexai = "claude-3-sonnet@20240229"

agent_claude_vertexai = LlmAgent(
    model=claude_model_vertexai, # Pass the direct string after registration
    name="claude_vertexai_agent",
    instruction="You are an assistant powered by Claude 3 Sonnet on Vertex AI.",
    generate_content_config=types.GenerateContentConfig(max_output_tokens=4096),
    # ... other agent parameters
)

print(agent_claude_vertexai)