// Project Data
const projects = {
    '1': {
        title: 'Smart Speaker (ESP32)',
        date: 'Mar - May 2025',
        tech: ['ESP32', 'C/C++', 'Bluetooth', 'Wi-Fi', 'Touchscreen Libraries', 'Gemini', 'Cursor', 'API'],
        problem: 'As part of a student project, the goal was to build a Bluetooth speaker. I pushed further to create a smart speaker with a touchscreen display that would display album covers, song details, and more. Lacking prior expertise in ESP32, libraries, and low-level hardware debugging, development was fraught with memory limitation issues and core panics.',
        solution: `
            <p>I adopted a <strong>modular development approach</strong>, isolating hardware components (screen display, touchscreen input, Bluetooth, Wi-Fi) into separate sub-projects before integrating them into a single, cohesive program.</p>
            <p>This project heavily relied on AI assistance:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Advanced AI Debugging:</strong> Used <strong>Gemini</strong> and <strong>Cursor</strong> to rapidly learn, debug, and implement specialized hardware libraries, drastically reducing the time required to solve complex embedded system issues.</li>
                <li><strong>Workflow Discipline:</strong> Due to the risk of AI-generated code breaking existing features, I practiced rigorous <strong>GitHub commit hygiene</strong>, making small, specific commits at every milestone. This allowed for quick rollbacks and efficient branching to test different debugging solutions, ensuring project stability.</li>
            </ul>
        `,
        outcomeTitle: 'Key Learnings',
        outcome: '<p>Successfully integrated multiple complex hardware features into a single device and developed a robust, AI-assisted workflow for debugging unfamiliar embedded systems.</p>',
        link: null,
        video: 'https://www.youtube.com/embed/_S6PgH1Q6a4'
    },
    '2': {
        title: 'AI Workflow for Interview Content Extraction',
        date: 'Oct 2024',
        tech: ['Video Production', 'Videography', 'OpenAI Whisper', 'Gemini', 'ChatGPT', 'Claude', 'Prompt Engineering', 'Workflow Automation'],
        problem: 'I had a large volume of long-form interview videos. Manually reviewing and transcribing every minute to extract short, commercially viable clips was prohibitively time-consuming and inefficient.',
        solution: `
            <p>I created a pipeline to identify the most compelling content:</p>
            <ol class="list-decimal list-outside pl-5 space-y-2">
                <li><strong>Transcription:</strong> Utilized the <strong>OpenAI Whisper model</strong> to quickly and accurately transcribe all interview audio.</li>
                <li><strong>Analysis and Curation:</strong> Fed the raw transcripts, along with examples of successful commercial scripts, into multiple LLMs (<strong>Gemini, ChatGPT, and Claude</strong>).</li>
                <li><strong>Prompt Engineering:</strong> Developed and refined diverse system prompts to instruct the models to act as content analysts, comparing the transcripts to the examples and extracting sections that matched the required tone and promotional goal.</li>
            </ol>
        `,
        outcomeTitle: 'Outcome',
        outcome: '<p>This workflow saved significant hours of manual review, allowing me to focus immediately on production rather than searching for clips.</p>',
        link: null,
        video: 'https://www.youtube.com/embed/5Ax2cUIOMM4'
    },
    '3': {
        title: 'N8N Automation for Canvas File Downloads',
        date: 'Oct 2025',
        tech: ['N8N', 'Workflow Automation', 'Web Hooks', 'APIs'],
        problem: 'The Canvas learning platform of my university locked down a central page to access and download all files (presentations, assignments, resources) across multiple classes. Manually navigating and clicking into every single class module to download individual files was a repetitive and frustrating process.',
        solution: `
            <p>I developed an automation workflow using <strong>N8N</strong> (a low-code workflow automation tool). This script systematically accesses the relevant class endpoints, identifies all available file links, and downloads them in recursively to a folders on my local personal server.</p>
        `,
        outcomeTitle: 'Outcome',
        outcome: '<p>This simple automation eliminated a major point of friction, saving valuable time and ensuring all resources were immediately available locally without manual interaction.</p>',
        link: null,
        video: 'https://www.youtube.com/embed/Rp-FB3mvlp8'
    },
    '4': {
        title: 'GPT Wrapper (MVP)',
        date: 'Apr - May 2024',
        tech: ['JavaScript', 'Front-end', 'Back-end', 'DigitalOcean', 'GitHub', 'LLM APIs (GPT-3/4)'],
        problem: 'This project, built a year ago in the generative AI trend (with minimal JavaScript knowledge), was an MVP designed to help users write supportive and empathetic biographies of loved ones.',
        solution: `
            <p>The primary engineering challenge was not the front-end or basic hosting, but overcoming the <strong>limitations of the early LLM APIs</strong>. I spent significant time:</p>
            <ul class="list-disc list-outside pl-5 space-y-2">
                <li><strong>Designing System Prompts:</strong> Engineered sophisticated, multi-layered system prompts to force the model into the desired supportive, empathetic, and highly creative tone, maintaining quality over long chat logs.</li>
                <li><strong>End-to-End Delivery:</strong> Managed the full process from concept to deployment on DigitalOcean, including basic chat logging and context-aware features (like summarizing the chat log to write the final biography).</li>
            </ul>
        `,
        outcomeTitle: 'Key Achievement',
        outcome: '<p>Successfully delivered a full-stack application by leveraging early AI tools for co-development and specialized in advanced system prompt design to control model output.</p>',
        link: 'https://github.com/CTLR-X/Dodi',
        images: ['images/Dodi AI Main.jpg', 'images/Dodi AI Chat.jpg', 'images/Bio Editor from dodi AI.jpg', 'images/Dodi AI Options.jpg']
    }
};

