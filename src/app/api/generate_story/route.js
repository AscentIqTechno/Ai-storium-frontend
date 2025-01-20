// import { NextResponse } from 'next/server';
// import { OpenAI } from 'openai';

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { prompt } = body;

//     // Validate the request body
//     if (!prompt || typeof prompt !== 'string') {
//       return NextResponse.json(
//         { error: 'A valid "prompt" is required in the request body.' },
//         { status: 400 }
//       );
//     }

//     const openai = new OpenAI({
//       apiKey: process.env.NEXT_CHAT_GPT_API_KEY,
//     });

//     // Generate a completion using OpenAI's newer model
//     const response = await openai.chat.completions.create({
//       model: 'gpt-3.5-turbo',
//       messages: [
//         { role: 'system', content: 'You are a creative assistant that generates interesting and engaging stories.' },
//         { role: 'user', content: prompt },
//       ],
//       max_tokens: 500,
//       temperature: 0.7,
//     });

//     const generatedStory = response.choices[0]?.message?.content?.trim() || 'No story generated';

//     return NextResponse.json({ story: generatedStory });
//   } catch (error) {
//     console.error('Error generating story:', error);
//     return NextResponse.json(
//       { error: `Error generating story: ${error.message}` },
//       { status: 500 }
//     );
//   }
// }
import { NextResponse } from 'next/server';
import { OpenAI } from 'openai';

export async function POST(req) {
  try {
    const body = await req.json();
    const { prompt } = body;

    // Validate the request body
    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json(
        { error: 'A valid "prompt" is required in the request body.' },
        { status: 400 }
      );
    }

    // Initialize OpenAI client with API key
    const openai = new OpenAI({
      apiKey: process.env.NEXT_CHAT_GPT_API_KEY, // Ensure your API key is set correctly
    });

    // Generate a completion using OpenAI's gpt-3.5-turbo model
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo', // Free-tier users have access to gpt-3.5-turbo
      messages: [
        { role: 'system', content: 'You are a creative assistant that generates interesting and engaging stories.' },
        { role: 'user', content: prompt },
      ],
      max_tokens: 500,
      temperature: 0.7,
    });

    // Get the generated story from the response
    const generatedStory = response.choices[0]?.message?.content?.trim() || 'No story generated';

    // Return the generated story
    return NextResponse.json({ story: generatedStory });
  } catch (error) {
    console.error('Error generating story:', error);
    return NextResponse.json(
      { error: `Error generating story: ${error.message}` },
      { status: 500 }
    );
  }
}
